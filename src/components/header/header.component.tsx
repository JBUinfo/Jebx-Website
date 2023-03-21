import { LanguageContext } from "../../context/language-context";
import idiom_flag from "./imgs/idiom_flag.png";
import profile from "./imgs/profile.png";

import text_website from "../../assets/text-website.json";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { HeaderColorContext } from "../../context/header-color-context";

export enum HeaderColor {
  CUSTOM_BLUE,
  ORANGE,
}

const Header = (): JSX.Element => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { headerLineColor } = useContext(HeaderColorContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const left = [
    {
      label: "Jebx",
      url: "/",
    },
    {
      label: text_website.NAVBAR[language!][0],
      url: "/tech",
    },
    {
      label: text_website.NAVBAR[language!][1],
      url: "/work",
    },
    {
      label: text_website.NAVBAR[language!][2],
      url: "/me",
    },
  ];

  const right = [
    {
      svg: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z",
      url: "https://github.com/JBUinfo",
    },
    {
      svg: "M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z",
      url: "https://twitter.com/0xjebx",
    },
    {
      svg: "M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z",
      url: "mailto:javierbuinfo@gmail.com",
    },
    {
      //simpleicons.org
      svg: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
      url: "https://discord.gg/ZwG39zT",
    },
  ];

  const borderColor = (e: HeaderColor) => {
    switch (e) {
      case HeaderColor.CUSTOM_BLUE:
        return "border-b-customBlue";
      case HeaderColor.ORANGE:
        return "border-b-orange";
    }
  };

  return (
    <div
      className={`shadow-[1px_7px_27px_0px_black] w-full flex pl-4 bg-black fixed h-12 z-10 border-b items-center ${borderColor(
        headerLineColor!
      )}`}
    >
      <div className="flex align-left items-center w-1/2">
        <img alt="NFT profile" src={profile} className="h-10 w-8" />
        <div className="h-8 flex float-left items-center">
          {left.map((e, i) => (
            <Link
              key={i}
              className="flex border-r-2 border-white hover:scale-105 "
              to={e.url}
            >
              <span className="max-sm:text-md max-sm:px-1.5 max-sm:pb-0 hover:underline pt-0 pb-1.5 px-2.5 text-ellipsis leading-3 whitespace-nowrap text-xl text-white font-['pixl']">
                {e.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="fixed top-0 right-0 mr-3 mt-3 w-auto md:hidden"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <img
          alt="navbar button"
          className={" h-[26px]"}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nO3WyQnAMAwFUZcXp/+zDMF9TDrQJcYLmdfBRwimFEmSBgFuoLG/BtRsyMM5+i+GVCDYXwDX51+SJEmaCDN+iZ5dxIyfLMx4SZJ0Gsz4JXp2ETN+sjDjJUlloBfbFyzbu4GNjwAAAABJRU5ErkJggg=="
        />
      </div>
      <div
        className={`max-sm:flex max-sm:right-0 max-sm:fixed max-sm:justify-around max-sm:flex-col max-sm:w-auto max-sm:top-0 max-sm:mt-[50px] max-sm:h-[200px] max-sm:pl-2 bg-black items-center text-center flex justify-end w-1/2 pr-2 max-sm ${
          showNavbar ? "animate-navbar-in" : "animate-navbar-out"
        }`}
      >
        {right.map((e, i) => (
          <a key={i} className="sm:mr-2 hover:scale-110" href={e.url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="max-sm:w-6 max-sm:h-6 w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={e.svg}></path>
            </svg>
          </a>
        ))}

        <img
          className="max-sm:mb-1 sm:mr-1 mr-0 mt-1 mb-1 hover:scale-110"
          alt={"Spanish and english flag. Click to change idiom."}
          src={idiom_flag}
          onClick={toggleLanguage}
        />
      </div>
    </div>
  );
};

export default Header;
