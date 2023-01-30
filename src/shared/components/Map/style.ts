
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: red;

  .leaflet-container {
    height: 600px;
    width: 100%
  }
`

export const Error = styled.span`
  ${({theme}) => css`
    background-color: ${theme.colors.warningBackground};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.textColorInBlack};
    padding: ${theme.spacings.xSmall} ${theme.spacings.xSmall};
  `}
`
