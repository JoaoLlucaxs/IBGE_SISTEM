import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 32px;
  color: #c0d4df;
}

`;