import {HeaderContainer, HeaderIcon, HeaderLogo} from "./styles";
import {Col, Container, Row} from "react-bootstrap";
import Search from "../Search";

const Header = (props) => {
    return <>
        <HeaderContainer>
            <Container>
                <Row>
                    <Col className={"left"}>
                        <HeaderLogo src={"assets/logo.png"} alt={"Brand Logo"} className={"header-action"}/>
                    </Col>
                    <Col className={"center"} md={6}>
                        <Search/>
                    </Col>
                    <Col className={"right"}>
                        <Row xs={"auto"}>
                            <Col>
                                <HeaderIcon role={"img"} width={24} originX={-339} originY={-512} id={"profile"}
                                            className={"header-action"}/>
                            </Col>
                            <Col>
                                <HeaderIcon role={"img"} width={24} originX={-229} originY={-397} id={"messages"}
                                            className={"header-action"}/>
                            </Col>
                            <Col>
                                <HeaderIcon role={"img"} width={24} originX={-208} originY={-487} id={"notifications"}
                                            className={"header-action notification-pin"}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className={"mb-tabs"}>
                <Row>
                    <Col>
                        <HeaderIcon role={"img"} width={24} originX={-260} originY={-486} id={"mb-home"}
                                    className={"header-action"}/>
                    </Col>
                    <Col>
                        <HeaderIcon role={"img"} width={24}
                                    originX={-229} originY={-397}
                                    id={"mb-messages"}
                                    className={"header-action"}/>
                    </Col>
                    <Col>
                        <HeaderIcon
                            role={"img"} width={24} originX={0} originY={-512} id={"mb-search"}
                            className={"header-action"}/>
                    </Col>
                    <Col>
                        <HeaderIcon
                            role={"img"} width={24} originX={-208} originY={-487} id={"mb-notifications"}
                            className={"header-action notification-pin"}/>
                    </Col>
                    <Col>
                        <HeaderIcon role={"img"} width={24} originX={-339}
                                    originY={-512} id={"mb-profile"}
                                    className={"header-action"}/>
                    </Col>
                </Row>


            </Container>
        </HeaderContainer>
    </>;
}

export default Header;
