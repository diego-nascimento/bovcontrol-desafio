import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    width: 100%;
    padding-top: ${theme.spacings.xSmall};
  `}
`

export const Label = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.fonts.sizes.small};
  `}
`

export const ChildrenContainer= styled.div`
  ${({theme}) => css`
    padding: ${theme.spacings.xxSmall};
    background-color: ${theme.colors.formWrapperBackground};
    border-radius: ${theme.borderRadius};
    display: flex;
    flex-direction: column;
    gap: 8px;
  `}
`