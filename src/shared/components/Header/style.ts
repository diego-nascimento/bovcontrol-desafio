import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({theme}) => css`
    width: 100%;
    padding: ${theme.spacings.xSmall} ${theme.spacings.none};
    background: ${theme.colors.componentBackground};
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: ${theme.widthSize}) {
      padding: ${theme.spacings.small} ${theme.spacings.small};
    }
  `}
`

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;
    max-width: ${theme.widthSize};
    display: flex;
    flex-direction: row;
   gap: ${theme.spacings.xSmall};
  `}
`