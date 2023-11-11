import styled from "styled-components";

export const Parallax = styled.section`
  position: relative;
  padding: 8.23vw 0;

  background: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/parallax/parallax.jpg");

  .gradient {
    position: absolute;
    height: 100%;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
    top: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 30px;

    h2 {
      text-transform: uppercase;
      color: #fff;
      line-height: normal;
      z-index: 1;
    }
    p {
      max-width: 660px;
      color: #fff;
      z-index: 1;
    }
  }

  @media only screen and (max-width: 1450px) {
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 767px) {
  }
  @media only screen and (max-width: 660px) {
  }
  @media only screen and (max-width: 550px) {
  }
  @media only screen and (max-width: 400px) {
  }
  @media only screen and (max-width: 374px) {
  }
`;
