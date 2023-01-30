import styled, { css } from "styled-components";

export const Wrapper = styled.div`
${({theme}) => css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0, .8);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`}
 
`