import TypeIt from "typeit-react";
import { useState, useEffect } from 'react';

import "./home.styles.css";
import img1 from "./imgs/wall1.jpg";
import text_website from "../../assets/text-website.json";
import WordCarrousel from "../../components/word-carrousel/word-carrousel.component";

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
  interface IProject {
    shortTitle: string,
    title: string,
    description: string,
    date: string
  }
  const projects: IProject[] = [
    {
      shortTitle: "High School project",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Wordpress websites",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Accenture, Movistar and Blueprint",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "R.A.T.",
      title: "Remote Access Tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "File sortener",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Udemy downloader",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Fever meter",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Meliá's network",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Instagram bots",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Challenge websites",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Strools",
      title: "Strools - The Twitch streaming tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!", 
      date: ""
    },
    {
      shortTitle: "Krebor management",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "CUDA",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Malware analysis",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "My definitive set-up",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Binance candles",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Bot Trading",
      title: "My first crypto trading bot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Poocoin script",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Internet radio",
      title: "NodeJS Radio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "A.M.P.A.",
      title: "A.M.P.A.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "NTT Data - Jazztel",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Wildprint",
      title: "Wildprint.es",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Bookmarks to MP4",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "This website",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Smart contracts",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Trading dashboard",
      title: "From order to success",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Krebor Website",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },

  ]
  const [information, setInformation] = useState<IProject>();
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
      <div className={"scroll-box"}>
        {projects.map((project,i)=>(
          <div key={i} className={"timeline-box"}>
                <div className={0===i%2 ? "left-box left-desc" : "left-box left-title"}>
                  <span className={0===i%2 ? "timeline-description" : "timeline-title"}>
                  {0===i%2 ? project.description : project.shortTitle}
                  </span>
                </div>
                <div className={0===i%2 ? "right-box right-desc" : "right-box right-title"}>
                  <span className={0===i%2 ? "timeline-title" : "timeline-description"}>
                  {0===i%2 ? project.shortTitle : project.description}
                  </span>
                </div>
          </div>
        ))}
      </div>
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
