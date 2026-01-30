import { useContext } from "react";
import { LanguageContext } from "../../context/language-context";
import text_website from "../../../../assets/text-website.json";

const jobs = [
  { year: 2017, title: text_website.WORK_OFFICIAL_WORKS["wifiair"], desc: text_website.WORK_DESCIPTION_WORKS["wifiair"] },
  { year: 2019, title: text_website.WORK_OFFICIAL_WORKS["accenture"], desc: text_website.WORK_DESCIPTION_WORKS["accenture"] },
  { year: 2020, title: text_website.WORK_OFFICIAL_WORKS["mbvr"], desc: text_website.WORK_DESCIPTION_WORKS["mbvr"] },
  { year: 2022, title: text_website.WORK_OFFICIAL_WORKS["nttdata"], desc: text_website.WORK_DESCIPTION_WORKS["nttdata"] },
  { year: 2023, title: text_website.WORK_OFFICIAL_WORKS["copernicus"], desc: text_website.WORK_DESCIPTION_WORKS["copernicus"] },
  { year: 2023, title: text_website.WORK_OFFICIAL_WORKS["gitkraken"], desc: text_website.WORK_DESCIPTION_WORKS["gitkraken"] },
];

const studies = [
  { year: 2015, title: text_website.STUDIES["smr"] },
  { year: 2017, title: text_website.STUDIES["daw"] },
  { year: 2020, title: text_website.STUDIES["master"] },
  { year: 2021, title: text_website.STUDIES["malware"] },
  { year: 2021, title: text_website.STUDIES["cuda"] },
  { year: 2022, title: text_website.STUDIES["udemy"] },
];

const WorkPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 grid-bg relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="hex-deco mb-4">{"// 0x574F524B"}</div>
          <h1 className="cyber-section-header text-3xl md:text-4xl">
            {text_website.WORK_FIRST_TITLE[language!]}
          </h1>
        </div>

        {/* Official Works */}
        <div className="mb-24">
          <h2 className="category-label text-xl md:text-2xl text-center mb-12 neon-green">
            {text_website.WORK_OFFICIAL_WORKS["officialWorks"][language!]}
          </h2>

          <div className="cyber-timeline pl-10 md:pl-12 relative">
            <div className="space-y-8">
              {jobs.map((job, i) => (
                <div key={i} className="relative fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Timeline node */}
                  <div className="absolute" style={{ left: "-2.75rem", top: "1rem" }}>
                    <div className="timeline-node" />
                  </div>

                  {/* Card */}
                  <div className="cyber-card p-6 corner-deco">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <h3 className="text-base font-semibold" style={{ color: "var(--text-bright)" }}>
                        {job.title[language!]}
                      </h3>
                      <span className="year-badge w-fit">{job.year}</span>
                    </div>

                    {/* Terminal-style description */}
                    <div className="flex items-start gap-2">
                      <span style={{ color: "var(--neon-green)", fontSize: "0.8rem" }}>&gt;</span>
                      <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                        {job.desc[language!]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Studies */}
        <div>
          <h2 className="category-label text-xl md:text-2xl text-center mb-12 neon-cyan">
            {text_website.STUDIES["officialStudies"][language!]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studies.map((study, i) => (
              <div
                key={i}
                className="cyber-card p-5 fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <span className="year-badge flex-shrink-0">{study.year}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium" style={{ color: "var(--text-bright)" }}>
                      {study.title[language!]}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer decoration */}
        <div className="text-center hex-deco py-12">
          {"// "}{jobs.length}{" JOBS + "}{studies.length}{" CERTIFICATIONS — CAREER.LOG COMPLETE"}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
