import styled from "styled-components";
import {SpriteContainer} from "../../styles/globalStyles";

export const PostsContainer = styled.div`
  max-width: 500px;
  margin: auto;

  & > * {
    width: 100%;
  }
`;

export const PostContainer = styled.div`

  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: thin solid rgb(219, 219, 219);

  .post-header {
    .profile-pic {
      --size: 36px;
      margin-right: 1em;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .username {
      display: inline-block;
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
    }
  }

  .post-image {
    img {
      width: 100%;
    }
  }

  .post-footer {
    font-size: 14px;

    .action-bar {

      .left {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }

    .likes-count {
      padding: 0 0.75rem;

      font-weight: 600;
      margin-bottom: 5px;
    }

    .caption-container {
      p {
        margin-bottom: unset;
      }

      .username {
        font-weight: 600;
        padding-right: 10px;
      }
    }

    .comments {
      color: rgb(115, 115, 115);
      margin-top: 5px;

      .add-comment {
        margin-top: 5px;
        padding-right: unset;

        & > * {
          padding-top: unset;
          padding-bottom: unset;
        }

        input {
          border: unset;
          outline: unset;
        }

        button {
          background: unset;
          border: unset;
          font-weight: 600;
          outline-color: rgb(0, 149, 246);
          color: rgb(0, 149, 246);
        }
      }
    }

  }
`;

export const PostAction = styled(SpriteContainer)`
  cursor: pointer;
`;

export const Comment = styled.div`
  display: flex;

  .username {
    font-weight: 600;
    margin-right: 10px;
  }

`;
