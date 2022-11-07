import {
  ModalContent,
  ModalWrapper,
  StarImage,
  Flex,
  ModalTitle,
} from "../styles/modal.styled";
import { ButtonStart, FormColorWrapper, FormWrapper } from "../styles/uielements.styled";
import Star from "../assets/star.svg";
import WinTItle from "../assets/winTitle.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const ModlaFinishGame = () => {
  const router = useRouter()
  const handleStartOver = () => {
    router.push('/')
  }
  return (
    <ModalWrapper>
      <FormWrapper modal={true}>
        <FormColorWrapper>
          <ModalContent>
            <StarImage top={"-100px"} left={"-70px"}>
              <Image src={Star} width={150} height={150} alt="star icon" />
            </StarImage>
            <StarImage top={"450px"} left={"-130px"}>
              <Image src={Star} width={250} height={250} alt="star icon" />
            </StarImage>
            <StarImage top={"0px"} left={"80%"}>
              <Image src={Star} width={250} height={250} alt="star icon" />
            </StarImage>
            <StarImage top={"550px"} left={"90%"}>
              <Image src={Star} width={150} height={150} alt="star icon" />
            </StarImage>
            <Flex>
              <Image src={WinTItle} width={500} alt="star icon" />
              <ModalTitle>Молодец! Ты отлично справился с заданием!</ModalTitle>
              <ButtonStart modal={true} onClick={handleStartOver}>Заново!</ButtonStart>
            </Flex>
          </ModalContent>
        </FormColorWrapper>
      </FormWrapper>
    </ModalWrapper>
  );
};

export default ModlaFinishGame;
