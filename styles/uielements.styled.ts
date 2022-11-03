import styled, { keyframes } from "styled-components";

const arrotRightShape = keyframes`
  0% {
    left: 350px;
  }
  25% {
    left: 355px;
  }
  50% {
    left: 350px;
  }
  75% {
    left: 355px;
  }
  100% {
    left: 350px;
  }
`;


export const FormColorWrapper = styled.div`
  position: absolute;
  height: 96%;
  width: 95%;
  border-radius: 40px;
  background: #fff;
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 80%;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 40px;
    padding: 50px;
    background: ${(props: { modal: boolean }) =>
      props.modal
        ? "linear-gradient(180deg, #67DF89, #8D67DF00)"
        : "linear-gradient(180deg, #7f75f0, #101f32)"};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000;
`;

export const FlexRow = styled.div`
  width: ${(props: { width: string }) => props.width};
  display: flex;
  justify-content: space-between;
`;

export const CountMapItems = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;
export const ValueMapItem = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  width: 40px;
`;

export const RangeInput = styled.input`
  &[type="range"] {
    -webkit-appearance: none !important;
    background: #ffd748;
    border-radius: 10px;
    height: 21px;
    width: ${(props: { width: string }) => props.width};
  }
  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background: #104987;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    cursor: grab;
  }
`;

export const ButtonActive = styled.button`
  width: 45%;
  background: #ffd748;
  border-radius: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 39px;
  padding: 3px 6px;
  cursor: pointer;
  opacity: ${(props: { active: boolean }) => (props.active ? 0.7 : 1)};
  transition: all 0.1s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonStart = styled.button`
  background: ${(props: {modal: boolean}) => props.modal ? '#2BD600' : '#38df7a'};
  width: 200px;
  padding: 12px 10px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  color: #ffffff;
  border: none;

  &:hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;

export const Cutter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// GAME PAGE

export const ItemArea = styled.div`
  width: 100%;
  height: 80%;
`;

export const DropArea = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 30px;
`;

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Absolute = styled.div`
  position: absolute;
  width: 888px;
  height: 222px;
  margin-bottom: 7px;
  display: flex;
  gap: 5px;
  padding: 44px 31px;
`;

export const AbsoluteItemArea = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  padding: 44px 31px;
`;

export const DragItem = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: ${(props: { index: number }) =>
    props.index % 2 === 0
      ? "translate3d(10px, 100px, 10px)"
      : "translate3d(10px, -100px, 10px);"};
`;
export const TitleOnItem = styled.h2`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  -webkit-text-stroke: 3px #000;
`;

export const ResultItem = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AbsolteArrow = styled.div`
  position: absolute;
  width: 55%;
  height: 100%;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  top: -170px;
  left: 350px;
  animation: ${arrotRightShape} 2s linear infinite;
`;

export const Arrow = styled.div`
  border: 40px solid transparent;
  display: inline-flex;
  border-left: 70px solid #feffde;
  border-right: none;
  position: absolute;
  left: 270px;
`;
export const ArrowBody = styled.div`
  position: absolute;
  left: 120px;
  height: 40px;
  width: 150px;
  background: linear-gradient(
    272.91deg,
    #feffde 12.25%,
    rgba(255, 255, 255, 0) 49.37%
  );
`;
export const ArrowTitle = styled.div`
  position: absolute;
  top: 60px;
  left: -130px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 68px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  -webkit-text-stroke: 2px #000;
  z-index: 1;
`;

export const ArrowRight = styled.div`
  border: 40px solid transparent;
  display: inline-flex;
  border-right: 70px solid #feffde;
  border-left: none;
  position: absolute;
  left: 310px;
`;
export const ArrowBodyRight = styled.div`
  position: absolute;
  left: 380px;
  height: 40px;
  width: 150px;
  background: linear-gradient(
    272.91deg,
    #feffde 12.25%,
    rgba(255, 255, 255, 0) 49.37%
  );
  transform: rotate(180deg);
`;
export const ArrowTitleRight = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 68px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  -webkit-text-stroke: 2px #000;
  z-index: 1;
`;
