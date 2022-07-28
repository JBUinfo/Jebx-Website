import "./tech.styles.css";
import text_website from "../../assets/text-website.json";
import angular from "./imgs/angular.png";
import assembly from "./imgs/assembly.png";
import bash from "./imgs/bash.png";
import blueprism from "./imgs/blueprism.png";
import bootstrap from "./imgs/bootstrap.png";
import cSharp from "./imgs/cSharp.png";
import css from "./imgs/css.png";
import docker from "./imgs/docker.png";
import elastic from "./imgs/elastic.png";
import figma from "./imgs/figma.png";
import git from "./imgs/git.png";
import html from "./imgs/html.png";
import javascript from "./imgs/javascript.png";
import jquery from "./imgs/jquery.png";
import jwt from "./imgs/JWT.png";
import mongoDB from "./imgs/mongoDB.png";
import mysql from "./imgs/mysql.png";
import nmap from "./imgs/nmap.png";
import nodejs from "./imgs/nodejs.png";
import php from "./imgs/php.png";
import python from "./imgs/python.png";
import R from "./imgs/R.png";
import react from "./imgs/react.png";
import semanticUI from "./imgs/semanticUI.png";
import socketio from "./imgs/socketio.png";
import solidity from "./imgs/solidity.png";
import styledComponents from "./imgs/styled-components.png";
import tradingView from "./imgs/trading view.png";
import typescript from "./imgs/typescript.png";
import wpf from "./imgs/wpf.png";
import redux from "./imgs/redux.png";

const Container = (): JSX.Element => {
  const images = [
    redux,
    wpf,
    typescript,
    tradingView,
    styledComponents,
    solidity,
    socketio,
    semanticUI,
    react,
    R,
    python,
    php,
    nodejs,
    angular,
    assembly,
    bash,
    blueprism,
    bootstrap,
    cSharp,
    css,
    docker,
    elastic,
    figma,
    git,
    html,
    javascript,
    jquery,
    jwt,
    mongoDB,
    mysql,
    nmap,
  ]

  interface IProject {
    year: number,
    title: string,
    languages: string
  }

  const front: IProject[] = [
    {
      year:2018,
      title: "Pokemon minigame (High Scool)",
      languages: "HTML, CSS"
    },
    {
      year:2019,
      title: "Social networks (High Scool)",
      languages: "HTML, CSS, Bootstrap"
    },
    {
      year:2020,
      title: "Wordpress websites",
      languages: "HTML, CSS, Javascript"
    },
    {
      year:2020,
      title: "Remote Access Tool",
      languages: "Windows forms, WPF"
    },
    {
      year:2020,
      title: "Strools",
      languages: "Windows forms, WPF"
    },
    {
      year:2021,
      title: "Covid management dashboard",
      languages: "React, Redux, CSS, Styled Components, React Semantic UI"
    },
    {
      year:2021,
      title: "Krebor management",
      languages: "Windows forms, WPF"
    },
    {
      year:2021,
      title: "Poocoin script",
      languages: "Javascript"
    },
    {
      year:2022,
      title: "Internet radio",
      languages: "React, CSS, Javascript"
    },
    {
      year:2022,
      title: "A.M.P.A.",
      languages: "CSS, Javascript"
    },
    {
      year:2022,
      title: "Jazztel Website (NTT Data)",
      languages: "AngularJS"
    },
    {
      year:2022,
      title: "Wildprint",
      languages: "React, Redux, HTML, CSS"
    },
    {
      year:2022,
      title: "This website",
      languages: "React, TS, HTML, CSS"
    },
    {
      year:2023,
      title: "Trading dashboard",
      languages: "React, Tailwind, HTML, CSS"
    },
    {
      year:2023,
      title: "Krebor Website",
      languages: "React, Redux, HTML, CSS"
    }
  ]
  const back: IProject[] = [
    {
      year:2018,
      title: "Pokemon minigame (High Scool)",
      languages: "PHP, Mysql"
    },
    {
      year:2019,
      title: "Social networks (High Scool)",
      languages: "Socket.io, NodeJS, MongoDB"
    },
    {
      year:2019,
      title: "Movistar (Accenture)",
      languages: "Blueprint"
    },
    {
      year:2020,
      title: "Wordpress websites",
      languages: "PHP, MySQL"
    },
    {
      year:2020,
      title: "Remote Access Tool",
      languages: "C#, C++"
    },
    {
      year:2020,
      title: "Strools",
      languages: "C#"
    },
    {
      year:2021,
      title: "Krebor management",
      languages: "C#"
    },
    {
      year:2022,
      title: "Internet radio",
      languages: "NodeJS, Socket.io"
    },
    {
      year:2023,
      title: "Trading dashboard",
      languages: "NodeJS, MongoDB"
    }
  ]
  
  const others: IProject[] = [
    {
      year:2020,
      title: "File sortener",
      languages: "Bash, C++, C#, NodeJS, MongoDB"
    },
    {
      year:2020,
      title: "Udemy downloader",
      languages: "Python"
    },
    {
      year:2020,
      title: "Meliá's network",
      languages: "NMap, Bash"
    },
    {
      year:2020,
      title: "Instagram bots",
      languages: "C#, Python"
    },
    {
      year:2021,
      title: "Challenge websites",
      languages: "Bash, C++, NodeJS, Python"
    },
    {
      year:2021,
      title: "CUDA",
      languages: "CUDA, C++, Python"
    },
    {
      year:2021,
      title: "Malware analysis (TFM and Virustotal course)",
      languages: "Forensic software"
    },
    {
      year:2022,
      title: "Binance candles",
      languages: "Python"
    },
    {
      year:2022,
      title: "Bot Trading",
      languages: "NodeJS, Python"
    },
    {
      year:2022,
      title: "Bookmarks to MP4",
      languages: "NodeJS"
    },
    {
      year:2022,
      title: "Smart contracts",
      languages: "Solidity"
    },
  ]
  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          {text_website.TECH_FIRST_TITLE.en}
        </div>
      </div>

      <div className={"center"}>
        <div className="img-logo-container">
          {images.map((image,i)=>{
            return(
              <div className="each-img-container">
                <img key={i} src={image} className={"img-logo"}/>
                <span> aka </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={"center"}>
        FRONT END
      </div>
      <div className={"center"}>
        <div className="tech-list-front-end">
          {front.map((f, i)=>(
            <ul key={i}>
              <li>
                <span className={"y"+f.year}>{f.year} - </span>
                <span>{f.title}</span>
              </li>
              <ul>
                <li>
                <span>{f.languages}</span>
                </li>
              </ul>
            </ul>
          ))}
          
        </div>
      </div>
      
      <div className={"center"}>
        BACK END
      </div>
      <div className={"center"}>
        <div className="tech-list-front-end">
        {back.map((f, i)=>(
            <ul key={i}>
              <li>
                <span className={"y"+f.year}>{f.year} - </span>
                <span>{f.title}</span>
              </li>
              <ul>
                <li>
                <span>{f.languages}</span>
                </li>
              </ul>
            </ul>
          ))}
        </div>
      </div>

      <div className={"center"}>
        OTHERS
      </div>
      <div className={"center"}>
        <div className="tech-list-front-end">
        {others.map((f, i)=>(
            <ul key={i}>
              <li>
                <span className={"y"+f.year}>{f.year} - </span>
                <span>{f.title}</span>
              </li>
              <ul>
                <li>
                <span>{f.languages}</span>
                </li>
              </ul>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechPage = (): JSX.Element => {
  return (
    <div className={"tech-container"}>
        {Container()}
    </div>
  );
};

export default TechPage;
