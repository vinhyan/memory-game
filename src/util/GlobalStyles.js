import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Atkinson Hyperlegible', sans-serif;
        
    }

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 32px;
    }

    h3 {
        font-size: 20px;
    }

    body {
        font-size: 18px;
        
    }




`;

const Button = styled.button`
  color: #fcfcfc;
  border: none;
  max-width: 100%;
  font-weight: bold;
  cursor: pointer;
`;

export const OrangeButton = styled(Button)`
  background: #fda214;
  &:hover {
    background: #ffb84a;
  }
`;

export const BlueButton = styled(Button)`
  background: #bcced9;
  border-radius: 26px;

  &:hover {
    background: #6395b8;
  }
`;

export default GlobalStyles;
