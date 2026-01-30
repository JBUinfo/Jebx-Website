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
    <div className="min-h-screen pt-24 pb-20 px-6 grid-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="hex-deco mb-4">{"// 0x50524F46494C45"}</div>
        </div>

        {/* Profile Dossier */}
        <div className="neon-border-card p-6 md:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Profile Image with scan effect */}
            <div className="lg:col-span-2">
              <div className="cyber-profile-image rounded-lg overflow-hidden">
                <div className="scan-line" />
                <img
                  src={profPic}
                  alt="Javier Borbolla"
                  className="w-full h-auto"
                  style={{ filter: "saturate(0.8) contrast(1.1)" }}
                />
              </div>
              <div className="text-center mt-3 hex-deco">
                {"// SUBJECT: JEBX // STATUS: ONLINE"}
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <h1
                className="text-3xl md:text-4xl font-bold mb-2 neon-green"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Javier Borbolla Ureña
              </h1>
              <p className="text-base mb-6 neon-cyan" style={{ opacity: 0.7 }}>
                @Jebx
              </p>

              {/* Quote */}
              <div className="cyber-card p-5 mb-6">
                <div className="flex items-start gap-3">
                  <span className="neon-green text-xl">"</span>
                  <p className="text-sm italic" style={{ color: "var(--text-bright)" }}>
                    {text_website.ME_SHORT_DESCRIPTION[language!]}
                  </p>
                  <span className="neon-green text-xl">"</span>
                </div>
              </div>

              {/* About Me */}
              <div className="mb-5">
                <h3 className="text-sm font-bold mb-3 uppercase tracking-wider neon-green">
                  {text_website.ME_ABOUT_ME[language!][0]}
                </h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-mid)" }}>
                      <span style={{ color: "var(--neon-green)" }}>&gt;</span>
                      {text_website.ME_ABOUT_ME[language!][idx]}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Favorite Songs */}
              <div className="mb-6">
                <h3 className="text-sm font-bold mb-3 uppercase tracking-wider neon-pink">
                  {text_website.ME_FAVORITE_SONGS[language!][0]}
                </h3>
                <ul className="space-y-1 text-sm" style={{ color: "var(--text-dim)" }}>
                  <li><span className="neon-pink" style={{ opacity: 0.7 }}>&#9834;</span> As it was - Harry Styles</li>
                  <li><span className="neon-pink" style={{ opacity: 0.7 }}>&#9834;</span> Save your tears - The Weeknd</li>
                  <li><span className="neon-pink" style={{ opacity: 0.7 }}>&#9834;</span> {text_website.ME_FAVORITE_SONGS[language!][1]}</li>
                </ul>
              </div>

              {/* CV Download */}
              <a
                href={"es" === language! ? CV_ESP : CV_ENG}
                download="CV Javier Borbolla"
                className="cyber-btn w-fit"
              >
                <span>&gt; {text_website.DOWNLOAD_CV[language!]}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Long Description */}
        <div className="terminal-window mb-16">
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: "#ff5f56" }} />
            <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
            <div className="terminal-dot" style={{ background: "#27c93f" }} />
            <span className="text-xs ml-2" style={{ color: "var(--text-dim)" }}>
              cat biography.txt
            </span>
          </div>
          <div className="terminal-body">
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
              {text_website.ME_LONG_DESC[language!]}
            </p>
          </div>
        </div>

        {/* Readings */}
        {readings.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2
              className="cyber-section-header text-xl md:text-2xl mb-3"
            >
              {section.title}
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--text-dim)" }}>
              {section.description}
            </p>

            <div className="space-y-4">
              {section.content.map((item: any, i: number) => (
                <div key={i} className="cyber-card p-5">
                  {item.url ? (
                    <a
                      href={item.url[language!]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <h3 className="text-sm font-semibold mb-2 reading-link" style={{ color: "var(--neon-cyan)" }}>
                        <span style={{ color: "var(--neon-green)" }}>&gt; </span>
                        {item[language!][0]}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                        {item[language!][1]}
                      </p>
                    </a>
                  ) : (
                    <>
                      <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--neon-cyan)" }}>
                        <span style={{ color: "var(--neon-green)" }}>&gt; </span>
                        {item[language!][0]}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                        {item[language!][1]}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer decoration */}
        <div className="text-center hex-deco py-8">
          {"// END OF FILE — THANKS FOR READING"}
        </div>
      </div>
    </div>
  );
};

export default MePage;
