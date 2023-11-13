import styled from "styled-components";

export const Customers = styled.section`


  .container {
    display: flex;
    flex-direction: column;
    gap: 4.17vw;
    align-items:center;
    
    h2 {
      color: ${(props) => props.theme.lightBlue};
    }

    .box-swiper-1{
      position: relative;
      width: 100%;
    }

    .box-swiper-2 {
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

      .content-item {
        padding: 40px;
        min-height: 368px;

        .box-top {
          display: flex;
          gap: 15px;

          .box-image {
            width: 60px;
            height: 60px;
            img {
              border-radius: 30px;
            }
          }

          .text {
            h4 {
              color: ${(props) => props.theme.lightBlue};
              margin-bottom: 7px;
            }
          }
        }

        .box-bottom {
          color: #353535;
          
          p {
            line-height: 22px;
            max-width: 370px;
          }
        }
      }
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
