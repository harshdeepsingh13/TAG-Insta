import {Comment, PostAction, PostContainer, PostsContainer} from "./styles";
import {ImagePlaceholder, SpriteContainer} from "../../styles/globalStyles";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {usePostsContext} from "../../contexts/PostsContext";

const Posts = ({posts}) => {

    const {actions: {likePost, commentOnPost}} = usePostsContext();

    const handleComment = (postId, comment, username = "testuser") => {
        commentOnPost(postId, username, comment);
    }

    return <>
        <PostsContainer>
            {posts.map(post => <Post key={post.id} {...post} onLikePost={() => likePost(post.id)}
                                     onComment={handleComment}/>)}
        </PostsContainer>

    </>
}

const Post = ({
                  id,
                  username,
                  profilePic,
                  imageUrl,
                  caption,
                  comments,
                  likes,
                  isLiked,
                  isCommented,
                  onLikePost,
                  onComment
              }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [commentText, setCommentText] = useState("");

    const likeIcon = {originX: isLiked ? -181 : -208, originY: -487}

    return <PostContainer>

        <Row className="post-header">
            <Col className="left">
                <img src={profilePic} alt="User profile pic" className={"profile-pic"}/>
                <div className="username">{username}</div>
            </Col>
            <Col className="right" xs={"auto"}>
                <SpriteContainer width={15} originX={-538} originY={-114}/>
            </Col>
        </Row>
        <div className="post-image">
            <img src={imageUrl} alt="Post main image" onLoad={() => {
                setIsImageLoaded(true);
            }}/>
            {
                !isImageLoaded &&
                <ImagePlaceholder animation={"wave"} size={"lg"} xs={12}
                                  bg={"light"}/>
            }

        </div>
        <div className="post-footer">
            <Row className="action-bar">
                <Col className="left">
                    <PostAction width={24} originX={likeIcon.originX} originY={likeIcon.originY} id={`post-like-${id}`}
                                onClick={onLikePost}/>
                    <PostAction width={24} originX={-130} originY={-460} id={`post-comment-${id}`}/>
                    <PostAction width={24} originX={-234} originY={-461} id={`post-share-${id}`}/>

                </Col>
                <Col className="right" xs={"auto"}>
                    <PostAction width={24} originX={-537} originY={-390} id={`post-save-${id}`}/>
                </Col>
            </Row>
            <Row className="likes-count">
                {likes} likes
            </Row>
            <Row className="caption-container">
                <p>
                    <span className={"username"}>{username}</span> {caption}
                </p>
            </Row>
            <Row className="comments">
                {comments?.length ?
                    comments.map(({username, text}) => <Comment key={username}>
                        <div className="username">{username}</div>
                        <div className="comment">{text}</div>
                    </Comment>)
                    : null}
                {
                    !isCommented &&

                    <Row className="add-comment">
                        <Col>
                            <input type="text" name={`comment-${id}`} id={`comment-${id}`}
                                   placeholder={"Add a comment..."} value={commentText}
                                   onChange={({target: {value}}) => setCommentText(value)}
                            />
                        </Col>
                        <Col xs={"auto"}>
                            <button type={"button"} onClick={() => {
                                onComment(id, commentText);
                                setCommentText("");
                            }}>Post
                            </button>
                        </Col>
                    </Row>
                }
            </Row>
        </div>
    </PostContainer>
}

export default Posts;
