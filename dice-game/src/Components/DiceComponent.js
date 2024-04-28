import styled from 'styled-components'
import React, {Component} from 'react'
import {useState} from 'react'


function DiceComponent({currentDice,roleDice,setResetScore}){
   
return(
    <DiceContainer>
        <img onClick={roleDice} src={`./images/dice_${currentDice}.png`}></img>
        <p>Click on Dice to roll</p>

    </DiceContainer>
);
}

export default DiceComponent

const DiceContainer=styled.div`
width:250px;
display:flex;
flex-direction:column;
gap:20px;
justify-content:center;
align-items:center;
`;
