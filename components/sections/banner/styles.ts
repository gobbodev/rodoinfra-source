import styled from "styled-components";

export const Banner = styled.section`
  @keyframes b-scroll {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 0;
      transform: translateY(10px);
    }
    60% {
      opacity: 0;
      transform: translateY(-12px);
    }
    90% {
      opacity: 1;
    }
  }

  position: relative;
  height: 100vh;

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  .banner-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    position: relative;
    display: flex;
    justify-content: center;

    .content {
      margin-top: 18.5vw;
      z-index: 2;
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 2.03vw;
      text-align: center;

      h1 {
        line-height: 80px;
      }

      p {
        color: #fff;
        max-width: 620px;
        line-height: normal;
      }

      .budget {
        margin-top: 1vw;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }

  .know-more {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: -1vw;
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;
    a {
      background-color: ${(props) => props.theme.primaryColor}!important;
      width: 26.4vw !important;
      display: flex;
      justify-content: flex-end;
      padding: 8px 80px;
      font-family: "Onest" !important;

      &:hover {
        color: #fff !important;
        svg {
          animation: b-scroll 0.8s;
          path {
            fill: #fff !important;
          }
        }
      }
    }

    svg {
      width: 12px !important;
    }
  }

  @media only screen and (max-width: 1450px) {
    .container {
      .content {
        h1 {
          line-height: 72px;
        }
      }
    }

    .know-more {
      a {
        width: 27.45vw !important;
      }
    }
  }

  @media only screen and (max-width: 1330px) {
    .container {
      height: 100vh;

      .content {
        margin-top: 0;
        height: 100%;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .container {
      .content {
        h1 {
          font-size: 74px;
          line-height: 88px;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      .content {
        h1 {
          font-size: 68px;
          line-height: 78px;
        }
      }
    }
  }

  @media only screen and (max-width: 725px) {
    .container {
      .content {
        gap: 15px;
        h1 {
          font-size: 62px;
          line-height: 74px;
        }

        .budget {
          margin-top: 15px;
        }
      }
    }

    .know-more {
      a {
        width: 35.4vw !important;
      }
    }
  }

  @media only screen and (max-width: 630px) {
    .container {
      .content {
        h1 {
          font-size: 56px;
          line-height: 70px;
        }
      }
    }
  }

  @media only screen and (max-width: 590px) {
    .container {
      .content {
        h1 {
          font-size: 46px;
          line-height: 60px;
        }
      }
    }

    .know-more {
      left: -2vw;
      a {
        padding-right: 40px;
      }
    }
  }

  @media only screen and (max-width: 465px) {
    .container {
      .content {
        h1 {
          font-size: 40px;
          line-height: 48px;
        }
      }
    }

    .know-more {
      a {
        padding-right: 30px;
        width: 42.4vw !important;
      }
    }
  }
  @media only screen and (max-width: 420px) {
  }
  @media only screen and (max-width: 400px) {
    .container {
      .content {
        h1 {
          font-size: 37px;
          line-height: 46px;
        }
      }

      .know-more {
        a {
          padding-right: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 374px) {
    .container {
      .content {
        h1 {
          font-size: 32px;
          line-height: 42px;
        }
      }
    }
  }
`;
