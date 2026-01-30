import text_website from "../../../../assets/text-website.json";
import { LanguageContext } from "../../context/language-context";
import { useContext, useEffect } from "react";
import { selectColorYear } from "../../utils/select-color";
import { HeaderColorContext } from "../../context/header-color-context";
import { HeaderColor } from "../../components/header/header.component";

interface IProject {
  year: number;
  title: { es: string; en: string };
  desciptions: { es: string; en: string };
}

const jobs: IProject[] = [
  {
    year: 2017,
    title: text_website.WORK_OFFICIAL_WORKS["wifiair"],
    desciptions: text_website.WORK_DESCIPTION_WORKS["wifiair"],
  },
  {
    year: 2019,
    title: text_website.WORK_OFFICIAL_WORKS["accenture"],
    desciptions: text_website.WORK_DESCIPTION_WORKS["accenture"],
  },
  {
    year: 2020,
    title: text_website.WORK_OFFICIAL_WORKS["mbvr"],
    desciptions: text_website.WORK_DESCIPTION_WORKS["mbvr"],
  },
  {
    year: 2022,
    title: text_website.WORK_OFFICIAL_WORKS["nttdata"],
    desciptions: text_website.WORK_DESCIPTION_WORKS["nttdata"],
  },
  {
    year: 2023,
    title: text_website.WORK_OFFICIAL_WORKS["copernicus"],
    desciptions: text_website.WORK_DESCIPTION_WORKS["copernicus"],
  },
  {
    year: 2023,
    title: text_website.WORK_OFFICIAL_WORKS["gitkraken"],
    desciptions: text_website.WORK_DESCIPTION_WORKS["gitkraken"],
  },
];

const studies: IProject[] = [
  {
    year: 2015,
    title: text_website.STUDIES["smr"],
    desciptions: { es: "", en: "" },
  },
  {
    year: 2017,
    title: text_website.STUDIES["daw"],
    desciptions: { es: "", en: "" },
  },
  {
    year: 2020,
    title: text_website.STUDIES["master"],
    desciptions: { es: "", en: "" },
  },
  {
    year: 2021,
    title: text_website.STUDIES["malware"],
    desciptions: { es: "", en: "" },
  },
  {
    year: 2021,
    title: text_website.STUDIES["cuda"],
    desciptions: { es: "", en: "" },
  },
  {
    year: 2022,
    title: text_website.STUDIES["udemy"],
    desciptions: { es: "", en: "" },
  },
];
interface ISections {
  title: string;
  content: IProject[];
}

const WorkPage = (): JSX.Element => {
  const { language } = useContext(LanguageContext);
  const { toggleColor } = useContext(HeaderColorContext);

  useEffect(() => {
    toggleColor!(HeaderColor.ORANGE);
  }, [toggleColor]);
  const sections: Array<ISections> = [
    {
      title: text_website.WORK_OFFICIAL_WORKS["officialWorks"][language!],
      content: jobs,
    },
    {
      title: text_website.STUDIES["officialStudies"][language!],
      content: studies,
    },
  ];
  return (
    <div className="relative overflow-x-hidden overflow-y-scroll h-screen">
      <div className="w-full px-6 lg:px-16 xl:px-32 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl mb-6">
            {text_website.WORK_FIRST_TITLE[language!]}
          </div>
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
                    <span
                      className={
                        "text-base md:text-lg ml-2 " + selectColorYear(f.year)
                      }
                    >
                      {f.title[language!]}
                    </span>
                  </div>
                  {f.desciptions[language!] && (
                    <div className="pl-6">
                      <span className="text-sm md:text-base text-orange">
                        {f.desciptions[language!]}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
