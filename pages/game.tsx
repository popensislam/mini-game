import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import SweetItem1 from "../assets/sweetImages/sweetItem1.png";
import SweetItem2 from "../assets/sweetImages/sweetItem2.png";
import SweetItem3 from "../assets/sweetImages/sweetItem3.png";
import SweetItem4 from "../assets/sweetImages/sweetItem4.png";
import sweet from "../assets/sweetImages/sweet.png";

import GoldItem1 from "../assets/goldImages/goldItem1.png";
import GoldItem2 from "../assets/goldImages/goldItem2.png";
import GoldItem3 from "../assets/goldImages/goldItem3.png";
import GoldItem4 from "../assets/goldImages/goldItem4.png";
import GoldItem5 from "../assets/goldImages/goldItem5.png";
import gold from "../assets/goldImages/gold.png";

import Image, { StaticImageData } from "next/image";
import {
  AbsolteArrow,
  Absolute,
  AbsoluteItemArea,
  Arrow,
  ArrowBody,
  ArrowBodyRight,
  ArrowRight,
  ArrowTitle,
  ArrowTitleRight,
  DragItem,
  DropArea,
  ItemArea,
  Relative,
  ResultItem,
  TitleOnItem,
} from "../styles/uielements.styled";
import ModlaFinishGame from "../components/ModalFinishGame";
import {
  customSort,
  lettersSort,
  randomIntFromInterval,
  randomLetters,
} from "../helper";

const data: {[index: string]: any, sweet: StaticImageData[], gold: StaticImageData[] } = {
  sweet: [SweetItem1, SweetItem2, SweetItem3, SweetItem4, SweetItem2],
  gold: [GoldItem1, GoldItem2, GoldItem3, GoldItem4, GoldItem5],
};
const boards: StaticImageData[] = [sweet, gold];

const keys: string[] = ["sweet", "gold"];

function randomImages() {
  let numb: number = Math.floor(Math.random() * 2);
  const img: any = data?.[keys[numb]]
  return { images: img, key: numb };
}

export default function Game() {
  const router = useRouter();
  const { type, order, count }: any = router.query;
  const [params, setParams] = useState<[] | any>([]);
  const [answer, setAnswer] = useState<[] | any>([]);
  const [imgState, setImgState] = useState<number | null>(null);
  const [selectedDrag, setSelectedDrag] = useState<object | any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  // При заполнении всех элементов завершение игры
  useEffect(() => {
    const imagesKey: string[] = [];
    params.map((item: { image: any }) => {
      if (item.image === "") {
        imagesKey.push(item.image);
      }
    });
    if (imagesKey.length === Number(count)) {
      setShowModal(true);
    }
  }, [params]);

  // Принимаю все параметры с URL и заполняю массивы данными для игры
  useEffect(() => {
    const from: string[] = type?.split("-");

    if (type === "A") {
      const letters = randomLetters(count);
      const sortLetters = lettersSort(letters.split(""), order);

      const imagesData: { key: number; images: StaticImageData[] } =
        randomImages();
      setImgState(imagesData.key);
      const resultValues = letters.split("")?.map((item: string, i: number) => {
        return { value: item, image: imagesData.images[i] };
      });
      setParams(resultValues);

      const resultAnswer = sortLetters?.map((item: number) => {
        return { value: item, image: "" };
      });
      setAnswer(resultAnswer);
    } else {
      const min: number = Number(from?.[0]);
      const max: number = Number(from?.[1]);

      const imagesData: { key: number; images: StaticImageData[] } =
        randomImages();
      setImgState(imagesData.key);

      const values: number[] = randomIntFromInterval(min, max, count);
      const resultValues = values?.map((item: number, i: number) => {
        return { value: item, image: imagesData.images[i] };
      });
      setParams(resultValues);

      const answerValues: number[] = customSort(order, values);
      const resultAnswer = answerValues?.map((item: number) => {
        return { value: item, image: "" };
      });
      setAnswer(resultAnswer);
    }
  }, [type, order, count]);
  //---------------------------------------

  // Беру элемент
  const dragStartHandler = (
    e: DragEvent | any,
    item: { value: number; image: string | StaticImageData; i: number }
  ) => {
    setSelectedDrag({ value: item.value, image: item.image, i: item.i });
  };
  //---------------------

  const dragOverHandler = (e: DragEvent | any) => {
    e.preventDefault();
  };

  // Бросаю элемент
  const dropHandler = (
    e: DragEvent | any,
    item: { value: number; image: string | StaticImageData }
  ) => {
    e.preventDefault();
    let key: number | undefined;

    const result = answer.map((elm: any) => {
      if (elm?.value === item?.value && elm?.value === selectedDrag?.value) {
        key = selectedDrag?.value;
        return { value: item.value, image: selectedDrag?.image };
      } else return elm;
    });
    setAnswer(result);

    if (key) {
      const resultParams = params.map((elm: any) => {
        if (elm?.value === key) {
          key = selectedDrag?.value;
          return { value: "", image: "" };
        } else return elm;
      });

      setParams(resultParams);
    }
  };
  //---------------------


  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`content-game ${imgState !== null && keys?.[imgState]}`}>
        {showModal && <ModlaFinishGame />}
        <ItemArea>
          <Relative>
            <AbsoluteItemArea>
              {params?.map(
                (
                  item: { value: number; image: string | StaticImageData },
                  i: number
                ) => (
                  <DragItem
                    key={i}
                    index={i}
                    onDragStart={(e) =>
                      dragStartHandler(e, {
                        value: item?.value,
                        image: item?.image,
                        i,
                      })
                    }
                    onDragOver={(e: any) => dragOverHandler(e)}
                    draggable={item.value ? true : false}
                    style={{ cursor: item.value ? "pointer" : "default" }}
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        width={150}
                        height={150}
                        alt="drops place"
                      />
                    )}
                    <TitleOnItem>{item.value}</TitleOnItem>
                  </DragItem>
                )
              )}
            </AbsoluteItemArea>
          </Relative>
        </ItemArea>
        <DropArea>
          <Relative>
            <AbsolteArrow>
              {order === "desc" ? (
                <>
                  <ArrowTitle>По возрастанию</ArrowTitle>
                  <ArrowBody />
                  <Arrow />
                </>
              ) : (
                <>
                  <ArrowTitleRight>По убыванию</ArrowTitleRight>
                  <ArrowBodyRight />
                  <ArrowRight />
                </>
              )}
            </AbsolteArrow>
            {imgState !== null && (
              <Image
                priority
                src={boards?.[imgState]}
                width={990}
                height={320}
                alt="drops place"
              />
            )}
            <Absolute>
              {answer?.map(
                (item: { value: number; image: string | any }, i: number) => (
                  <ResultItem
                    key={i}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, item)}
                    draggable={true}
                  >
                    {item?.image && (
                      <Image
                        src={item?.image}
                        width={120}
                        height={120}
                        alt="drops place"
                      />
                    )}
                  </ResultItem>
                )
              )}
            </Absolute>
          </Relative>
        </DropArea>
      </div>
    </DndProvider>
  );
}
