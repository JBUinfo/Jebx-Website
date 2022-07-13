import { useState } from 'react';
import TypeIt from "typeit-react";

import './home.styles.css'
import text_website from '../../assets/text-website.json';
const FirstContainer = (): JSX.Element => {
    return (<div className={ 'first-container' }>
      <div className={ 'intro' }>
        <div className={ 'top' }>

        </div>
        <div className={ 'main' }>
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
    </div>)
};

const SecondContainer = (): JSX.Element => {
  const line1: string[] = ["C#", "NodeJS", "Python", "HTML", "CSS", "C++", "ASM", "C#", "NodeJS", "Python", "HTML", "CSS", "C++", "ASM"] ;
  const line2: string[] = ["Elastic", "Bash", "Socket.io", "PHP", "Java", "Angular", "Docker", "Elastic", "Bash", "Socket.io", "PHP", "Java", "Angular", "Docker"] ;

  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    
    setQuery(event.target.value);
  };


  return(<div className={ 'second-container' }>
    <div className={ 'explanation' }>
      <div className={ 'title' }>
        Dedicated to <span className={ 'green' }>EVERYTHING</span>
      </div>
      <div className={ 'description' }>
      I have more than 6 years at IT world and i have been always <br/>learning news technologies and languages.
      </div>
    </div>

    <div className={ 'center' }>
      <div className={ 'searchbox' }>
        <input
          value={query}
          onChange={inputHandler}
          placeholder="C#, NodeJS, React..."
          className={ "black" }
        />
      </div>
      <div className={ 'carroussel' }>
          <div className={ 'line left' }>
            {line1.map(word => <span className={ "word" } key={ word }>{word}</span>)}
            {line1.map(word => <span className={ "word" } key={ word }>{word}</span>)}
          </div>
          <div className={ 'line right' }>
            {line2.map(word => <span className={ "word" } key={ word }>{word}</span>)}
            {line2.map(word => <span className={ "word" } key={ word }>{word}</span>)}
          </div>
          <div className={ 'line left' }>
            {line1.reverse().map(word => <span className={ "word" } key={ word }>{word}</span>)}
            {line1.reverse().map(word => <span className={ "word" } key={ word }>{word}</span>)}
          </div>
          <div className={ 'line right' }>
            {line2.reverse().map(word => <span className={ "word" } key={ word }>{word}</span>)}
            {line2.reverse().map(word => <span className={ "word" } key={ word }>{word}</span>)}
          </div>
      </div>
    </div>
  </div>)
};

const HomePage = (): JSX.Element => {
  return (
    <div className={ 'home-container' }>
      <>
        {FirstContainer()}
        {SecondContainer()}
      </>
    </div>
  );
};
  
export default HomePage;  