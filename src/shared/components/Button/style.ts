import styled, { css } from "styled-components";

interface WrapperProps {
  scaleAnimation: boolean
}

export const Wrapper = styled.button<WrapperProps>`
${({theme, scaleAnimation}) => css`
  background-color: transparent;
  cursor: pointer;
  transition: .5s;
  margin: ${theme.spacings.none} ${theme.spacings.xxxSmall};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacings.xxxSmall};

  :hover {
    opacity: .8;
    scale: ${scaleAnimation ? '1.2': 1};
  }
`}
`

export const Text = styled.span`
  ${({theme}) => css`
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.sizes.medium};
 
`}
`