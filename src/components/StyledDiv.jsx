
import styled from "styled-components";



export const  Wrapper = styled.div`
 margin: 4rem  0rem;
`;
export const Card = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    position: relative;


    img {
        border-radius: 2rem;
        left: 0px;
        height: 100%;
        width: 100%;
        object-fit: cover; 
    }

    p{
        position: absolute;
        z-index:10;
        left: 50%;
        bottom: 4%;
        transform: translate(-50%, 0%);
        color: white;
        width: 85%;
        height: 40%;
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-gap: 3rem;
`;
export const Card2 = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export const FormStyle = styled.div`
margin: 2rem auto;

div{
    display: flex;
    justify-content: center;
     width: 100%;

 }

input{
    border: none;
    background: linear-gradient( 35deg, #494949, #313131 );
    font-size: 1rem;
    color: white; 
    padding: 1rem 3rem;
    border-radius:1rem;
    outline: none;
    width: 75%;
    
}
svg{
    position: relative;
    left: 2%;
    transform: translate(100%, -50%);
    margin-top: 1.5rem ;
    color: white
}
`;

export const Wrapper2 = styled.div`
   margin-top: 2rem;
   margin-bottom: 5rem;
   display: flex;
   max-width: 100%;

    .active{
        background: linear-gradient( 35deg, #494949, #313131 );
        color: white
    }
    p{
        margin: 2rem 0rem;
    }
   h2{
       margin-bottom: 2rem;
   }
   li{
       font-size: 1.2rem;
       line-height: 2.5rem;
   }
   ul{
       margin-top: 2rem;
       margin-left: 1rem
       
   }
   
` ;
export const Button = styled.div`
   
   display: inline;
   padding: 1rem 2rem;
   color: #313131;
   background: white;
   border: 2px solid black;
   margin-right: 1rem;
   margin-top:2rem;
   cursor: pointer;
   font-weight:600;
`;

export const Info = styled.div`
   margin-left: 1rem;
   margin-top: 5rem
`;

export const ImgWrapper = styled.div`
   position: relative;
   right: 10%
   
   
`;
export const Nav = styled.div`
    margin: 2rem 0rem;
    display: flex ;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 2rem;
    }
`;