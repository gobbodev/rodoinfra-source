import styled from "styled-components"

export const InputStyles = styled.div`
  input, select,textarea {
    background-color: ${props => props.theme.black700};
    color: #fff;
  }

  .error-message {
    background-color: gray;
    color: ${props => props.theme.black700}
  }
`