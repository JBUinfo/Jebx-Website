import text_website from "../../../../assets/text-website.json";
import profPic from "../../../../assets/profile/cipher citizen 869.png";
import CV_ESP from "../../../../assets/cv/CV_Javier_Borbolla.pdf";
import CV_ENG from "../../../../assets/cv/CV_Javier_Borbolla_English.pdf";
import { LanguageContext } from "../../context/language-context";
import { useContext, useEffect } from "react";
import { HeaderColorContext } from "../../context/header-color-context";
import { HeaderColor } from "../../components/header/header.component";

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
  const { toggleColor } = useContext(HeaderColorContext);

  useEffect(() => {
    toggleColor!(HeaderColor.CUSTOM_BLUE);
  }, [toggleColor]);
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
    <div className="relative overflow-x-hidden overflow-y-scroll h-screen">
      <div className="w-full flex justify-center pt-24 pb-20 px-4">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8 w-full p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#111111] border-2 border-customBlue/20 shadow-[0_0_30px_rgba(24,231,184,0.15)] hover:shadow-[0_0_40px_rgba(24,231,184,0.25)] transition-shadow duration-500">
            <div
              className="w-full lg:w-5/12 h-80 md:h-96 bg-center bg-cover rounded-lg"
              style={{ backgroundImage: `url("${profPic}")` }}
            ></div>
            <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start justify-center">
              <h1 className="text-xl md:text-2xl text-center lg:text-left mb-4">
                Javier Borbolla Ureña (Jebx)
              </h1>
              <div className="p-3 md:p-4 rounded text-center bg-white w-full shadow-[0px_0px_20px_0px_#f8a8ff] mb-6">
                <span className="text-sm md:text-base italic text-black">
                  {text_website.ME_SHORT_DESCRIPTION[language!]}
                </span>
              </div>
              <div className="w-full">
                <h2 className="text-base md:text-lg mb-2">{text_website.ME_ABOUT_ME[language!][0]}</h2>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm md:text-base ml-6">
                    {text_website.ME_ABOUT_ME[language!][1]}
                  </li>
                  <li className="text-sm md:text-base ml-6">
                    {text_website.ME_ABOUT_ME[language!][2]}
                  </li>
                  <li className="text-sm md:text-base ml-6">
                    {text_website.ME_ABOUT_ME[language!][3]}
                  </li>
                </ul>
                <h2 className="text-base md:text-lg mb-2">{text_website.ME_FAVORITE_SONGS[language!][0]}</h2>
                <ul className="space-y-1">
                  <li className="text-sm md:text-base">- As it was - Harry Styles</li>
                  <li className="text-sm md:text-base">- Save your tears - The Weeknd</li>
                  <li className="text-sm md:text-base">
                    {text_website.ME_FAVORITE_SONGS[language!][1]}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 p-6 md:p-8 rounded-lg bg-gradient-to-r from-[#1a1a1a] via-[#151515] to-[#1a1a1a] border-2 border-orange/20">
            <p className="text-sm md:text-base leading-relaxed">
              {text_website.ME_LONG_DESC[language!]}
            </p>
          </div>

          <div className="w-full mt-8 flex justify-center">
            <a
              href={"es" === language! ? CV_ESP : CV_ENG}
              download="CV Javier Borbolla"
              className="hover:bg-[#dc8f00] hover:scale-105 transition-all shadow-lg py-2 px-4 md:py-3 md:px-6 bg-orange rounded text-white text-base md:text-lg"
            >
              {text_website.DOWNLOAD_CV[language!]}
            </a>
          </div>
          {readings.map((e, i) => (
            <div key={i} className={"pt-24 w-full"}>
              <div className={"max-sm:text-xl text-3xl"}>{e.title}</div>
              <div className="max-sm:text-sm">{e.description}</div>
              <div className="mt-6 space-y-4">
                {e.content.map((f, i) => (
                  <div key={i} className="tech-card">
                    <div className="mb-2">
                      {f.url ? (
                        <a href={f.url[language!]} className="hover:text-customBlue transition-colors">
                          <span className="max-sm:text-base text-xl underline">
                            &gt; {f[language!][0]}
                          </span>
                        </a>
                      ) : (
                        <span className="max-sm:text-base text-xl">
                          &gt; {f[language!][0]}
                        </span>
                      )}
                    </div>
                    <div className="pl-8">
                      <span className="max-sm:text-sm text-base text-orange">
                        {f[language!][1]}
                      </span>
                    </div>
                  </div>
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
