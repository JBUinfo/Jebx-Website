import "./work.styles.css";
import text_website from "../../assets/text-website.json";

const Container = (): JSX.Element => {
  interface IProject {
    year: number,
    title: string,
    languages: string
  }

  const front: IProject[] = [
    {
      year:2017,
      title: "WifiAir (3 "+text_website.SINGLE_WORDS["months"].en+")",
      languages: text_website.WORK_OFFICIAL_WORKS.en[1]
    },
    {
      year:2019,
      title: "Movistar - Accenture (3 "+text_website.SINGLE_WORDS["months"].en+")",
      languages: "Blueprism"
    },
    {
      year:2020,
      title: "MBVR - "+ text_website.WORK_OFFICIAL_WORKS.en[2] +"(3 "+text_website.SINGLE_WORDS["months"].en+")",
      languages: "React, Redux, CSS, Styled Components, React Semantic UI"
    },
    {
      year:2022,
      title: text_website.TECH_PROJECT_TITLES["jazztel"].en +"(3 "+text_website.SINGLE_WORDS["months"].en+")",
      languages: "AngularJS"
    }
  ]

  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          {text_website.WORK_FIRST_TITLE.en}
        </div>
      </div>
      <div className={"center"}>
        {text_website.WORK_OFFICIAL_WORKS.en[0]}
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
    </div>
  );
};

const WorkPage = (): JSX.Element => {
  return (
    <div className={"work-container"}>
        {Container()}
    </div>
  );
};

export default WorkPage;
