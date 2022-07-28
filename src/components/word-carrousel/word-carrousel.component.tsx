import { useState } from 'react';
import './word-carrousel.styles.css'

const WordCarrousel = (): JSX.Element => {

  interface IWords{
    [key: string]: string
  }// (word) : (css class)
  const defaultWords1: IWords = {
    "C#":"word",
    "NodeJS":"word",
    "Python":"word",
    "HTML":"word",
    "Solidity":"word",
    "C++":"word",
    "Bootstrap":"word",
    "CSS":"word",
    "Git":"word",
    "Blue Prism":"word",
    "JWT":"word",
    "React":"word",
    "Trading view":"word",
    "MySQL":"word",
    "Axios":"word",
    "WPF":"word",
  }
  const default1Keys: string[] = Object.keys(defaultWords1);
  const default1Length: number = default1Keys.length;

  const defaultWords2: IWords = {
    "Mustache JS":"word",
    "Bash":"word",
    "Socket.io":"word",
    "PHP":"word",
    "Angular":"word",
    "NMap":"word",
    "Styled Components":"word",
    "ASM":"word",
    "Docker":"word",
    "jQuery":"word",
    "Elastic":"word",
    "Semantic UI":"word",
    "Figma":"word",
    "MongoDB":"word",
    "Redux":"word",
    "Express.js":"word",
  }//firebase
  const default2Keys: string[] = Object.keys(defaultWords2);
  const default2Length: number = default2Keys.length;
  
  const [query, setQuery] = useState<string>('');
  const [words1, setWords1] = useState<IWords>(defaultWords1);
  const [words2, setWords2] = useState<IWords>(defaultWords2);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let values: string[] = event.target.value.trim().toUpperCase().split(",");
    let Tword1: IWords = {...defaultWords1};
    let Tword2: IWords = {...defaultWords2};
    let find: boolean = false;
    values = values.filter(value => value.trim() !== "");    
    if(values.length){
      default1Keys.map( word => {
        Tword1[word] = "word not-found"
        values.some((value)=>( word.toUpperCase().includes(value.trim())))  && ( Tword1[word] = "word found blue") && (find = true);
        return null;
      })
      default2Keys.map( word => {
        Tword2[word] = "word not-found"
        values.some((value)=>( word.toUpperCase().includes(value.trim()))) && ( Tword2[word] = "word found blue") && (find = true);
        return null;
      })
    }
    if(!find){
      Tword1= {...defaultWords1};
      Tword2= {...defaultWords2};
    }
    setQuery(event.target.value);
    setWords1(Tword1);
    setWords2(Tword2);
  };

  /* With this, any word is going to be duplicated in screen*/
  const line1 = [...default1Keys, ...default1Keys];//duplicate the array
  const line2 = [...default2Keys, ...default2Keys];//duplicate the array
  const line3 = [
    ...default1Keys.slice(default1Length/2),
    ...default1Keys.slice(0,default1Length/2),
    ...default1Keys.slice(default1Length/2),
    ...default1Keys.slice(0,default1Length/2),
  ];//half reverse and duplicate
  const line4 = [
    ...default2Keys.slice(default2Length/2),
    ...default2Keys.slice(0,default2Length/2),
    ...default2Keys.slice(default2Length/2),
    ...default2Keys.slice(0,default2Length/2),
  ];//half reverse and duplicate
  

  return (
    <>
    <div className={ 'searchbox' }>
        <input
          value={query}
          onChange={inputHandler}
          placeholder={ "C#, NodeJS, React..." }
          className={ "black" }
        />
      </div>
    <div className={ 'carroussel' }>
          <div className={ 'line left' }>
          {line1.map((word,i) => <span className={ words1[word] } key={ words1[word] + i }>{word}</span>)}
          </div>
          <div className={ 'line right' }>
          {line2.map((word,i) => <span className={ words2[word] } key={ words2[word] + i }>{word}</span>)}
          </div>
          <div className={ 'line left' }>
          {line3.map((word,i) => <span className={ words1[word] } key={ words1[word] + i }>{word}</span>)}
          </div>
          <div className={ 'line right' }>
          {line4.map((word,i) => <span className={ words2[word] } key={ words2[word] + i }>{word}</span>)}
          </div>
      </div>
      </>
  );
};
  
export default WordCarrousel;  