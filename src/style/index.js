import styled, {createGlobalStyle} from "styled-components"
/*Global app style*/
export const App = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
/*Application wrapper*/
export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  color: black;
  font-size: 20px;
`
/*Pages structure*/
export const PageDiv = styled.div`
  display: grid;
  max-width: 1920px;
  margin: 0 auto;
  grid-template-areas: "head""nav content";
  grid-template-rows: 125px;
  grid-template-columns: 100px 1fr;
`