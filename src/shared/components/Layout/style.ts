import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Main = styled.main`
${({theme}) => css`
  width: 100%;
  max-width: ${theme.widthSize};
  min-height: 100vh;
  padding: ${theme.spacings.small} ${theme.spacings.none};

  @media only screen and (max-width: ${theme.widthSize}) {
      padding: ${theme.spacings.small} ${theme.spacings.small};
    }
`}`