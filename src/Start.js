import React from 'react';
import styled from 'styled-components';
import img from "./scc_img01.png";

const Start = (props) => {
  return (
    <Title>
      <Img src={img}/>
      <Intro>나는 <span>{props.name}</span>에 대해서<br/>얼마나 알고 있을까?</Intro>
      <Input type="text"/>
      <StartBtn>시작하기</StartBtn>
    </Title>
  );
}

const Title = styled.div`
  height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 40vw;
  margin: 16px;
`;

const Intro = styled.h1`
  font-size: 1.5em;
  line-height: 1.6;
  span {
    background-color: #dadafc;
    padding: 5px 8px;
    border-radius: 30px;
  }
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  outline: none;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #dadafc;
  }
`;

const StartBtn = styled.button`
  padding: 10px 36px;
  background-color: #8c4aff;
  width: 80%;
  color: white;
  font-size: 16px;
  border: #8c4aff;
  border-radius: 5px;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`; 

export default Start;