import TypeIt from "typeit-react";
import { useState, useEffect } from 'react';

import "./home.styles.css";
import img1 from "./imgs/wall1.jpg";
import text_website from "../../assets/text-website.json";
import WordCarrousel from "../../components/word-carrousel/word-carrousel.component";
import Timeline from "../../components/timeline/timeline.component";

const FirstContainer = (): JSX.Element => {
  const [previousImage, setPreviousImage] = useState<number>(0);
  const [actualImage, setActualImage] = useState<number>(0);
  const leet = new Array(20).fill(null);
  const images = [img1,img1,img1,img1,img1]
  useEffect(() => {
    const timer = setInterval(()=>{
      setPreviousImage(actualImage);
      setActualImage(actualImage===images.length-1 ? 0 : actualImage+1);
      },6000)
    return () => clearInterval(timer);
  });

  return (
    <div className={"section-container"}>
      <div className={"img-filter"}></div>
      <div className={"img-container"}>
        {images.map((image,i)=>{
          let newClass:string = "";
          if(actualImage===i || (i===0 && previousImage===images.length-1)){
            newClass = "get-in"
          } else if(actualImage>=i+1 || (actualImage===0 && previousImage===images.length-1)){
            newClass = "get-out"
          }
          if(actualImage===i && previousImage===i){
            newClass = "first-time-img";
          }
          return(
            <div key={i} style={{backgroundImage:`url(${image})`}} className={"img-example "+ newClass} >
            </div>
          )
        })}
      </div>
      <div className={"intro"}>
        <div className={"top"}>
          <div className={"leet-carrousel"}>
            {leet.map((k,i)=>(<span key={i}>L33T</span>))}
          </div>
        </div>
        <div className={"main"}>
          <div className={"text"}>
          <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .options({ speed: 50, lifeLike: false })
                  .type(text_website.HOME_FIRST_TITLE.en[0])
                  .pause(750)
                  .delete(4)
                  .type(",")
                  .pause(300)
                  .break()
                  .type(text_website.HOME_FIRST_TITLE.en[1])
                  .pause(300)
                  .break()
                  .type(
                    "<span class='green'>" +
                      text_website.HOME_FIRST_TITLE.en[2] +
                      "</span>"
                  )
                  .flush();
                return instance;
              }}
            />
            <br />
            <br />
            <div className={"intro-description description"}>{text_website.HOME_FIRST_DESCRIPTION.en}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondContainer = (): JSX.Element => {
  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          {text_website.HOME_SECOND_TITLE.en[0]} <span className={"blue"}>{text_website.HOME_SECOND_TITLE.en[1]}</span>
        </div>
        <div className={"description"}>
          {text_website.HOME_SECOND_DESCRIPTION.en[0]} <br />
          {text_website.HOME_SECOND_DESCRIPTION.en[1]}
        </div>
        <div className={"little-description"}>
        {text_website.HOME_SECOND_DESCRIPTION.en[2]}
        </div>
      </div>

      <div className={"center"}>
        <WordCarrousel />
      </div>
    </div>
  );
};

const ThirdContainer = (): JSX.Element => {
  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          {text_website.HOME_THIRD_TITLE.en[0]} <span className={"orange"}>{text_website.HOME_THIRD_TITLE.en[1]}</span>
        </div>
        <div className={"description"}>
        {text_website.HOME_THIRD_DESCRIPTION.en[0]}<br/>
        {text_website.HOME_THIRD_DESCRIPTION.en[1]}
        </div>
      </div>
      <Timeline/>
    </div>
  );
};

const HomePage = (): JSX.Element => {
  return (
    <div className={"home-container"}>
      <>
        {FirstContainer()}
        {SecondContainer()}
        {ThirdContainer()}
      </>
    </div>
  );
};

export default HomePage;
