import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter, Link } from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import { Nav } from "./components/StyledDiv";
import {GiKnifeFork} from "react-icons/gi";

function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
      <Nav >
          <GiKnifeFork/>
          <Logo to={'/'}>Delicious</Logo>      
      </Nav>
        <Search/>
        <Categories/>
        <Pages/>
      </BrowserRouter>
    </div> 
  );
}
const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive ;
`;

export default App;
