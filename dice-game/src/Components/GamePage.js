import DiceComponent from "./DiceComponent";
import Selector from "./Selector";
import TotalScore from "./TotalScore";
import Rules from "./Rules";
import styled from 'styled-components'
import { useState } from "react";

function GamePage()
{
    const [selectedOption,setSelectedOption]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [score,setScore]=useState(0);
    const [error, setError]=useState("");
    const [showRules, setShowRules]=useState(false);



    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min)
   }
const roleDice=()=>{
    if(selectedOption===undefined)
    {
        setError("you have not selected the option");
        return;
    }
    
    let num=generateRandomNumber(1,7);
    setCurrentDice(num);
    if(num===selectedOption)
    {
        setScore((prev)=>prev+selectedOption);
    }
    else{
        setScore((prev)=>prev-2);
    }
    setSelectedOption(undefined);
}


return(
    <div>
    
    
    <NavigationContainer>
        <TotalScore score={score}/>
        <Selector selectedOption={selectedOption} setSelectedOption={setSelectedOption} error={error} setError={setError}/>
    </NavigationContainer>
    <BodyComponent>
        <DiceComponent currentDice={currentDice} roleDice={roleDice}/>
    </BodyComponent>
    
    <ButtonContainer>
    <Button isSet={true} onClick={()=>setScore(0)}>Reset Score</Button>
        <Button isSet={false} onClick={()=>setShowRules((prev)=>!prev)}>{showRules? "Hide":"Show"} Rules</Button>
    </ButtonContainer>
    {showRules && <Rules/>}
    </div>
    
);
}
export default GamePage;

const NavigationContainer=styled.div`
margin: 0 auto;
max-width:1280px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;

const BodyComponent= styled.div`
display:flex;
justify-content:center;
align-items:end;

`;



const Button=styled.button`
width:220px;
height:44px;
background-color: ${(props)=>props.isSet? "white":"black"};
color: ${(props)=>!props.isSet? "white":"black"};
border: 1px solid black;
border-radius:5px;
`;

const ButtonContainer=styled.div`
display:flex;
flex-direction:column;
gap:20px;
justify-content:center;
align-items:center;
margin-top:10px;
`;