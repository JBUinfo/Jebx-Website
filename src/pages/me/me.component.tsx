import "./me.styles.css";
import text_website from "../../assets/text-website.json";
import profPic from "./imgs/wall1.jpg";

const Container = (): JSX.Element => {
  return (
    <div className={"section-container"}>
      <div className={"center"}>
        <div className="myself-container">
          <div className={"profPic-container"}>
            <img src={profPic} />
          </div>
          <div className={"my-desc"}>
            <div className={"center"}>
              <span>Javier Borbolla Ureña</span>
              <div className={"short-desc"}>
                <span>
                {text_website.ME_SHORT_DESCRIPTION.en}
                </span>
              </div>    
              <div className={"about-me"}>
                <h2>{text_website.ME_ABOUT_ME.en[0]}</h2>
                <ul>
                  <li>
                    {text_website.ME_ABOUT_ME.en[1]}
                  </li>
                  <li>
                    {text_website.ME_ABOUT_ME.en[2]}
                  </li>
                  <li>
                    {text_website.ME_ABOUT_ME.en[3]}
                  </li>
                </ul>
              </div> 
              <div className={"my-music"}>
                <h2>{text_website.ME_ABOUT_ME.en[0]}</h2>
                <ul>
                  <li>
                    As it was - Harry Styles
                  </li>
                  <li>
                    Save your tears - The Weeknd
                  </li>
                  <li>
                    {text_website.ME_ABOUT_ME.en[1]}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div className="myself-container">
          <div className={"long-desc"}>
            <span>
              {text_website.ME_LONG_DESC.en}
            </span>
          </div>
        </div>
        </div>
    </div>
  );
};

const MePage = (): JSX.Element => {
  return (
    <div className={"me-container"}>
        {Container()}
    </div>
  );
};

export default MePage;
