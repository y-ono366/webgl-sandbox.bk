import styled from 'vue-styled-components';

export const Wrapper = styled.section`
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const SideBarWrapper = styled.section`
  position: fixed;
  right: 0;
  width: 17%;
  height: 100%;
  box-sizing: border-box;
  transition: 300ms;
  z-index: 2;
  background: #ffffff;
`;
