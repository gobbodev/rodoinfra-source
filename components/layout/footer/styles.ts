import styled from "styled-components";

export const Footer = styled.footer`
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 0;
      transform: rotate(-90deg) translateX(36px);
    }
    60% {
      opacity: 0;
      transform: rotate(-90deg) translateX(-36px);
    }
    90% {
      opacity: 1;
    }
  }

  position: relative;
  padding-top: 100px;
  padding-bottom: 10px;
  border-top: 5px solid ${(props) => props.theme.lightBlue2};
  background-color: ${(props) => props.theme.lightBlue};

  .footer-top {
    position: absolute;
    top: -25px;
    left: 50%;
    margin-left: -44px;

    a {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.lightBlue2};
      border-radius: 30px;

      svg {
        position: absolute;
        width: 9px;
        top: 35%;
        transform: rotate(-90deg);
      }
      &:hover {
        svg {
          animation: scroll 0.8s;
        }
      }
    }
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .content-footer {
      display: flex;
      align-items: center;

      a {
        color: #fff;
      }
    }

    nav {
      display: flex;
      gap: 90px;

      &:hover {
        a {
          color: rgb(127, 187, 227, 0.9);
        }
      }

      a {
        &:hover {
          color: #fff;
        }
      }
    }

    .box-logo {
      margin-top: -30px;
      padding: 0 90px;
    }
  }

  .footer-bottom {
    margin-left: -40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    .box-social {
      display: flex;
      gap: 20px;
      align-items: center;

      svg {
        width: 20px;

        path {
          fill: ${(props) => props.theme.orange};
          transition: 0.3s all;
        }

        &:hover {
          path {
            fill: ${(props) => props.theme.darkBlue};
          }
        }
      }
    }

    .box-codie-logo {
      svg {
        width: 50px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .footer-top {
      margin-left: -42px;
      a {
      }
    }

    .container {
      .content-footer {
        nav {
          gap: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    .container {
      .content-footer {
        nav {
          gap: 40px;
        }

        .box-logo {
          padding: 0 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 865px) {
    margin-right: -23px;
    padding-top: 200px;

    .footer-top {
      margin-left: 0;
      transform: translateX(-50%);
    }

    .container {
      .content-footer {
        position: relative;

        .menu-nav-2 {
          margin-left: 60px;
        }

        .box-logo {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 0 0;
          min-width: 170px;
        }
      }

      .footer-bottom {
        gap: 50px;
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 615px) {
    .container {
      .content-footer {
        .menu-nav-2 {
          margin-left: 30px;
        }
      }
    }
  }

  @media only screen and (max-width: 565px) {
    margin-right: 0;
    padding-top: 180px;

    .footer-top {
      a {
        width: 42px;
        height: 42px;

        svg {
          width: 6px;
        }
      }
    }

    .container {
      .content-footer {
        flex-direction: column;
        text-align: center;

        .menu-nav-2 {
          margin-left: 0;
          margin-top: 30px;
        }

        nav {
          flex-direction: column;
          gap: 30px;

          a {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
