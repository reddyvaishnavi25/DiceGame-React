import styled from 'styled-components'
function Rules()
{
  return(
  <Container >
    <h3>How to play dice game</h3>
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted </p>
  </Container>

  );
}

export default Rules;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: first;
  margin:0 auto;
  margin-top:20px;
  width:794px;
  text-align: first; // Center text within the container
  background-color: #f9f9f9; // Light background color
  padding: 20px;
  border: 1px solid #ccc; // Optional border
`;


