import styled from "styled-components";
import {Placeholder} from "react-bootstrap";

export const SpriteContainer = styled.div`
  ;
  ${({width, height, originX, originY}) => ({
	background: `url("assets/sprite.png") no-repeat ${originX}px ${originY}px`,
	width: `${width}px`,
	height: `${height || width}px`,
})}
`;

export const ImagePlaceholder = styled(Placeholder)`
	display: inline-block;
	--bs-light-rgb: 222, 222, 222;
	//aspect-ratio: 1/2;
	min-height: 300px;
	max-height: 500px;
`;
