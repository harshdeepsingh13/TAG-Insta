import styled from "styled-components";
import {SpriteContainer} from "../../styles/globalStyles";

export const HeaderContainer = styled.header`
  //padding: 10px 0;
  min-height: 60px;
  margin-bottom: 1.5em;
  border-bottom: thin solid rgb(219, 219, 219);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: white;

  .header-action {
    cursor: pointer;
  }

  .row {
    align-items: center;
  }

  .right {
    .row {
      justify-content: flex-end;
    }
  }

  .mb-tabs {
    max-width: unset !important;
    max-width: unset !important;
    display: none;
    border-top: thin solid rgb(219, 219, 219);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: unset;

    background-color: white;
    z-index: 999;

    .col {
      display: flex;
      justify-content: center;
    }
  }


  @media (max-width: 576px) {
    margin-bottom: 0.75em;
  }

  @media (max-width: 768px) {
    position: relative;
    min-height: 40px;
    z-index: unset;

    .left {
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;

    }

    .center, .right {
      display: none;
    }

    .mb-tabs {
      display: block;
    }
  }
`;

export const HeaderLogo = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width: 120px;
    

  }

`;
export const HeaderIcon = styled(SpriteContainer)`
`;
