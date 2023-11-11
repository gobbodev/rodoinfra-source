import styled from "styled-components";

export const Contact = styled.section`
  position: relative;

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 8.125vw;

    .content-contact {
      max-width: 430px;
      color: ${(props) => props.theme.lightBlue};
      display: flex;
      flex-direction: column;
      gap: 58px;

      .box-titulo {
        h2 {
          margin-bottom: 40px;
        }

        p {
          max-width: 419px;
        }
      }

      .box-info {
        display: flex;
        flex-direction: column;
        gap: 48px;

        .social-info {
          display: flex;
          flex-direction: column;
          gap: 18px;

          a {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            width: fit-content;
            color: ${(props) => props.theme.lightBlack};
            line-height: 24px;
            svg {
              width: 20px;
            }
            svg:nth-child(2) {
              width: 15px;
            }
          }
          a:nth-child(2) {
            svg {
              width: 15px;
            }
          }
        }
      }
    }

    .content-form {
      color: ${(props) => props.theme.lightBlack};
      font-weight: 700;
      max-width: 775px;
      width: 100%;

      form {
        #form-error-focus {
          //conserta o height do form
          position: absolute;
        }
        .error-message {
          display: block;
          padding-top: 5px;
          padding-left: 0 !important;
          background-color: transparent;
          color: ${(props) => props.theme.darkBlue};
        }
        .input-component {
          margin-bottom: 15px;

          label {
            margin-bottom: 9px;
          }

          .input-content {
            input {
              font-weight: 300;
              max-width: 775px;
              width: 100%;
              padding-left: 16px;
              padding-top: 14.5px;
              padding-bottom: 11.5px;
              background-color: rgb(68, 68, 68, 0.2);
              border: none;
              color: ${(props) => props.theme.lightBlack};

              &::placeholder {
                color: ${(props) => props.theme.lightBlack};
              }
            }
          }

          .input-content:nth-child(1) {
            //conserta o alinhamento row da label com o input no InputMask
            display: flex;
            flex-direction: column;
          }

          textarea {
            font-weight: 300;
            max-width: 775px;
            width: 100%;
            padding-left: 16px;
            padding-top: 14.5px;
            padding-bottom: 14.5px;
            background-color: rgb(68, 68, 68, 0.2);
            border: none;
            min-height: 135px;
            max-height: 250px;
            color: ${(props) => props.theme.lightBlack};

            &::placeholder {
              color: ${(props) => props.theme.lightBlack};
            }
          }
        }

        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          width: 100%;
          gap: 20px;

          .actions-form {
            max-width: 430px; //atençao
            width: 100%; //atençao

            .button-submit div {
              width: unset;
            }

            button {
              width: 100%; //atençao
              padding: 15px 0;
              background-color: red;
              transform: skewX(-13deg);
              background-color: ${(props) => props.theme.green};
              border: none;
              color: #fff;
              font-weight: 700;
              margin-left: -3px;

              span {
                display: block;
                transform: skewX(13deg);
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 835px) {
    .container {
      flex-direction: column;
      gap: 50px;
      .content-contact {
        gap: 30px;
        .box-titulo {
          p {
            span {
              display: none;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      .content-form {
        form {
          .actions {
            .captcha {
              div {
                width: 216px !important;
                iframe {
                  max-width: 220px !important;
                  width: 100%;
                  height: 72px; /*mudar*/
                  margin-top: 25px;
                  border-radius: 8px;
                  background-color: #fff;
                  transition: all 0.5s ease-out;
                  box-shadow: 5px 5px 18px 0 rgb(91 51 112 / 20%);
                  margin-top: 10px;
                  color: #fff !important;
                  transform: scale(0.9);
                  transform-origin: 0 0;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      flex-direction: column;
      gap: 40px;
      .content-contact {
        gap: 20px;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .container {
      .content-form {
        form {
          .actions {
            gap: 0;
          }
        }
      }
    }
  }
`;
