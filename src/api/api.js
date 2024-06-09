import dummyPosts from "./dummyPosts.json";
import dummyStories from "./dummyStories.json"

let posts = dummyPosts;
const stories = dummyStories;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

export const getPosts = async () => {
    await delay(500);
    return posts;
}

export const likePost = async (postId) => {
    // await delay(10);
    posts = posts.map(post => {
        if (post.id === postId) {
            return {...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked}
        } else return post;
    })
    return posts;
}

export const commentOnPost = async (postId, username, comment) => {
    const post = posts.find(post => post.id === postId);
    console.log('post', post);
    console.log('post.isCommented', post.isCommented);


    if (post && !post.isCommented) {
        post.isCommented = true;
        post.comments.push({username, text: comment})
        return post;
    }

    throw new Error(JSON.stringify({code: 500}));
}

export const getStories = async () => {
    await delay(500);
    return stories;
}
