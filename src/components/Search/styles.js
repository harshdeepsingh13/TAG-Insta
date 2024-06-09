import styled from "styled-components";
import variables from "../../styles/variables";

export const SearchInput = styled.input`
  border: 1px solid #ececec;
  background-color: #ececec;
  border-radius: ${variables.borderRadius};
  width: 100%;
  padding: 5px 5px 5px 45px;
  outline-color: #dbdbdb;
`;

export const SearchLabel = styled.label`
  position: relative;
  width: 100%;

  &:before {
    content: "";
    background: url("assets/sprite.png") 0 -512px no-repeat;
    width: 24px;
    height: 24px;
    position: absolute;
    //z-index: -1;
    left: 25px;
    opacity: 0.5;
    top: 5px;
  }
`;
