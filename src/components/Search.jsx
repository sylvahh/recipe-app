import { useState } from "react"
import { FormStyle } from "./StyledDiv"
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from "react-router-dom"


const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }
   
  return (
     <FormStyle onSubmit={submitHandler}>
        <form  >
            <div>
                <FaSearch></FaSearch> 
                <input onChange={(e) => setInput(e.target.value)} type="" value={input} 
                />
                
            </div>
        </form>
    </FormStyle> 
    
  )
}

export default Search;