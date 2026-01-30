import { LanguageContext } from "../../context/language-context";
import text_website from "../../../../assets/text-website.json";
import { IProject, tech } from "./types";
import { useContext, useEffect } from "react";
import { selectColorYear } from "../../utils/select-color";
import { HeaderColor } from "../../components/header/header.component";
import { HeaderColorContext } from "../../context/header-color-context";

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
    languages: "React, Redux, CSS, Styled Components, React Semantic UI, Axios",
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
    languages: "React, TypeScript, Vite, Vitest (Jest), CSS-Modules, Tailwind",
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
    languages: "NodeJS, NestJS, SQLite, GraphQL, NodeJS Testing, Express",
  },
  {
    year: 2023,
    title: text_website.TECH_PROJECT_TITLES["kreborWebsite"],
    languages: "Firebase",
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
  {
    year: 2023,
    title: text_website.TECH_PROJECT_TITLES["botTrading"],
    languages: "Python, Keras",
  },
];

interface ISections {
  title: string;
  content: IProject[];
}

const TechPage = (): JSX.Element => {
  const { language } = useContext(LanguageContext);
  const { toggleColor } = useContext(HeaderColorContext);

  useEffect(() => {
    toggleColor!(HeaderColor.ORANGE);
  }, [toggleColor]);
  const sections: Array<ISections> = [
    { title: "FRONT END", content: front },
    { title: "BACK END", content: back },
    { title: text_website.SINGLE_WORDS["others"][language!], content: others },
  ];
  return (
    <div className="relative overflow-x-hidden overflow-y-scroll h-screen">
      <div className="w-full px-6 lg:px-16 xl:px-32 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl mb-6">
            {text_website.TECH_FIRST_TITLE[language!]}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 px-4">
        <div className="w-full max-w-5xl flex flex-wrap justify-center gap-6">
          {tech.map((image, i) => (
            <div
              key={i}
              className="logo-with-text hover:animate-zoom-logo relative w-12 h-12 md:w-14 md:h-14"
            >
              <img
                alt={image.name}
                src={image.src}
                className="absolute w-full h-full object-contain"
              />
              <span className="hover:opacity-100 text-xs absolute flex justify-center items-center opacity-0 w-full h-full text-center font-bold">
                {image.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-20 px-4 mt-16">
        {sections.map((e, i) => (
          <div
            key={i}
            className="w-full max-w-3xl flex flex-col items-center"
            style={{ marginTop: i === 0 ? '0' : '8rem' }}
          >
            <h2 className="text-2xl md:text-3xl mb-8 text-center">{e.title}</h2>
            <div className="w-full flex flex-col gap-4">
              {e.content.map((f, i) => (
                <div key={i} className="tech-card">
                  <div className="mb-2">
                    <span
                      className={
                        "text-base md:text-lg font-bold " + selectColorYear(f.year)
                      }
                    >
                      {"{" + f.year + "}"}
                    </span>
                    <span className="text-base md:text-lg ml-2">
                      {f.title[language!]}
                    </span>
                  </div>
                  <div className="pl-6">
                    <span className="text-sm md:text-base text-orange">
                      {f.languages}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechPage;
