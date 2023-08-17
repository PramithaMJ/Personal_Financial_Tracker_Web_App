import { styled } from "styled-components";
import bg from './images/bg.png'

function App() {
  return <AppStyled bg={bg} className="App">
    <main></main>
  </AppStyled>;
}

const AppStyled =styled.di`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
`;


export default App;
