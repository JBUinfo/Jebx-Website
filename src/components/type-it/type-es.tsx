import TypeIt from "typeit-react";
import text_website from "../../assets/text-website.json";

const TypES = (): JSX.Element => {
  return (
    <TypeIt
      getBeforeInit={(instance) => {
        instance
          .options({ speed: 50, lifeLike: false })
          .type(text_website.HOME_FIRST_TITLE["es"][0])
          .pause(750)
          .delete(4)
          .type(",")
          .pause(300)
          .break()
          .type(text_website.HOME_FIRST_TITLE["es"][1])
          .pause(300)
          .break()
          .type(
            "<span class='text-green-xl'>" +
              text_website.HOME_FIRST_TITLE["es"][2] +
              "</span>"
          )
          .flush();
        return instance;
      }}
    />
  );
};

export default TypES;
