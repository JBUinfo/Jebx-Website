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
  interface IImage {
    name: string,
    src: string
  }
  const images: IImage[] = [
    {name:"redux",src:redux},
    {name:"wpf",src:wpf},
    {name:"typescript",src:typescript},
    {name:"tradingView",src:tradingView},
    {name:"styledComponents",src:styledComponents},
    {name:"solidity",src:solidity},
    {name:"socketio",src:socketio},
    {name:"semanticUI",src:semanticUI},
    {name:"react",src:react},
    {name:"R",src:R},
    {name:"python",src:python},
    {name:"php",src:php},
    {name:"nodejs",src:nodejs},
    {name:"angular",src:angular},
    {name:"assembly",src:assembly},
    {name:"bash",src:bash},
    {name:"blueprism",src:blueprism},
    {name:"bootstrap",src:bootstrap},
    {name:"cSharp",src:cSharp},
    {name:"css",src:css},
    {name:"docker",src:docker},
    {name:"elastic",src:elastic},
    {name:"figma",src:figma},
    {name:"git",src:git},
    {name:"html",src:html},
    {name:"javascript",src:javascript},
    {name:"jquery",src:jquery},
    {name:"jwt",src:jwt},
    {name:"mongoDB",src:mongoDB},
    {name:"mysql",src:mysql},
    {name:"nmap",src:nmap},
  ]

  interface IProject {
    year: number,
    title: string,
    languages: string
  }

  const front: IProject[] = [
    {
      year:2018,
      title: text_website.TECH_PROJECT_TITLES["pokemon"].en,
      languages: "HTML, CSS"
    },
    {
      year:2019,
      title: text_website.TECH_PROJECT_TITLES["socialNetwork"].en,
      languages: "HTML, CSS, Bootstrap"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["wordpress"].en,
      languages: "HTML, CSS, Javascript"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["rat"].en,
      languages: "Windows forms, WPF"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["strools"].en,
      languages: "Windows forms, WPF"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["covid"].en,
      languages: "React, Redux, CSS, Styled Components, React Semantic UI"
    },
    {
      year:2021,
      title: text_website.TECH_PROJECT_TITLES["kreborManagement"].en,
      languages: "Windows forms, WPF"
    },
    {
      year:2021,
      title: text_website.TECH_PROJECT_TITLES["poocoin"].en,
      languages: "Javascript"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["radio"].en,
      languages: "React, CSS, Javascript"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["ampa"].en,
      languages: "CSS, Javascript"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["jazztel"].en,
      languages: "AngularJS"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["wildprint"].en,
      languages: "React, Redux, HTML, CSS"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["thisWebsite"].en,
      languages: "React, TS, HTML, CSS"
    },
    {
      year:2023,
      title: text_website.TECH_PROJECT_TITLES["tradingDashboard"].en,
      languages: "React, Tailwind, HTML, CSS"
    },
    {
      year:2023,
      title: text_website.TECH_PROJECT_TITLES["kreborWebsite"].en,
      languages: "React, Redux, HTML, CSS"
    }
  ]
  const back: IProject[] = [
    {
      year:2018,
      title: text_website.TECH_PROJECT_TITLES["pokemon"].en,
      languages: "PHP, Mysql"
    },
    {
      year:2019,
      title: text_website.TECH_PROJECT_TITLES["socialNetwork"].en,
      languages: "Socket.io, NodeJS, MongoDB"
    },
    {
      year:2019,
      title: text_website.TECH_PROJECT_TITLES["movistar"].en,
      languages: "Blueprint"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["wordpress"].en,
      languages: "PHP, MySQL"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["rat"].en,
      languages: "C#, C++"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["strools"].en,
      languages: "C#"
    },
    {
      year:2021,
      title: text_website.TECH_PROJECT_TITLES["kreborManagement"].en,
      languages: "C#, SQLite"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["radio"].en,
      languages: "NodeJS, Socket.io"
    },
    {
      year:2023,
      title: text_website.TECH_PROJECT_TITLES["tradingDashboard"].en,
      languages: "NodeJS, MongoDB"
    }
  ]
  
  const others: IProject[] = [
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["fileSortener"].en,
      languages: "Bash, C++, C#, NodeJS, MongoDB"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["udemy"].en,
      languages: "Python"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["meliaAnalysis"].en,
      languages: "NMap, Bash"
    },
    {
      year:2020,
      title: text_website.TECH_PROJECT_TITLES["instagram"].en,
      languages: "C#, Python"
    },
    {
      year:2021,
      title: text_website.TECH_PROJECT_TITLES["challengeWebsites"].en,
      languages: "Bash, C++, NodeJS, Python"
    },
    {
      year:2021,
      title: text_website.TECH_PROJECT_TITLES["cuda"].en,
      languages: "CUDA, C++, Python"
    },
    {
      year:2021,
      title: text_website.TECH_PROJECT_TITLES["malwareAnalysis"].en,
      languages: "Forensic software"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["binance"].en,
      languages: "Python"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["tradingBot"].en,
      languages: "NodeJS, Python"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["bookmarks"].en,
      languages: "NodeJS"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["smartContracts"].en,
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
                <img key={i} src={image.src} className={"img-logo"}/>
                <span> {image.name} </span>
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
                <span className={"y"+f.year}>{"{"+f.year+"}"} - </span>
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
                <span className={"y"+f.year}>{"{"+f.year+"}"} - </span>
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
        {text_website.SINGLE_WORDS["others"].en}
      </div>
      <div className={"center"}>
        <div className="tech-list-front-end">
        {others.map((f, i)=>(
            <ul key={i}>
              <li>
                <span className={"y"+f.year}>{"{"+f.year+"}"} - </span>
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
