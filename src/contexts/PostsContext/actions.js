import {commentOnPost as commentOnPostAPI, getPosts, getStories, likePost as likePostAPI} from "../../api/api";

export default function (state, updateState, loaderSetters) {
    const fetchPosts = async () => {
        try {
            const posts = await getPosts();
            updateState({posts})
        } catch (e) {

        }
    };

    const fetchStories = async () => {
        try {
            const stories = await getStories();
            updateState({stories})
        } catch (e) {

        }
    }

    const likePost = async (postId) => {
        try {
            const updatedPosts = await likePostAPI(postId);
            updateState({posts: updatedPosts})
        } catch (e) {

        }
    }

    const commentOnPost = async (postId, username, comment) => {
        try {
            const updatedPost = await commentOnPostAPI(postId, username, comment);
            console.log('updatedPost', updatedPost);

            const indexToBeUpdated = state.posts.findIndex(post => post.id === postId);
            updateState({
                posts: [
                    ...state.posts.slice(0, indexToBeUpdated),
                    updatedPost,
                    ...state.posts.slice(indexToBeUpdated + 1)
                ]
            })
        } catch (e) {
            console.log("e", e);
        }
    }

    async function fetchData() {
        loaderSetters.setFetchDataLoader(true);
        await Promise.all([this.fetchPosts(), this.fetchStories()])
        loaderSetters.setFetchDataLoader(false);
    }

    return {
        fetchPosts, fetchData, fetchStories, likePost, commentOnPost
    }
}
