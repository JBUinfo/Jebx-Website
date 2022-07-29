import './timeline.styles.css'
import text_website from "../../assets/text-website.json";
import {LanguageContext} from '../../language-context';

const Timeline = (): JSX.Element => {
  interface IProject {
    shortTitle: {"es":string,"en":string},
    description: {"es":string,"en":string},
  }
  const projects: IProject[] = [
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["pokemon"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["pokemon"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["socialNetwork"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["socialNetwork"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["movistar"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["movistar"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wordpress"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["wordpress"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["rat"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["rat"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["strools"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["strools"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["fileSortener"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["fileSortener"]
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["udemy"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["udemy"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["meliaAnalysis"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["meliaAnalysis"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["covid"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["covid"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["instagram"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["instagram"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["cuda"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["cuda"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["malwareAnalysis"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["malwareAnalysis"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborManagement"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["kreborManagement"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["poocoin"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["poocoin"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["challengeWebsites"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["challengeWebsites"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["ampa"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["ampa"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["radio"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["radio"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["binance"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["binance"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingBot"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["tradingBot"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["jazztel"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["jazztel"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wildprint"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["wildprint"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["bookmarks"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["bookmarks"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["thisWebsite"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["thisWebsite"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["smartContracts"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["smartContracts"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborWebsite"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["kreborWebsite"],
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingDashboard"],
      description: text_website.TECH_PROJECT_DESCRIPTIONS["tradingDashboard"],
    },
  ]
  
  return (
    <div className={"scroll-box"}>
      <LanguageContext.Consumer>
        {({language}) => (
          <>
            {projects.map((project,i)=>(
              <div key={i} className={"timeline-box"}>
                    <div className={0===i%2 ? "left-box left-desc" : "left-box left-title"}>
                      <span className={0===i%2 ? "timeline-description" : "timeline-title"}>
                      {0===i%2 ? project.description[language!] : project.shortTitle[language!]}
                      </span>
                    </div>
                    <div className={0===i%2 ? "right-box right-desc" : "right-box right-title"}>
                      <span className={0===i%2 ? "timeline-title" : "timeline-description"}>
                      {0===i%2 ? project.shortTitle[language!] : project.description[language!]}
                      </span>
                    </div>
              </div>
            ))} 
          </>
        )}
      </LanguageContext.Consumer>
    </div>
  );
};
  
export default Timeline;  