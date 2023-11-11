import styled from "styled-components";

export const Services = styled.section`
  position: relative;
  background-color: rgb(0, 107, 179, 0.15);

  .block {
    display: flex;

    .out-container {
      width: 50vw;
      height: 100%;

      .box-image {
        min-height: 45.08vw;
      }
    }

    .custom-container {
      display: flex;
      width: 50vw;
      padding-left: 15px;
      padding-right: 15px;
      align-items: center;
      z-index: 9;

      ul {
        max-width: 570px;
        display: flex;
        flex-direction: column;
        gap: 3.13vw;

        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;

          .subtitle {
            display: flex;
            align-items: center;
            gap: 0.78vw;
            margin-bottom: 0.52vw;

            .box-icon {
            }

            h5 {
              color: ${(props) => props.theme.lightBlue};
              transition: 0.2s ease-out;
            }
          }

          p {
            line-height: 22px;
            transition: 0.2s ease-out;
          }

          &::after {
            position: absolute;
            content: "";
            height: 130%;
            width: 130%;

            background-color: transparent;
            transform: skewX(-13deg);
            z-index: -1;
            transition: 0.2s ease-out;
          }
          &:hover {
            p {
              color: #fff;
            }
            h5 {
              color: #fff;
            }
            &::after {
              background-color: #7db8f0;
            }
          }
        }
      }
    }
  }

  .block:nth-child(1) {
    flex-direction: row-reverse;

    .custom-container {
      justify-content: flex-end;
      padding-right: 5.47vw;
      ul {
        li {
          &::after {
            left: -1.5vw;
          }
        }
      }
    }
  }

  .block:nth-child(2) {
    .custom-container {
      justify-content: flex-start;
      padding-left: 5.47vw;
      ul {
        li {
          &::after {
            right: -1.5vw;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .block {
      .custom-container {
        ul {
          li {
            &::after {
              width: 116%;
            }
          }
        }
      }
    }
    .block:nth-child(1) {
      .custom-container {
        padding-right: 2.8vw;
      }
    }
    .block:nth-child(2) {
      .custom-container {
        padding-left: 2.8vw;
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    display: flex;
    gap: 30px;
    padding-right: 20px;
    padding-left: 20px;

    .block {
      .out-container {
        display: none;
        .box-image {
        }
      }

      .custom-container {
        width: 100%;
        ul {
          li {
            &::after {
              content: unset;
            }
            &:hover {
              p {
                color: #444;
              }
              h5 {
                color: ${(props) => props.theme.lightBlue};
              }
              &::after {
                background-color: unset;
              }
            }
          }
        }
      }
    }
    .block:nth-child(1) {
      .custom-container {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .block:nth-child(2) {
      .custom-container {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 0;
    h2 {
      position: absolute;
      display: flex !important;
      top: 30px;
      color: ${(props) => props.theme.lightBlue};
      left: 50%;
      transform: translateX(-50%);
    }
    .block {
      .custom-container {
        ul {
          gap: 20px;
          li {
            .subtitle {
              width: 100%;
              gap: 8px;
              margin-bottom: 12px;
              justify-content: center;
            }

            .phrase {
              text-align: center;
            }
          }
        }
      }
    }
    .block:nth-child(1) {
      .custom-container {
        justify-content: center;
        padding-top: 0;
      }
    }
    .block:nth-child(2) {
      padding-top: 55px;
      .custom-container {
        justify-content: center;
        padding-bottom: 20px;
      }
    }
  }
`;
