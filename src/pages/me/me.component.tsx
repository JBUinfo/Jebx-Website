import "./me.styles.css";
import text_website from "../../assets/text-website.json";
import profPic from "./imgs/cipher citizen 869.png";
import { LanguageContext } from "../../language-context";

const Container = (): JSX.Element => {
  return (
    <div className={"section-container"}>
      <div className={"center"}>
        <LanguageContext.Consumer>
          {({ language }) => (
            <>
              <div className="myself-container">
                <div className={"profPic-container"} style={{backgroundImage:`url("${profPic}")`}}>
                </div>
                <div className={"my-desc"}>
                  <div className={"center"}>
                    <span>Javier Borbolla Ureña</span>
                    <div className={"short-desc"}>
                      <span>
                        {text_website.ME_SHORT_DESCRIPTION[language!]}
                      </span>
                    </div>
                    <div className={"about-me"}>
                      <span>{text_website.ME_ABOUT_ME[language!][0]}</span>
                      <ul>
                        <li>{text_website.ME_ABOUT_ME[language!][1]}</li>
                        <li>{text_website.ME_ABOUT_ME[language!][2]}</li>
                        <li>{text_website.ME_ABOUT_ME[language!][3]}</li>
                      </ul>
                    </div>
                    <div className={"my-music"}>
                      <span>
                        {text_website.ME_FAVORITE_SONGS[language!][0]}
                      </span>
                      <ul>
                        <li>- As it was - Harry Styles</li>
                        <li>- Save your tears - The Weeknd</li>
                        <li>{text_website.ME_FAVORITE_SONGS[language!][1]}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="myself-container">
                <div className={"long-desc"}>
                  <span>{text_website.ME_LONG_DESC[language!]}</span>
                </div>
              </div>
            </>
          )}
        </LanguageContext.Consumer>
      </div>
    </div>
  );
};

const MePage = (): JSX.Element => {
  return <div className={"me-container"}>{Container()}</div>;
};

export default MePage;
