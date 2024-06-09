import {GradientBorder, StoriesContainer, StoryContainer, StoryModal} from "./styles";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import {ImagePlaceholder} from "../../styles/globalStyles";

const Stories = ({stories}) => {
    return <>
        <StoriesContainer className={"no-scrollbar"} xs={"auto"}>
            {stories.map(story => <Story key={story.id} {...story}/>)}
        </StoriesContainer>
    </>
}

const Story = ({id, username, profilePic, imageUrl}) => {

    const [show, setShow] = useState(false)

    return <>
        <StoryContainer onClick={() => setShow(true)}>
            <StoryModalContainer id={id} imageUrl={imageUrl} show={show} onHide={() => setShow(false)}/>
            <GradientBorder>
                <img className={"profile-pic"} src={profilePic} alt={"user profile pic"}/>
            </GradientBorder>
            <div className="username">{username}</div>
        </StoryContainer>
    </>
}

const StoryModalContainer = ({id, show, imageUrl, onHide}) => {

    const [isLoaded, setIsLoaded] = useState(false);


    return <>
        <div onClick={e => e.stopPropagation()}>
            <StoryModal show={show} onHide={onHide} centered>
                <Modal.Body closeButton>
                    {!isLoaded && <ImagePlaceholder animation={"wave"} size={"lg"} xs={12}
                                                    bg={"light"}/>}
                    <img src={imageUrl} alt={`Story ${id}`} style={{width: "100%"}} onLoad={() => setIsLoaded(true)}/>
                </Modal.Body>
            </StoryModal>
        </div>
    </>
}

export default Stories;
