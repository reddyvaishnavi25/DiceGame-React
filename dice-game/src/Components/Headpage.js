import React ,{Component} from 'react'
import styled from 'styled-components'

export default function Headpage(props)
{
return(
    <Container>
        <div>
           <img src="./images/dices.png" alt="diceimage"></img>
        </div>
        <div className="content">
           <div><h1>DICE GAME</h1></div>
           <Button onClick={props.toggle}>Play Now</Button>
        </div>
    </Container>
);
}

const Container=styled.div`
display:flex;
flex-direction:row;
max-width:1180px;
height:100vh;
align-items:center;
gap:20px;
margin:0 auto;
.content h1{
    font-size:96px;
    white-space:nowrap;
}

`;


const Button=styled.button`
background-color:black;
color:white;
border: 1px solid black;
min-width:220px;
padding:10px 18px;
border-radius:5px;
font-size:16px;
transition: 0.3s background ease-in;
cursor:pointer;

&:hover{
    background-color:white;
    color:black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`;