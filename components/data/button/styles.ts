import styled from "styled-components";

export const Button = styled.div`
  width: fit-content;
  a {
    display: block;
    color: #fff;
    transform: skewX(-20deg);
    background-color: ${(props) => props.theme.green};
    padding: 13px 35px;

    span {
      display: flex;
      align-items: center;
      gap: 10px;
      transform: skewX(20deg);
    }

    svg {
      width: 22px !important;
      path {
        transition: 0.25s;
      }
    }
    &:hover {
      color: ${(props) => props.theme.green};
      background-color: #fff;
      svg {
        path {
          fill: ${(props) => props.theme.green} !important;
        }
        stroke: ${(props) => props.theme.green} !important;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    a {
    }
  }
`;
