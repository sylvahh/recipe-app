
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card2 } from '../components/StyledDiv';
import styled from 'styled-components';

const Searched = () => {
    const [searched, setSearched] = useState([]);
    let params = useParams();
    
    
// fetching and setting data
    const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=103f7a25b1484ac6ab81564a0d00e21e&query=${name}`
        );
        const recipes = await data.json();
        setSearched(recipes.results);
        
    };
    useEffect(() => {
        getSearched(params.search);
      }, [params.search]);
      
  return (
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration:1.0}} 
      >
        <Grid>
            {searched.map((item) => {
                return (
                    <Card2 key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                    </Card2>
                )
                })}
        </Grid>
        </motion.div>
    )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-gap: 3rem;
`;
export default Searched;