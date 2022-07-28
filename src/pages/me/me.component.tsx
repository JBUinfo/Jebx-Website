import "./me.styles.css";
import text_website from "../../assets/text-website.json";

const Container = (): JSX.Element => {
  return (
    <div className={"section-container"}>
      <div className={"center"}>
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
