import styled from 'styled-components'
import {useState} from 'react'
function Selector({selectedOption,setSelectedOption,error,setError})
{
    const options=[1,2,3,4,5,6];
    const handler=(i)=>{
        setSelectedOption(i);
        setError("");
    }
return(
    <SelectorContainer>
    <p>{error}</p>
       <div className="flex">
       {options.map((i)=>
       <Box isSelected= {i===selectedOption} onClick={()=>handler(i)} key={i}>
       {i}
       </Box>)}
       </div>
       <p>Select Option</p>
    </SelectorContainer>
);
}

export default Selector;
const SelectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;

.flex{
    display:flex;
    flex-direction:row;
    gap:15px;
}
p{
    font-size:24px;
    font-weight:700px;
}
`;
const Box= styled.div`
width:72px;
height:72px;
border:1px solid black;
color: ${(props)=>!props.isSelected? "black":"white"};
background-color: ${(props)=>props.isSelected? "black":"white"};
display:grid;
place-items:center;
`;


