import styled, { css } from "styled-components";
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.li).attrs({
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

export const ButtonsContainer = styled.div`
  display: flex;
`

export const Main = styled.main``