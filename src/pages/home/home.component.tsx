import './home.styles.css'
import text_website from '../../assets/text-website.json';
import TypeIt from "typeit-react";
const FirstContainer: React.ReactNode = (
    <div className={ 'first-container' }>
      <div className={ 'intro-container' }>
        <div className={ 'intro-top' }>

        </div>
        <div className={ 'intro-main' }>
          <div className={ 'text' }>
          <TypeIt
            getBeforeInit={(instance) => {
              instance.options({ speed: 50, lifeLike: false }).type(text_website.INTRO_MAIN.en[0])
              .pause(750).delete(4).type(",").pause(300).break()
              .type(text_website.INTRO_MAIN.en[1])
              .pause(300).break()
              .type("<span class='green'>" + text_website.INTRO_MAIN.en[2] + "</span>")
              .flush();
              return instance;
            }}
          />
          </div>
        </div>
      </div>
    </div>
  );
;

const HomePage = (): JSX.Element => {
  return (
    <div className={ 'home-container' }>
      {FirstContainer}
    </div>
  );
};
  
export default HomePage;  