import styled from "styled-components";
import {Modal} from "react-bootstrap";

export const StoriesContainer = styled.ul`
  list-style: none;
  padding: unset;
  margin: unset;
  overflow-x: scroll;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5em;
`;

export const StoryContainer = styled.li`
  padding: 0 10px;
  cursor: pointer;

  .username {
    text-align: center;
    max-width: 74px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 3px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.01em;

  }
`

export const GradientBorder = styled.div`
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: linear-gradient(to right, red, orange);
  padding: 2px;
`;

export const StoryModal = styled(Modal)`
  //background-color: red;

  .modal-body {
    padding: 0.25rem;

    img {
      border-radius: var(--bs-border-radius-lg);
    }
  }
`;
