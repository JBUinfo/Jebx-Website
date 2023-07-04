import text_website from "../../assets/text-website.json";
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
      <div className="max-sm:px-6 max-lg:px-16 pt-24 px-32">
        <div className={"max-sm:text-xl text-3xl"}>
          {text_website.WORK_FIRST_TITLE[language!]}
        </div>
      </div>
      <div className="flex flex-col items-center mb-20">
        {sections.map((e, i) => (
          <div
            key={i}
            className="max-sm:w-11/12 max-lg:w-5/6 max-2xl:w-2/3 mt-20 w-1/2 flex items-center flex-col"
          >
            <div className={"max-sm:text-xl text-3xl"}>{e.title}</div>
            <div className="max-sm:mt-4 flex flex-col w-full mt-20">
              {e.content.map((f, i) => (
                <ul key={i} className="m-2">
                  <li>
                    <span
                      className={
                        "max-sm:text-sm text-xl " + selectColorYear(f.year)
                      }
                    >
                      {"{" + f.year + "}"} -{" "}
                    </span>
                    <span
                      className={
                        "max-sm:text-sm text-xl " + selectColorYear(f.year)
                      }
                    >
                      {f.title[language!]}
                    </span>
                  </li>
                  <ul className="max-sm:pl-4 m-3 pl-10">
                    <li>
                      <span className="max-sm:text-sm text-orange">
                        {f.desciptions[language!]}
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
  );
};

export default WorkPage;
