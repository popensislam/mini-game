import styled, { keyframes } from "styled-components";

interface PropsAbs {
  top: string;
  left: string;
}

const scaleAnim = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StarImage = styled.div`
  position: absolute;
  animation: ${scaleAnim} 4s linear infinite;
  left: ${(props: PropsAbs) => props.left};
  top: ${(props: PropsAbs) => props.top};
`;

export const ModalTitle = styled.h1`
  width: 80%;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #5f40a1;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
