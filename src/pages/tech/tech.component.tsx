import "./tech.styles.css";
import { LanguageContext } from "../../language-context";
import text_website from "../../assets/text-website.json";
import { IProject, tech } from "./types";

const Container = (): JSX.Element => {
  const front: IProject[] = [
    {
      year: 2018,
      title: text_website.TECH_PROJECT_TITLES["digimon"],
      languages: "HTML, CSS",
    },
    {
      year: 2019,
      title: text_website.TECH_PROJECT_TITLES["socialNetwork"],
      languages: "HTML, CSS, Bootstrap",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["wordpress"],
      languages: "HTML, CSS, Javascript",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["rat"],
      languages: "Windows forms, WPF",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["strools"],
      languages: "Windows forms, WPF",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["covid"],
      languages:
        "React, Redux, CSS, Styled Components, React Semantic UI, Axios",
    },
    {
      year: 2021,
      title: text_website.TECH_PROJECT_TITLES["kreborManagement"],
      languages: "Windows forms, WPF",
    },
    {
      year: 2021,
      title: text_website.TECH_PROJECT_TITLES["poocoin"],
      languages: "Javascript",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["radio"],
      languages: "React, CSS, Javascript",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["ampa"],
      languages: "CSS, Javascript",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["jazztel"],
      languages: "AngularJS",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["wildprint"],
      languages: "React, Redux, HTML, CSS",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["thisWebsite"],
      languages: "React, TypeScript, HTML, CSS, Tailwind",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["smartContracts"],
      languages: "Web3.js",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["lorive"],
      languages: "React, TypeScript, Taildwind CSS, ElectronJS",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["pokemon2.0"],
      languages:
        "React, TypeScript, Vite, Vitest (Jest), CSS-Modules, Tailwind, Cypress",
    },
    {
      year: 2023,
      title: text_website.TECH_PROJECT_TITLES["tradingDashboard"],
      languages: "React, Tailwind, HTML, CSS",
    },
    {
      year: 2023,
      title: text_website.TECH_PROJECT_TITLES["kreborWebsite"],
      languages: "React, HTML, CSS",
    },
  ];
  const back: IProject[] = [
    {
      year: 2018,
      title: text_website.TECH_PROJECT_TITLES["digimon"],
      languages: "PHP, Mysql",
    },
    {
      year: 2019,
      title: text_website.TECH_PROJECT_TITLES["socialNetwork"],
      languages: "Socket.io, NodeJS, MongoDB, Express",
    },
    {
      year: 2019,
      title: text_website.TECH_PROJECT_TITLES["movistar"],
      languages: "Blueprint",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["wordpress"],
      languages: "PHP, MySQL",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["rat"],
      languages: "C#, C++",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["strools"],
      languages: "C#",
    },
    {
      year: 2021,
      title: text_website.TECH_PROJECT_TITLES["kreborManagement"],
      languages: "C#, SQLite",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["radio"],
      languages: "NodeJS, Socket.io, Express",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["thisWebsite"],
      languages: "Firebase",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["smartContracts"],
      languages: "Ganache, Solidity",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["lorive"],
      languages: "Golang",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["pokemon2.0"],
      languages:
        "NodeJS, NestJS, SQLite, GraphQL, NodeJS Testing, Express, Cypress",
    },
    {
      year: 2023,
      title: text_website.TECH_PROJECT_TITLES["kreborWebsite"],
      languages: "Firebase, NextJS",
    },
    {
      year: 2023,
      title: text_website.TECH_PROJECT_TITLES["tradingDashboard"],
      languages: "NodeJS, MongoDB, Express",
    },
  ];
  const others: IProject[] = [
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["fileSortener"],
      languages: "Bash, C++, C#, NodeJS, MongoDB",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["udemy"],
      languages: "Python",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["meliaAnalysis"],
      languages: "NMap, Bash",
    },
    {
      year: 2020,
      title: text_website.TECH_PROJECT_TITLES["instagram"],
      languages: "C#, Python",
    },
    {
      year: 2021,
      title: text_website.TECH_PROJECT_TITLES["challengeWebsites"],
      languages: "Bash, C++, NodeJS, Python",
    },
    {
      year: 2021,
      title: text_website.TECH_PROJECT_TITLES["cuda"],
      languages: "CUDA, C++, Python",
    },
    {
      year: 2021,
      title: text_website.TECH_PROJECT_TITLES["malwareAnalysis"],
      languages: "Forensic software",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["binance"],
      languages: "Python",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["tradingBot"],
      languages: "NodeJS, Python",
    },
    {
      year: 2022,
      title: text_website.TECH_PROJECT_TITLES["bookmarks"],
      languages: "NodeJS",
    },
  ];
  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          <LanguageContext.Consumer>
            {({ language }) => <>{text_website.TECH_FIRST_TITLE[language!]}</>}
          </LanguageContext.Consumer>
        </div>
      </div>

      <div className={"center"}>
        <div className="img-logo-container">
          {tech.map((image, i) => (
            <div key={i} className="each-img-container">
              <img alt={image.name} src={image.src} className={"img-logo"} />
              <span> {image.name} </span>
            </div>
          ))}
        </div>
      </div>
      <div className={"center"}>FRONT END</div>
      <div className={"center"}>
        <div className="tech-list-front-end">
          <LanguageContext.Consumer>
            {({ language }) => (
              <>
                {front.map((f, i) => (
                  <ul key={i}>
                    <li>
                      <span className={"y" + f.year}>
                        {"{" + f.year + "}"} -{" "}
                      </span>
                      <span>{f.title[language!]}</span>
                    </li>
                    <ul>
                      <li>
                        <span>{f.languages}</span>
                      </li>
                    </ul>
                  </ul>
                ))}
              </>
            )}
          </LanguageContext.Consumer>
        </div>
      </div>

      <div className={"center"}>BACK END</div>
      <div className={"center"}>
        <div className="tech-list-front-end">
          <LanguageContext.Consumer>
            {({ language }) => (
              <>
                {back.map((f, i) => (
                  <ul key={i}>
                    <li>
                      <span className={"y" + f.year}>
                        {"{" + f.year + "}"} -{" "}
                      </span>
                      <span>{f.title[language!]}</span>
                    </li>
                    <ul>
                      <li>
                        <span>{f.languages}</span>
                      </li>
                    </ul>
                  </ul>
                ))}
              </>
            )}
          </LanguageContext.Consumer>
        </div>
      </div>

      <div className={"center"}>
        <LanguageContext.Consumer>
          {({ language }) => (
            <>{text_website.SINGLE_WORDS["others"][language!]}</>
          )}
        </LanguageContext.Consumer>
      </div>
      <div className={"center"}>
        <div className="tech-list-front-end">
          <LanguageContext.Consumer>
            {({ language }) => (
              <>
                {others.map((f, i) => (
                  <ul key={i}>
                    <li>
                      <span className={"y" + f.year}>
                        {"{" + f.year + "}"} -{" "}
                      </span>
                      <span>{f.title[language!]}</span>
                    </li>
                    <ul>
                      <li>
                        <span>{f.languages}</span>
                      </li>
                    </ul>
                  </ul>
                ))}
              </>
            )}
          </LanguageContext.Consumer>
        </div>
      </div>
    </div>
  );
};

const TechPage = (): JSX.Element => {
  return <div className={"tech-container"}>{Container()}</div>;
};

export default TechPage;
