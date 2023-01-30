import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: 5px;
    color: ${theme.colors.textColor};
`}
`

export const Label = styled.span`
${({theme}) => css`
  text-transform: capitalize;
  font-size: ${theme.fonts.sizes.medium};
  font-weight: ${theme.fonts.weights.medium};
`}
`

export const Value = styled.p`
   ${({theme}) => css`
  font-size: ${theme.fonts.sizes.medium};
  font-weight: ${theme.fonts.weights.bold};
`}
`