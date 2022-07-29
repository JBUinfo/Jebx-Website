import './timeline.styles.css'
import text_website from "../../assets/text-website.json";

const Timeline = (): JSX.Element => {
  interface IProject {
    shortTitle: string,
    description: string
  }
  const projects: IProject[] = [
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["pokemon"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["socialNetwork"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["movistar"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wordpress"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["rat"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["strools"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!", 
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["fileSortener"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["udemy"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["meliaAnalysis"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["covid"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["instagram"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["cuda"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["malwareAnalysis"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborManagement"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["poocoin"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["challengeWebsites"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["ampa"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["radio"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["binance"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingBot"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["jazztel"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wildprint"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["bookmarks"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["thisWebsite"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["smartContracts"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborWebsite"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingDashboard"].en,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
    },
  ]
  
  return (
    <div className={"scroll-box"}>
      {projects.map((project,i)=>(
        <div key={i} className={"timeline-box"}>
              <div className={0===i%2 ? "left-box left-desc" : "left-box left-title"}>
                <span className={0===i%2 ? "timeline-description" : "timeline-title"}>
                {0===i%2 ? project.description : project.shortTitle}
                </span>
              </div>
              <div className={0===i%2 ? "right-box right-desc" : "right-box right-title"}>
                <span className={0===i%2 ? "timeline-title" : "timeline-description"}>
                {0===i%2 ? project.shortTitle : project.description}
                </span>
              </div>
        </div>
      ))}
    </div>
  );
};
  
export default Timeline;  