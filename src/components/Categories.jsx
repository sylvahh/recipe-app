import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { List  } from "./StyledDiv";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Categories = () => {
  return (
    <List> 
       <SLink to={'cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink> 
        <SLink to={'cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    min-width: 4rem;
    min-height: 4rem;
    cursor: pointer;
    transform: scale(0.8);
    
    h4{
      color: white;
      font-size: 0.7rem; 
    }
    svg{
      color: white;
      font-size: 1.5rem;
    }
    &.active{
      background: linear-gradient(to right, #f27121, #e94057);
      
      svg{
        color: white;
      }
      h4{
        color:white;
      }
    }
    

`
export default Categories;


