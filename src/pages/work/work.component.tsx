import "./work.styles.css";
import text_website from "../../assets/text-website.json";
import { LanguageContext } from "../../language-context";

const FirstContainer = (): JSX.Element => {
  interface IProject {
    year: number;
    title: { es: string; en: string };
    desciptions: { es: string; en: string };
  }

  const jobs: IProject[] = [
    {
      year: 2017,
      title: text_website.WORK_OFFICIAL_WORKS["wifiair"],
      desciptions: text_website.WORK_DESCIPTION_WORKS['wifiair'],
    },
    {
      year: 2019,
      title: text_website.WORK_OFFICIAL_WORKS["accenture"],
      desciptions: text_website.WORK_DESCIPTION_WORKS['accenture'],
    },
    {
      year: 2020,
      title: text_website.WORK_OFFICIAL_WORKS["mbvr"],
      desciptions: text_website.WORK_DESCIPTION_WORKS['mbvr'],
    },
    {
      year: 2022,
      title: text_website.WORK_OFFICIAL_WORKS["nttdata"],
      desciptions: text_website.WORK_DESCIPTION_WORKS['nttdata'],
    },
  ];

  interface IStudies {
    year: number;
    title: { es: string; en: string };
  }
  const studies: IStudies[] = [
    {
      year: 2015,
      title: text_website.STUDIES["smr"],
    },
    {
      year: 2017,
      title: text_website.STUDIES["daw"],
    },
    {
      year: 2020,
      title: text_website.STUDIES["master"],
    },
    {
      year: 2021,
      title: text_website.STUDIES["malware"],
    },
    {
      year: 2021,
      title: text_website.STUDIES["cuda"],
    },
  ];
  
  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          <LanguageContext.Consumer>
            {({ language }) => <>{text_website.WORK_FIRST_TITLE[language!]}</>}
          </LanguageContext.Consumer>
        </div>
      </div>
      <div className={"center"}>
        <LanguageContext.Consumer>
          {({ language }) => (
            <>{text_website.WORK_OFFICIAL_WORKS["officialWorks"][language!]}</>
          )}
        </LanguageContext.Consumer>
      </div>
      <div className={"center"}>
        <div className="tech-list-front-end">
          <LanguageContext.Consumer>
            {({ language }) => (
              <>
                {jobs.map((f, i) => (
                  <ul key={i}>
                    <li>
                      <span className={"y" + f.year}>
                        {"{" + f.year + "}"} -{" "}
                      </span>
                      <span>{f.title[language!]}</span>
                    </li>
                    <ul>
                      <li>
                        <span>{f.desciptions[language!]}</span>
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
        <>{text_website.STUDIES["officialStudies"][language!]}</>
      )}
    </LanguageContext.Consumer>
  </div>
  <div className={"center"}>
    <div className="tech-list-front-end">
      <LanguageContext.Consumer>
        {({ language }) => (
          <>
            {studies.map((f, i) => (
              <ul key={i}>
                <li>
                  <span className={"y" + f.year}>
                    {"{" + f.year + "}"} -{" "}
                  </span>
                  <span className={"y" + f.year}>{f.title[language!]}</span>
                </li>
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

const WorkPage = (): JSX.Element => (
  <div className={"work-container"}>
    {FirstContainer()}
  </div>
)

export default WorkPage;
