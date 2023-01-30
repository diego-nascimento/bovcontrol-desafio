import styled, { css } from "styled-components";

export const Wrapper = styled.div`
${({theme}) => css`
width: 100%;
`}`

export const Label = styled.label`
   ${({theme}) => css`
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.textColor
    };
  `}
`

export const Input = styled.input`
${({theme}) => css`
  width: 100%;
  position: relative;
  padding: ${theme.spacings.xxxSmall} ${theme.spacings.xSmall};
  font-size: ${theme.fonts.sizes.medium};
  font-weight: ${theme.fonts.weights.medium};
  border-radius: ${theme.borderRadius};
`}
  
`

export const Error = styled.span`
  ${({theme}) => css`
    background-color: ${theme.colors.warningBackground};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.textColorInBlack};
    padding: ${theme.spacings.none} ${theme.spacings.xSmall};
  `}
`