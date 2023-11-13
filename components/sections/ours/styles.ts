import styled from "styled-components";

export const Ours = styled.section`
  display: flex;
  .out-container {
    position: relative;
    .box-image {
      width: 53vw;
    }
  }

  .container {
    position: relative;
    padding-top: 6vw;

    .content {
      max-width: 35.38vw;

      .info-top {
        margin-bottom: 3.28vw;

        > div {
          p:nth-child(2) {
            line-height: 1vw;
          }
        }
      }

      .info-bot {
        margin-top: -1vw;
        .item {
          display: flex;
          gap: 10px;
          margin-bottom: 1.04vw;
          .content-right {
            h6 {
              color: ${(props) => props.theme.lightBlue};
              margin-bottom: 0.4vw;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    .out-container {
      position: relative;
      .box-image {
        width: 55vw;
      }
    }

    .container {
      position: relative;
      padding-top: 3.55vw;

      .content {
        max-width: 40.38vw;
        .info-top {
          margin-bottom: 2.88vw;
        }
      }
    }
  }
  @media only screen and (max-width: 1023px) {

    .out-container {
      display: none;
    }

    .container {
      .content {
        max-width: 100%;

        .info-top {
          h2 {
            text-align: center;
          }
          p{
            text-align: center;
          }
        }

        .info-bot {
          margin-top: 0; // margin na class
          .item {
            margin-bottom: 13px;
          }
        }
      }
    }
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
