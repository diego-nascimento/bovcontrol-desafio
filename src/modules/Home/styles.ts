import styled, { css } from "styled-components";


export const Wrapper = styled.main`
  width: 100%;
`

export const Container = styled.ul`
  ${({theme})=> css`
    background-color: ${theme.colors.componentBackground};
    margin: ${theme.spacings.none} ${theme.spacings.none};
    padding: ${theme.spacings.small} ${theme.spacings.small};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.spacings.medium};
    border-radius: ${theme.borderRadius};

    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 660px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`