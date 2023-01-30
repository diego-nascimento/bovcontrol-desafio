import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .7);
  z-index: 10;
`

export const Container = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.background};
    text-align: center;
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.textColor};
  `}
`

export const IconWrapper = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.warningBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xSmall};
  `}
`

export const IconContainer = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div`
  ${({theme}) => css`
    padding: ${theme.spacings.xSmall} ${theme.spacings.small};
  `}
  
`

export const Title = styled.span`
  ${({theme}) => css`
    font-size: ${theme.fonts.sizes.large};
    padding: ${theme.spacings.xSmall};
  `}
`

export const Message  = styled.p`
${({theme}) => css`
    font-size: ${theme.fonts.sizes.xMedium};
    padding: ${theme.spacings.medium};
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`