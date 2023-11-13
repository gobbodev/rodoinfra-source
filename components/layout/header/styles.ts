import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  width: 100vw;
  z-index: 999;
  top: 0;

  .menu-mobile {
    display: none;
    position: absolute;
    justify-content: flex-end;
    margin-right: 15px;
    margin-top: 20px;
    right: 0;

    .menu-box {
      background-color: #fff;

      .top-box {
        height: 80%;
        padding-right: 0;
        nav {
          margin-top: 7vh;

          a {
            margin-top: 35px;
            color: ${(props) => props.theme.lightBlue};
          }
        }

        button {
          position: absolute;
          right: 50px;
          min-width: 20px !important;
          margin-right: -15px;

          svg {
            fill: ${(props) => props.theme.lightBlue};
          }
        }
      }

      div:nth-child(2) {
        border-color: ${(props) => props.theme.lightBlue2};
      }

      .links {
        .top {
          justify-content: center;
          gap: 25px;

          a {
            width:30px;
              height:30px;
            background-color: ${(props) => props.theme.lightBlue};

            svg {
              width:18px;
              height:18px;

              path {
                fill: #fff;
              }
            }
          }
        }
      }
    }
  }

  .container {
    position: relative;
    display: flex;
    width: 100vw;
    padding: 0 0;
    justify-content: space-between;

    .content-left {
      position: relative;
      display: flex;
      left: 0;

      .box-logo {
        height: 6vw;
        z-index: 3;
      }

      &:after {
        content: "";
        position: absolute;
        left: -30vw;
        top: 0;
        background-color: #fff;
        width: 51vw;
        height: 6vw;
        transform: skew(-25deg);
        z-index: 1;
      }
    }

    .content-right {
      position: relative;
      margin-right: -3.2vw;
      height: 4.8vw;
      display: flex;

      &:after {
        content: "";
        position: absolute;
        left: -15vw;
        top: 0;
        background-color: ${(props) => props.theme.lightBlue};
        width: 100vw;
        height: 4.8vw;
        z-index: -1;
      }

      .menu-links {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 39px;

        a {
          position: relative;
          color: #fff;

          svg {
            width: 24px;
          }

          &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 1px;
            background-color: #fff;
            left: 0;
            bottom: -7px;
          }

          &:hover {
            &::after {
              width: 100%;
            }
          }
        }

        /* .wpp,
        .insta {
          &::after {
            display: none;
          }
        } */

        .wpp {
          padding: 10px 23px;
          transform: skewX(-20deg);
          background-color: ${(props) => props.theme.green};

          > span {
            display: flex;
            align-items: center;
            gap: 6px;
            transform: skewX(20deg);
          }
        }

        .insta {
          margin-left: -11px;
        }
      }
    }
  }

  @media only screen and (max-width: 1325px) {
    .container {
      .content-left {
        .box-logo {
          height: 7vw;
        }

        &:after {
          height: 7vw;
        }
      }
      .content-right {
        margin-right: -0.8vw;
        height: 5.5vw;

        &:after {
          height: 5.5vw;
        }
      }
    }
  }
  @media only screen and (max-width: 1175px) {
    .container {
      .content-left {
        left: 0.8vw;
        .box-logo {
          height: 8vw;
        }

        &:after {
          width: 52.8vw;
          height: 8vw;
        }
      }
      .content-right {
        height: 6.2vw;
        margin-right: 2vw;

        &:after {
          height: 6.2vw;
        }

        .menu-links {
          .wpp {
            padding: 8px 15px;

            > span {
              span {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    .menu-mobile {
      display: flex;
    }

    .container {
      .content-left {
        &:after {
          height: 90px;
          width: 80vw;
        }

        .box-logo {
          position: relative;
          height: 90px;
          right: -2vw;
        }
      }

      .content-right {
        width: 38%;

        &:after {
          right: 0;
          height: 65px;
        }

        .menu-links {
          a {
            display: none;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 520px) {
    .container {
      .content-left {
        &:after {
          height: 82px;
          width: 110vw;
        }

        .box-logo {
          position: relative;
          height: 82px;
          right: -5vw;
        }
      }

      .content-right {
        width: 15vw;

        &:after {
          right: 0;
          height: 65px;
        }
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .container {
      .menu-mobile {
        nav {
          text-align: center !important;
          align-items: center !important;
          gap: 8px;
        }
      }

      .content-left {
        &:after {
          width: 102vw;
        }
      }
    }
  }
  @media only screen and (max-width: 360px) {
  }
`;
