import styled, { css } from "styled-components";
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.form).attrs({
  initial:{ opacity: 0, translateY: 20 },
  animate:{ opacity: 1, translateY: 0 },
  transition:{duration: 0.5 },
})`
  ${({theme}) => css`
    border: 1px solid ${theme.colors.borderColors};
    padding: ${theme.spacings.xxSmall};
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius};
  ` }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CreatedAt = styled.span`
  ${({theme}) => css`
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weights.bold};

    span {
      font-weight: ${theme.fonts.weights.medium};
    }
  `}
`

export const Division = styled.div`
 ${({theme}) => css`
 display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${theme.spacings.xxxSmall};


@media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
  }

  `}
` 

export const Main = styled.main``

export const MapContainer = styled.div`
  ${({theme}) => css`
    margin-top: ${theme.spacings.xSmall};
    border-radius: ${theme.borderRadius};
    overflow: hidden;
  `}
`

export const SideBySide = styled.div`
 ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: ${theme.spacings.xSmall};
  `}
  
`

export const SubmitButton = styled.button`
  ${({theme})=> css`
      color: ${theme.colors.textColor};
      padding: ${theme.spacings.xxSmall} ${theme.spacings.medium};
      border-radius: ${theme.borderRadius};
      background-color: ${theme.colors.componentBackground};
      font-weight: ${theme.fonts.weights.bold};
      border: 1px solid ${theme.colors.textColor};
      cursor: pointer;
  `}
` 