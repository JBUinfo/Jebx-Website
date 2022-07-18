import TypeIt from "typeit-react";
import { useState } from 'react';

import "./home.styles.css";
import img1 from "./imgs/wall1.jpg";
import text_website from "../../assets/text-website.json";
import WordCarrousel from "../../components/word-carrousel/word-carrousel.component";

const FirstContainer = (): JSX.Element => {
  const leet = new Array(20).fill("L33T");
  return (
    <div className={"section-container"}>
      <div className={"img-filter"}></div>
      <div className={"img-container"}>
        <img src={img1} className={"img-example"} alt="" />
      </div>
      <div className={"intro"}>
        <div className={"top"}>
          <div className={"leet-carrousel"}>
            {leet.map(()=>(<span>L33T</span>))}
          </div>
        </div>
        <div className={"main"}>
          <div className={"text"}>
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .options({ speed: 50, lifeLike: false })
                  .type(text_website.INTRO_MAIN.en[0])
                  .pause(750)
                  .delete(4)
                  .type(",")
                  .pause(300)
                  .break()
                  .type(text_website.INTRO_MAIN.en[1])
                  .pause(300)
                  .break()
                  .type(
                    "<span class='green'>" +
                      text_website.INTRO_MAIN.en[2] +
                      "</span>"
                  )
                  .flush();
                return instance;
              }}
            />
            <br />
            <br />
            <div className={"intro-description description"}>asdasd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondContainer = (): JSX.Element => {
  return (
    <div className={"section-container"}>
      <div className={"explanation"}>
        <div className={"title"}>
          Dedicated to <span className={"blue"}>EVERYTHING</span>
        </div>
        <div className={"description"}>
          I have more than 6 years at IT world and i have been always <br />
          learning news technologies and languages.
        </div>
      </div>

      <div className={"center"}>
        <WordCarrousel />
      </div>
    </div>
  );
};

const ThirdContainer = (): JSX.Element => {
  interface IProject {
    shortTitle: string,
    title: string,
    description: string,
    date: string
  }
  const projects: IProject[] = [
    {
      shortTitle: "Twitch",
      title: "Strools - The Twitch streaming tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
    {
      shortTitle: "Twitch",
      title: "Strools - A little Twitch tool",
      description: "something",
      date: "10-10-2020"
    },
  ]
  const [information, setInformation] = useState<IProject>();

  return (
    <div className={"section-container"}>
      <div className={"left-box"}>
        <div className={"title"}>

          {information ? (
            <span className={"orange"}>
              {information.title}
            </span>
            ) : (
            <>
              Projects, projects and...
              <span className={"orange"}> more projects</span>
            </>
          )}
          
        </div>
        <div className={"description"}>
        {information ? information.description : (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum repellendus commodi dolores eum tempora doloremque. Officiis minima doloribus ipsam reiciendis ducimus vel ad nihil unde enim? Laudantium, eum. Ut!
            </>
          )}
        </div>
      </div>
      <div className={"right-box"}>
        <div className={"center"}>
          <div style={{width: 80*projects.length+"px"}} className="timeline">
            <div className="timeline-progress"></div>
            <div className="timeline-items">
              {projects.map((project,i)=>(
                <div className="timeline-item" onClick={(e) => setInformation(project)}>
                    <div className={"timeline-content "+( 0===i%2 ? "timeline-up" : "timeline-down" )+" description "+ (i===projects.length-1 && "timeline-last-item")}>{project.shortTitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = (): JSX.Element => {
  return (
    <div className={"home-container"}>
      <>
        {FirstContainer()}
        {SecondContainer()}
        {ThirdContainer()}
      </>
    </div>
  );
};

export default HomePage;
