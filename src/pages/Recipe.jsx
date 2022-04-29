import React, { useEffect, useState } from 'react';
import { Button, Info, Wrapper2, ImgWrapper } from '../components/StyledDiv';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeBtn, setActiveBtn] = useState('ingredents')
    const [ingredent, setIngredent] = useState([]);
    let params = useParams();

// fectching and setting data
    const searchDetails = async () => {
        const data = await fetch ( `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=103f7a25b1484ac6ab81564a0d00e21e`)
        const detailData = await data.json();
        setDetails( detailData);
        setIngredent(detailData.extendedIngredients)
    
    }
    useEffect(() =>{
        searchDetails(params.name);
    },[params.name]);
  return (
      <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration:1.0}} 
      >
        <Wrapper2>
            <ImgWrapper>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />  
            </ImgWrapper>
            <Info>
                <Button  className={activeBtn === 'ingredents' ? 'active' : ''} onClick={() => setActiveBtn('ingredents')}>Ingredents</Button>
                <Button className={activeBtn === 'instructions' ? 'active' : ''} onClick={() => setActiveBtn('instructions')}>Instructions</Button>
                {activeBtn === 'instructions' && (
                <div>
                    <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
                    <p dangerouslySetInnerHTML={{__html:details.instructions}}></p>
                </div>
                )}
                {activeBtn === 'ingredents' && (
                    <ul>
                {ingredent.map((item) => {
                    return(
                        <li key={item.id}>{item.original}</li>
                    );
                })}
                </ul>
                )}
            
            </Info>
        </Wrapper2>
      </motion.div>
    );
}

export default Recipe;