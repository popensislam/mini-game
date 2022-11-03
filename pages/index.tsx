import {
  Title,
  FormColorWrapper,
  FormWrapper,
  RangeInput,
  FlexRow,
  CountMapItems,
  ValueMapItem,
  ButtonActive,
  ButtonStart,
  Cutter,
} from "../styles/uielements.styled";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

// import switchSound from '../assets/switch.mp3'

export default function Home() {
  const router = useRouter();
  const [countItems, setCountItems] = useState<number>(2);
  const [value, setValue] = useState<number>(1);
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const itemsTotal = [2, 3, 4, 5];
  const values: string[] = ["A", "9", "19", "50", "99", "999"];
  const audioRef = useRef<HTMLAudioElement | null | any>(null)

  const handleStartGame = () => {
    router.push({
      pathname: "/game",
      query: {
        count: countItems,
        type:
          values[value - 1] !== "A"
            ? values[value - 1] !== "9"
              ? Number(values[value - 2]) + 1 + "-" + values[value - 1]
              : '1'+'-'+values[value - 1]
            : values[value - 1],
        order: buttonActive ? "asc" : "desc",
      },
    });
  };

  const handleOnChangeSwitched = () => {
    audioRef.current.play()
    setTimeout(() => {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }, 2000)
  }

  return (
    <div className="content-form">
      <audio ref={audioRef} src='https://www.w3schools.com/html/horse.mp3'/>
      <FormWrapper modal={false}>
        <FormColorWrapper>
          <Cutter>
            <Title>Кол-во предметов {countItems}</Title>
            <FlexRow width="48%">
              {itemsTotal.map((item, i) => (
                <CountMapItems key={i}>{item}</CountMapItems>
              ))}
            </FlexRow>
            <RangeInput
              width="50%"
              type="range"
              value={countItems}
              min="2"
              max="5"
              onChange={(e) => {
                setCountItems(parseInt(e.target.value))
                handleOnChangeSwitched()
              }}
            />
          </Cutter>
          <Cutter>
            <Title>Значения</Title>
            <FlexRow width="84%">
              {values.map((item, i) => (
                <ValueMapItem key={i}>{item}</ValueMapItem>
              ))}
            </FlexRow>
            <RangeInput
              width="80%"
              type="range"
              value={value}
              min="1"
              max="6"
              onChange={(e) => {
                setValue(parseInt(e.target.value))
                handleOnChangeSwitched()
              }}
            />
          </Cutter>
          <Cutter>
            <FlexRow width="84%">
              <ButtonActive
                active={!buttonActive}
                onClick={() => setButtonActive(false)}
              >
                По возрастанию
              </ButtonActive>
              <ButtonActive
                active={buttonActive}
                onClick={() => setButtonActive(true)}
              >
                По убыванию
              </ButtonActive>
            </FlexRow>
          </Cutter>
          <ButtonStart modal={false} onClick={handleStartGame}>Играть</ButtonStart>
        </FormColorWrapper>
      </FormWrapper>
    </div>
  );
}
