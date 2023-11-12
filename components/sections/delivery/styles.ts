import styled from "styled-components";

export const Delivery = styled.section`
  .container {
    display: flex;
    justify-content: center;

    .sub-container {
      display: flex;
      width: 95%;
      justify-content: space-between;
      gap: 30px;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 570px;
        gap: 20px;

        h4 {
          text-transform: uppercase;
          color: ${(props) => props.theme.lightBlue};
        }
        p {
        }
      }
    }
  }
  @media only screen and (max-width: 1450px) {
  }
  @media only screen and (max-width: 1100px) {
    .container {
      .sub-container {
        .item {
          gap: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    padding-top: 0 !important;
  }
  @media only screen and (max-width: 585px) {
    .sub-container {
      flex-direction: column;
    }
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
