import text_website from "../../assets/text-website.json";
import profPic from "./imgs/cipher citizen 869.png";
import CV_ESP from "./assets/CV_Javier_Borbolla.pdf";
import CV_ENG from "./assets/CV_Javier_Borbolla_English.pdf";
import { LanguageContext } from "../../language-context";
import { useContext } from "react";

interface IArticule {
  url: {
    es: string;
    en: string;
  } | null;
  es: Array<string>;
  en: Array<string>;
}

interface IReading {
  title: string;
  description: string;
  content: Array<IArticule>;
}

const MePage = (): JSX.Element => {
  const { language } = useContext(LanguageContext);

  const readings: Array<IReading> = [
    {
      title: text_website.ME_RECOMMENDED_READINGS_TITLE[language!],
      description: text_website.ME_RECOMMENDED_READINGS_DESCRIPTION[language!],
      content: text_website.ME_RECOMMENDED_READINGS,
    },
    {
      title: text_website.ME_OFF_TOPIC_READINGS_TITLE[language!],
      description: text_website.ME_OFF_TOPIC_READINGS_DESCRIPTION[language!],
      content: text_website.ME_OFF_TOPIC_READINGS,
    },
  ];
  return (
    <div className="relative overflow-x-hidden overflow-y-scroll h-screen ">
      <div className={"flex justify-center pt-24 mb-20"}>
        <div className="max-sm:w-11/12 max-xl:w-4/5 w-3/5">
          <div className="max-lg:flex-col flex flex-row w-full">
            <div
              className={"max-lg:w-full w-5/12 h-96 bg-center bg-cover"}
              style={{ backgroundImage: `url("${profPic}")` }}
            ></div>
            <div
              className={
                " max-lg:mt-8 max-2xl:w-full w-1/2 flex flex-col items-center "
              }
            >
              <span className="text-center">Javier Borbolla Ureña</span>
              <div
                className={
                  "max-sm:p-2 p-3 mt-4 rounded text-center bg-white w-4/5 shadow-[0px_0px_20px_0px_#f8a8ff] "
                }
              >
                <span className="max-sm:text-xs text-sm italic text-black">
                  {text_website.ME_SHORT_DESCRIPTION[language!]}
                </span>
              </div>
              <div className={"max-sm:w-full max-sm:text-md w-4/5 mt-6"}>
                <span>{text_website.ME_ABOUT_ME[language!][0]}</span>
                <ul className="max-sm:mt-2">
                  <li className="max-sm:ml-2 max-sm:text-xs ml-10 mb-3 ">
                    {text_website.ME_ABOUT_ME[language!][1]}
                  </li>
                  <li className="max-sm:ml-2 max-sm:text-xs ml-10 mb-3">
                    {text_website.ME_ABOUT_ME[language!][2]}
                  </li>
                  <li className="max-sm:ml-2 max-sm:text-xs ml-10 mb-3">
                    {text_website.ME_ABOUT_ME[language!][3]}
                  </li>
                </ul>
                <span>{text_website.ME_FAVORITE_SONGS[language!][0]}</span>
                <ul className="max-sm:mt-2">
                  <li className="max-sm:text-xs">- As it was - Harry Styles</li>
                  <li className="max-sm:text-xs">
                    - Save your tears - The Weeknd
                  </li>
                  <li className="max-sm:text-xs">
                    {text_website.ME_FAVORITE_SONGS[language!][1]}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className={"mt-8"}>
              <span className="max-sm:text-xs">
                {text_website.ME_LONG_DESC[language!]}
              </span>
            </div>
          </div>
          <div className={"mt-5 w-full"}>
            <div className={"flex justify-center"}>
              <a
                href={"es" === language! ? CV_ESP : CV_ENG}
                download="CV Javier Borbolla"
              >
                <span
                  className={
                    "hover:bg-[#dc8f00] hover:scale-[1.02] shadow-[8px_8px_6px_0px_black] ml-5 max-w-lg flex py-1 px-2 bg-orange w-fit rounded text-shadow-blue"
                  }
                >
                  {text_website.DOWNLOAD_CV[language!]}
                </span>
              </a>
            </div>
          </div>
          {readings.map((e, i) => (
            <div key={i} className={"pt-24 w-full"}>
              <div className={"max-sm:text-xl text-3xl"}>{e.title}</div>
              <div className="max-sm:text-sm">{e.description}</div>
              <div>
                {e.content.map((f, i) => (
                  <ul className="max-sm:ml-2 mt-5 ml-10" key={i}>
                    <li>
                      {f.url ? (
                        <a href={f.url[language!]}>
                          <span className="max-sm:text-md text-xl underline italic">
                            &gt; {f[language!][0]}
                          </span>
                        </a>
                      ) : (
                        <span className="max-sm:text-md">
                          &gt; {f[language!][0]}
                        </span>
                      )}
                    </li>
                    <ul className="ml-14 mt-3">
                      <li>
                        <span className="max-sm:text-xs text-orange text-sm">
                          {f[language!][1]}
                        </span>
                      </li>
                    </ul>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MePage;
