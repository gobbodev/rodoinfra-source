import styled from "styled-components";

export const Projects = styled.section`
  .container {
    text-align: center;

    .box-swiper {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;

      .button-nav {
        position: absolute;
        top: 50%;
        background: none;
        border: none;
        z-index: 5;
        transform: translateY(-50%);

        svg {
          width: 10px;
          transition: 0.3s;
          &:hover {
            path {
              stroke: ${(props) => props.theme.green};
            }
            filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
          }
        }
      }

      .r-btn {
        right: -1.8vw;
      }
      .l-btn {
        left: -1.8vw;
      }

      .item {
        display: flex;
        width: 100%;
        gap: 30px;
        justify-content: space-evenly;
        margin-bottom:40px;

        .box-item {
          h5 {
            margin-top: 17px;
            color: ${(props) => props.theme.lightBlue};
          }
        }
      }
      .swipers-slide{

      }
    }
  }

  @media only screen and (max-width: 599px) {
    .container {
      .box-swiper {
        display: block;
        margin-bottom: 25px;

        .item {
          flex-direction: column;
          margin-bottom:25px;
        }

        .btn-responsive-box {
          margin-top: 20px;
          display: flex;
          width: 100%;
          justify-content: center;

          .button-nav {
            position: relative;
            top: unset;
            transform: unset;

            svg {
              width: 2.88vw !important;
            }
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
