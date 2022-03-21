import styled from "styled-components";


export const Container = styled.div`
width: 800px;
height: 800px;
margin: 50px auto 0 auto;
border: 1px solid black;

display: grid;
grid-template-columns: repeat(8, 1fr);

div{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.black{
  background-color: black;
}

`;
