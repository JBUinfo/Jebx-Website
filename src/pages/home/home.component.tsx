import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/language-context";

import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.jpg";
import text_website from "../../assets/text-website.json";
import WordCarrousel from "../../components/word-carrousel/word-carrousel.component";
import Timeline from "../../components/timeline/timeline.component";
import TypEN from "../../components/type-it/type-en";
import TypES from "../../components/type-it/type-es";
import { HeaderColorContext } from "../../context/header-color-context";
import { HeaderColor } from "../../components/header/header.component";

interface IPropsSection {
  children: any;
}

const SectionContainer = ({ children }: IPropsSection): JSX.Element => {
  return (
    <div className="max-sm:h-max max-xl:snap-align-none max-lg:h-[80vh] h-screen relative overflow-hidden snap-start">
      {children}
    </div>
  );
};

const FirstContainer = (): JSX.Element => {
  const leet = new Array(20).fill(null);
  const images = [img1, img2, img3, img4, img5];

  const [previousImage, setPreviousImage] = useState<number>(0);
  const [actualImage, setActualImage] = useState<number>(0);
  const { language } = useContext(LanguageContext);
  const { toggleColor } = useContext(HeaderColorContext);

  useEffect(() => {
    toggleColor!(HeaderColor.ORANGE);
    const timer = setInterval(() => {
      setPreviousImage(actualImage);
      setActualImage(actualImage === images.length - 1 ? 0 : actualImage + 1);
    }, 6000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <div
        className={
          "img-filter-after w-full h-full bg-[#2928289c] absolute z-[-1] after:content-[''] after:bottom-0 after:h-24 after:absolute after:w-screen "
        }
      ></div>
      <div className={"absolute z-[-2]"}>
        {images.map((image, i) => {
          let newClass: string = "";
          if (
            actualImage === i ||
            (i === 0 && previousImage === images.length - 1)
          ) {
            newClass = "animate-get-in";
          } else if (
            actualImage >= i + 1 ||
            (actualImage === 0 && previousImage === images.length - 1)
          ) {
            newClass = "animate-get-out";
          }
          if (actualImage === i && previousImage === i) {
            newClass = "right-unset-important";
          }
          return (
            <div
              key={i}
              style={{ backgroundImage: `url(${image})` }}
              className={`absolute w-screen h-screen min-h-[800px] right-0 bg-center bg-cover ${newClass}`}
            ></div>
          );
        })}
      </div>
      <div className={"h-screen"}>
        <div className="max-sm:left-0 max-sm:top-[20px] max-sm:bg-[#00000000] max-xl:bg-[#0000001f] min-h-[450px] h-3/5 absolute bg-black w-96 bottom-0 left-48 bg-black">
          <div className={"h-[10%] overflow-hidden"}>
            <div className={"animate-leet-carrousel mt-2"}>
              {leet.map((k, i) => (
                <span className="mr-1 text-2xs " key={i}>
                  L33T
                </span>
              ))}
            </div>
          </div>
          <div className={"h-[90%] px-4 flex justify-center"}>
            <div>
              <div className="text-3xl leading-9 pl-2">
                {"es" === language ? <TypES /> : <TypEN />}
              </div>
              <div
                className={
                  " text-base mt-8 opacity-0 leading-5 animate-intro-description pr-8 pl-2"
                }
              >
                {text_website.HOME_FIRST_DESCRIPTION[language!]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SecondContainer = (): JSX.Element => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="max-sm:px-6 max-lg:px-16 pt-24 px-32">
        <div className="max-sm:text-xl text-3xl">
          {text_website.HOME_SECOND_TITLE[language!][0]}{" "}
          <span className={"max-sm:text-xl text-blue"}>
            {text_website.HOME_SECOND_TITLE[language!][1]}
          </span>
        </div>
        <div className="max-sm:text-sm">
          {text_website.HOME_SECOND_DESCRIPTION[language!][0]} <br />
          {text_website.HOME_SECOND_DESCRIPTION[language!][1]}
        </div>
        <div className={"max-sm:text-sm mt-2.5 text-md text-green"}>
          {text_website.HOME_SECOND_DESCRIPTION[language!][2]}
        </div>
      </div>
      <div
        className={
          "max-sm:h-[inherit] mt-20 flex flex-col  items-center w-full"
        }
      >
        <WordCarrousel />
      </div>
    </>
  );
};

const ThirdContainer = (): JSX.Element => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="max-sm:px-6 max-lg:px-16 pt-24 px-32">
        <div className="max-sm:text-xl text-3xl">
          {text_website.HOME_THIRD_TITLE[language!][0]}{" "}
          <span className={"max-sm:text-xl text-orange"}>
            {text_website.HOME_THIRD_TITLE[language!][1]}
          </span>
        </div>
        <div className="max-sm:text-sm">
          {text_website.HOME_THIRD_DESCRIPTION[language!][0]}
          <br />
          {text_website.HOME_THIRD_DESCRIPTION[language!][1]}
        </div>
      </div>
      <Timeline />
    </>
  );
};

const HomePage = (): JSX.Element => {
  return (
    <div
      className={
        "h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory pb-12 xl:pb-0"
      }
    >
      <SectionContainer>{FirstContainer()}</SectionContainer>
      <SectionContainer>{SecondContainer()}</SectionContainer>
      <SectionContainer>{ThirdContainer()}</SectionContainer>
    </div>
  );
};

export default HomePage;
