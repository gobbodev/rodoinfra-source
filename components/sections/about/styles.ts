import styled from "styled-components";

export const About = styled.section`
  background-color: #ececec;

  .container {
    display: flex;
    gap: 6.67vw;

    .box-image {
      max-width: 640px;
      width: 100%;
    }

    .content-text {
      padding-top: 6.25vw;
      width: 100%;
    }
  }
  @media only screen and (max-width: 1450px) {
    .container {
      margin-left: 0 !important;
      padding-left: 0 !important;

      .content-text {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    .container {
      .content-text {
        padding-top: 6.25vw;
        width: 80%;

        h2 {
        }
      }
    }
  }
  @media only screen and (max-width: 1075px) {
    .container {
      .content-text {
        padding-top: 6.25vw;
        width: 80%;

        h2 {
          margin-bottom: 20px !important;
        }
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    .container {
      padding-left: 25px !important;

      .content-text {
        padding-top: 0;
        width: 100%;
        text-align: center;
        
      }
      
      .box-image {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .container {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
  }
  @media only screen and (max-width: 420px) {
    .container {
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }
  @media only screen and (max-width: 350px) {
    .container {
      padding-left: 13px !important;
      padding-right: 13px !important;
    }
  }
`;
