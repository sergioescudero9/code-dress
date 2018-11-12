import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    0%  {
      top: 0px;
      left: 50%;
    }
    33% {
      left: calc(50% + 40px);
      top: 40px;
    }
    66% {
      left: calc(50% - 40px);
      top: 40px;
    }
    100% {
      top: 0px;
      left: 50%;
    }
`;


const LoadingStyle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  left: 50%;
  background: black;
  display: inline-block;
  position: absolute;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingContainer = styled.div`
  position: relative;
  margin: 10px;
`;

function Loading() {
  return (
    <LoadingContainer>
      <LoadingStyle />
    </LoadingContainer>
  );
}
export default Loading;
