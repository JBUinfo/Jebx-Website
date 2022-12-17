import { useState } from "react";
import "./word-carrousel.styles.css";
import { tech } from "../../pages/tech/types"

interface IWords {
  [key: string]: string;
} // (word) : (css class)

const WordCarrousel = (): JSX.Element => {
  const languages1 = tech.slice(0,tech.length/2).map(e=>e.name)
  const languages2 = tech.slice(tech.length/2).map(e=>e.name)
  
  const defaultWords1: IWords = { };
  languages1.map((l)=>defaultWords1[l] = "word")
  const default1Length: number = languages1.length;

  const defaultWords2: IWords = {};
  languages2.map((l)=>defaultWords2[l] = "word")
  const default2Length: number = languages2.length;

  const [query, setQuery] = useState<string>("");
  const [words1, setWords1] = useState<IWords>(defaultWords1);
  const [words2, setWords2] = useState<IWords>(defaultWords2);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let values: string[] = event.target.value.trim().toUpperCase().split(",");
    let Tword1: IWords = { ...defaultWords1 };
    let Tword2: IWords = { ...defaultWords2 };
    let find: boolean = false;
    values = values.filter((value) => value.trim() !== "");
    if (values.length) {
      languages1.map((word) => {
        Tword1[word] = "word not-found";
        values.some((value) => word.toUpperCase().includes(value.trim())) &&
          (Tword1[word] = "word found blue") &&
          (find = true);
        return null;
      });
      languages2.map((word) => {
        Tword2[word] = "word not-found";
        values.some((value) => word.toUpperCase().includes(value.trim())) &&
          (Tword2[word] = "word found blue") &&
          (find = true);
        return null;
      });
    }
    if (!find) {
      Tword1 = { ...defaultWords1 };
      Tword2 = { ...defaultWords2 };
    }
    setQuery(event.target.value);
    setWords1(Tword1);
    setWords2(Tword2);
  };

  /* With this, any word is going to be duplicated in screen*/
  const line1 = [...languages1, ...languages1]; //duplicate the array
  const line2 = [...languages2, ...languages2]; //duplicate the array
  const line3 = [
    ...languages1.slice(default1Length / 2),
    ...languages1.slice(0, default1Length / 2),
    ...languages1.slice(default1Length / 2),
    ...languages1.slice(0, default1Length / 2),
  ]; //half reverse and duplicate
  const line4 = [
    ...languages2.slice(default2Length / 2),
    ...languages2.slice(0, default2Length / 2),
    ...languages2.slice(default2Length / 2),
    ...languages2.slice(0, default2Length / 2),
  ]; //half reverse and duplicate

  return (
    <>
      <div className={"searchbox"}>
        <input
          value={query}
          onChange={inputHandler}
          placeholder={"C#, NodeJS, React..."}
          className={"black"}
        />
      </div>
      <div className={"carroussel"}>
        <div className={"line left"}>
          {line1.map((word, i) => (
            <span className={words1[word]} key={words1[word] + i}>
              {word}
            </span>
          ))}
        </div>
        <div className={"line right"}>
          {line2.map((word, i) => (
            <span className={words2[word]} key={words2[word] + i}>
              {word}
            </span>
          ))}
        </div>
        <div className={"line left"}>
          {line3.map((word, i) => (
            <span className={words1[word]} key={words1[word] + i}>
              {word}
            </span>
          ))}
        </div>
        <div className={"line right"}>
          {line4.map((word, i) => (
            <span className={words2[word]} key={words2[word] + i}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default WordCarrousel;
