import text_website from "../../assets/text-website.json";
import { LanguageContext } from "../../context/language-context";
import { useContext } from "react";

const Timeline = (): JSX.Element => {
  const { language } = useContext(LanguageContext);
  interface IProject {
    shortTitle: { es: string; en: string };
    description: { es: string; en: string };
    url: string;
  }
  const projects: IProject[] = [
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["digimon"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["digimon"],
      url: "https://github.com/JBUinfo/HighSchool-DigimonPHP",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["socialNetwork"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["socialNetwork"],
      url: "https://github.com/JBUinfo/HighSchool-VaohLand",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["movistar"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["movistar"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wordpress"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["wordpress"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["rat"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["rat"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["strools"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["strools"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["fileSortener"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["fileSortener"],
      url: "https://github.com/JBUinfo/sort-lines-in-files",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["udemy"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["udemy"],
      url: "https://github.com/JBUinfo/NotWorking-udemy-downloader",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["meliaAnalysis"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["meliaAnalysis"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["covid"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["covid"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["instagram"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["instagram"],
      url: "https://github.com/JBUinfo/NotWorking-BotInstagram",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["cuda"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["cuda"],
      url: "https://courses.nvidia.com/certificates/7da7191660554c6bac19c9042781b2fd",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["malwareAnalysis"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["malwareAnalysis"],
      url: "https://www.nics.uma.es/Titulo-Experto-Malware",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborManagement"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["kreborManagement"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["poocoin"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["poocoin"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["challengeWebsites"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["challengeWebsites"],
      url: "https://www.hackerrank.com/javierbuinfo",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["ampa"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["ampa"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["radio"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["radio"],
      url: "https://github.com/JBUinfo/nodejs-web-radio",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["binance"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["binance"],
      url: "https://github.com/JBUinfo/historical-spot-klines-binance",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingBot"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["tradingBot"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["jazztel"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["jazztel"],
      url: "https://www.jazztel.com/",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wildprint"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["wildprint"],
      url: "wildprint.es",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["bookmarks"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["bookmarks"],
      url: "https://github.com/JBUinfo/YT-chrome-bookmarks-2-MP4",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["thisWebsite"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["thisWebsite"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["smartContracts"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["smartContracts"],
      url: "",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["lorive"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["lorive"],
      url: "https://github.com/JBUinfo/Lorive",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["pokemon2.0"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["pokemon2.0"],
      url: "https://github.com/JBUinfo/For-fun-random-minigame",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborWebsite"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["kreborWebsite"],
      url: "https://krebor.com",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["botTrading"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["botTrading"],
      url: "",
    },
  ];

  return (
    <div className="max-sm:overflow-scroll max-sm:h-96 max-xl:mt-10 max-xl:h-1/2 mt-24 overflow-x-hidden overflow-y-scroll w-screen h-3/5">
      <>
        {projects.map((project, i /**title or description left or right*/) => (
          <div key={i} className="max-sm:h-full h-1/2 w-full flex">
            {0 === i % 2 ? (
              <>
                <div className="h-full w-1/2 border-r-4 border-black flex">
                  <span className="max-sm:text-xs max-xl:text-sm w-4/5 block m-auto text-base">
                    {project.description[language!]}
                  </span>
                </div>
                <div className="h-full w-1/2 border-l-4 border-[orange] items-center flex">
                  {project.url ? (
                    <a
                      href={project.url}
                      className="max-sm:max-w-[9rem] max-xl:max-w-sm max-lg:max-w-xs font-['nk57i']"
                    >
                      <div className="hover:bg-[#dc8f00] hover:scale-[1.02] shadow-[8px_8px_6px_0px_black]  ml-5 max-w-lg flex py-1 px-2 bg-[orange] w-fit rounded text-shadow-blue">
                        <span className="text-center w-full text-sm leading-5 break-words">
                          {project.shortTitle[language!]}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="max-sm:max-w-[9rem] max-xl:max-w-sm max-lg:max-w-xs ml-5 max-w-lg flex py-1 px-2 bg-[#1312123d] w-fit rounded">
                      <span className="text-center w-full text-sm leading-5 break-words">
                        {project.shortTitle[language!]}
                      </span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div
                  className={"h-full w-1/2 border-r-4 border-black left-title"}
                >
                  <div className="justify-end flex items-center h-full mr-5">
                    {project.url ? (
                      <a
                        href={project.url}
                        className="max-sm:max-w-[9rem] max-xl:max-w-sm max-lg:max-w-xs font-['nk57i']"
                      >
                        <div className="hover:bg-[#dc8f00] hover:scale-[1.02] shadow-[8px_8px_6px_0px_black]  max-w-lg flex py-1 px-2 bg-[orange] w-fit rounded text-shadow-blue">
                          <span className="text-center w-full text-sm leading-5 break-words">
                            {project.shortTitle[language!]}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="max-sm:max-w-[9rem] max-xl:max-w-sm max-lg:max-w-xs max-w-lg flex py-1 px-2 bg-[#1312123d] w-fit rounded ">
                        <span className="text-center w-full text-sm leading-5 break-words">
                          {project.shortTitle[language!]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={
                    "h-full w-1/2 border-l-4 border-[orange] items-center flex"
                  }
                >
                  <span className={"max-sm:text-xs max-xl:text-sm  ml-5 w-4/5"}>
                    {project.description[language!]}
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </>
    </div>
  );
};

export default Timeline;
