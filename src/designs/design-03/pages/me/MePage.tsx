import { useContext } from "react";
import { LanguageContext } from "../../context/language-context";
import text_website from "../../../../assets/text-website.json";
import profPic from "../../../../assets/profile/cipher citizen 869.png";
import CV_ESP from "../../../../assets/cv/CV_Javier_Borbolla.pdf";
import CV_ENG from "../../../../assets/cv/CV_Javier_Borbolla_English.pdf";

const MePage = () => {
  const { language } = useContext(LanguageContext);

  const readings = [
    {
      title: text_website.ME_RECOMMENDED_READINGS_TITLE[language!],
      description: text_website.ME_RECOMMENDED_READINGS_DESCRIPTION[language!],
      content: text_website.ME_RECOMMENDED_READINGS,
    },
    {
      title: text_website.ME_OFF_TOPIC_READINGS_TITLE[language!],
      description: text_website.ME_OFF_TOPIC_READINGS_DESCRIPTION[language!],
      content: text_website.ME_OFF_TOPIC_READINGS,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative" style={{ background: "rgba(13, 2, 33, 0.6)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="vhs-deco mb-4">{"▶ PROFILE LOADED"}</div>
        </div>

        {/* Profile Card */}
        <div className="sw-card p-6 md:p-10 rounded-xl mb-16" style={{ borderColor: "rgba(255, 41, 117, 0.3)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="sw-profile-image">
                <img
                  src={profPic}
                  alt="Javier Borbolla"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-3 vhs-deco">
                {"◆ SUBJECT: JEBX ◆"}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <h1
                className="chrome-text text-3xl md:text-4xl mb-2"
              >
                Javier Borbolla Ureña
              </h1>
              <p className="text-base mb-6 sw-neon-cyan" style={{ opacity: 0.7 }}>
                @Jebx
              </p>

              {/* Quote */}
              <div className="sw-card p-5 rounded-lg mb-6" style={{ borderColor: "rgba(252, 238, 9, 0.25)" }}>
                <p className="text-sm italic" style={{ color: "var(--sw-text)" }}>
                  <span className="sw-neon-yellow">"</span>{" "}
                  {text_website.ME_SHORT_DESCRIPTION[language!]}{" "}
                  <span className="sw-neon-yellow">"</span>
                </p>
              </div>

              {/* About Me */}
              <div className="mb-5">
                <h3 className="text-sm font-bold mb-3 uppercase tracking-wider sw-neon-pink">
                  {text_website.ME_ABOUT_ME[language!][0]}
                </h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "var(--sw-text-mid)" }}>
                      <span style={{ color: "var(--sw-pink)" }}>▸</span>
                      {text_website.ME_ABOUT_ME[language!][idx]}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Favorite Songs */}
              <div className="mb-6">
                <h3 className="text-sm font-bold mb-3 uppercase tracking-wider sw-neon-cyan">
                  {text_website.ME_FAVORITE_SONGS[language!][0]}
                </h3>
                <ul className="space-y-1 text-sm" style={{ color: "var(--sw-text-dim)" }}>
                  <li><span className="sw-neon-pink" style={{ opacity: 0.7 }}>♫</span> As it was - Harry Styles</li>
                  <li><span className="sw-neon-pink" style={{ opacity: 0.7 }}>♫</span> Save your tears - The Weeknd</li>
                  <li><span className="sw-neon-pink" style={{ opacity: 0.7 }}>♫</span> {text_website.ME_FAVORITE_SONGS[language!][1]}</li>
                </ul>
              </div>

              <a
                href={"es" === language! ? CV_ESP : CV_ENG}
                download="CV Javier Borbolla"
                className="sw-btn w-fit"
              >
                {text_website.DOWNLOAD_CV[language!]}
              </a>
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div className="sw-card p-8 rounded-xl mb-16">
          <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-mid)" }}>
            {text_website.ME_LONG_DESC[language!]}
          </p>
        </div>

        {/* Readings */}
        {readings.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="sw-section-header text-xl md:text-2xl mb-3 sw-neon-pink">
              {section.title}
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--sw-text-dim)" }}>
              {section.description}
            </p>

            <div className="space-y-4">
              {section.content.map((item: any, i: number) => (
                <div key={i} className="sw-card p-5 rounded-lg">
                  {item.url ? (
                    <a href={item.url[language!]} target="_blank" rel="noopener noreferrer" className="block group">
                      <h3 className="text-sm font-semibold mb-2 transition-colors" style={{ color: "var(--sw-cyan)" }}>
                        <span style={{ color: "var(--sw-pink)" }}>▸ </span>
                        {item[language!][0]}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--sw-text-dim)" }}>
                        {item[language!][1]}
                      </p>
                    </a>
                  ) : (
                    <>
                      <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--sw-cyan)" }}>
                        <span style={{ color: "var(--sw-pink)" }}>▸ </span>
                        {item[language!][0]}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--sw-text-dim)" }}>
                        {item[language!][1]}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center vhs-deco py-8">
          {"◆ END OF TRANSMISSION ◆"}
        </div>
      </div>
    </div>
  );
};

export default MePage;
