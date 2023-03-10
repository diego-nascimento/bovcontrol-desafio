import styled, { css } from "styled-components";
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.div).attrs({
  initial:{ opacity: 0, translateY: 20 },
  animate:{ opacity: 1, translateY: 0 },
  transition:{duration: 0.5 },
})`
  ${({theme}) => css`
    border: 1px solid ${theme.colors.borderColors};
    padding: ${theme.spacings.xxSmall};
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius};
    z-index: 1
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
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
    }
` 


export const Main = styled.main``

export const MapContainer = styled.div`
  ${({theme}) => css`
    margin-top: ${theme.spacings.xSmall};
    border-radius: ${theme.borderRadius};
    overflow: hidden;
  `}
`

