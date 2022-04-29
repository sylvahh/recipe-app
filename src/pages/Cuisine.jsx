
import { Card2} from '../components/StyledDiv';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  // fetching and setting of data
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=103f7a25b1484ac6ab81564a0d00e21e&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration:1.0}} 
    >
     <Grid
     >
       {cuisine.map((item) =>{
         return(
           <Card2 key={item.id}>
             <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
             </Link>
           </Card2>
         );
        })}
      </Grid>
    </motion.div>
    );
  };

 const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-gap: 3rem;
`;
  
  export default Cuisine;
