import './header.styles.css';
import {LanguageContext} from '../../language-context';

import text_website from "../../assets/text-website.json";
import { Link } from "react-router-dom";
const Header = (): JSX.Element => {
  return (
    <div className={ 'header' }>
      <div className={"left"}>
        <Link to="/">Jebx |</Link>
        <Link to="/tech">{text_website.NAVBAR.en[0]}</Link>
        <Link to="/work">{text_website.NAVBAR.en[1]}</Link>
        <Link to="/me">{text_website.NAVBAR.en[2]}</Link>
      </div>
      <div className={"right"}>
        <a href="https://github.com/JBUinfo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
        </a>
        <a href="https://twitter.com/0xBorbo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path></svg>
        </a>
        <a href="mailto:javierbuinfo@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"></path></svg>
        </a>
        <LanguageContext.Consumer>
          {
          ({language, toggleLanguage}) => (
            "es" === language ? 
            (
              <svg onClick={toggleLanguage} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 72 72"><path fill="#f1b31c" d="M5 17h62v38H5z"></path><path fill="#d22f27" d="M23 33v7a2.006 2.006 0 0 1-2 2h-4a2.006 2.006 0 0 1-2-2v-7M5 17h62v9H5zm0 29h62v9H5z"></path><path fill="#f1b31c" d="M19 33h4v4h-4z"></path><circle cx="19" cy="37" r="1.5" fill="#6a462f"></circle><path fill="none" stroke="#6a462f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M27 33v9m-16-9v9m4-12a8.568 8.568 0 0 1 4-1m4 1a8.568 8.568 0 0 0-4-1m-4 4h8m0 0v7a2.006 2.006 0 0 1-2 2h-4a2.006 2.006 0 0 1-2-2v-7m-5 9h2m14 0h2"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h62v38H5z"></path></svg>
            ):(
              <svg onClick={toggleLanguage} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 24"><mask id="IconifyId1824ae1bb8fd117ee180" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" d="M0 0h32v24H0z"></path></mask><g fill="none" mask="url(#IconifyId1824ae1bb8fd117ee180)"><path fill="#F7FCFF" fillRule="evenodd" d="M0 0h32v24H0V0z" clipRule="evenodd"></path><path fill="#E31D1C" fillRule="evenodd" d="M0 14.667v2h32v-2H0zm0 3.666v2h32v-2H0zm0-11v2h32v-2H0zM0 22v2h32v-2H0zm0-11v2h32v-2H0zM0 0v2h32V0H0zm0 3.667v2h32v-2H0z" clipRule="evenodd"></path><path fill="#2E42A5" d="M0 0h20v13H0z"></path><path fill="#F7FCFF" fillRule="evenodd" d="m1.722 2.939l-.726.509l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm4 0l-.726.509l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm3.274.509l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574l-.245.906zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zM.996 7.449l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74H.596l.645.574l-.245.906zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574l-.245.906zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zM.996 11.449l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74H.596l.645.574l-.245.905zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.905l-.702-.508zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574l-.245.905zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.905l-.702-.508zm3.274-7.49l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574l-.245.906zm.726 3.49l-.726.51l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574l-.245.905zM3.722 4.938l-.726.51l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574l-.245.906zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm-8.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574l-.245.906zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574l-.245.906zm4.726-4.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906l-.702-.51zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574l-.245.906z" clipRule="evenodd"></path></g></svg>
            )
          )}
        </LanguageContext.Consumer>
        </div>
    </div>
  );
};
  
export default Header;  