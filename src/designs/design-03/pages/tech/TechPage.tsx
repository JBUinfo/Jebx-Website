import { useContext } from "react";
import { LanguageContext } from "../../context/language-context";
import text_website from "../../../../assets/text-website.json";
import { tech } from "./types";

const projects = [
  {
    category: "FRONT END",
    items: [
      { year: 2018, title: text_website.TECH_PROJECT_TITLES["digimon"], tech: "HTML, CSS" },
      { year: 2019, title: text_website.TECH_PROJECT_TITLES["socialNetwork"], tech: "HTML, CSS, Bootstrap" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["wordpress"], tech: "HTML, CSS, Javascript" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["rat"], tech: "Windows Forms, WPF" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["strools"], tech: "Windows Forms, WPF" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["covid"], tech: "React, Redux, CSS, Styled Components" },
      { year: 2021, title: text_website.TECH_PROJECT_TITLES["kreborManagement"], tech: "Windows Forms, WPF" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["radio"], tech: "React, CSS, Javascript" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["wildprint"], tech: "React, Redux, HTML, CSS" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["thisWebsite"], tech: "React, TypeScript, Tailwind" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["pokemon2.0"], tech: "React, TypeScript, Vite, Vitest" },
      { year: 2023, title: text_website.TECH_PROJECT_TITLES["tradingDashboard"], tech: "React, Tailwind" },
      { year: 2023, title: text_website.TECH_PROJECT_TITLES["kreborWebsite"], tech: "React, HTML, CSS" },
    ],
  },
  {
    category: "BACK END",
    items: [
      { year: 2018, title: text_website.TECH_PROJECT_TITLES["digimon"], tech: "PHP, MySQL" },
      { year: 2019, title: text_website.TECH_PROJECT_TITLES["socialNetwork"], tech: "Socket.io, NodeJS, MongoDB, Express" },
      { year: 2019, title: text_website.TECH_PROJECT_TITLES["movistar"], tech: "BluePrism" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["rat"], tech: "C#, C++" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["strools"], tech: "C#" },
      { year: 2021, title: text_website.TECH_PROJECT_TITLES["kreborManagement"], tech: "C#, SQLite" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["thisWebsite"], tech: "Firebase" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["smartContracts"], tech: "Ganache, Solidity" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["lorive"], tech: "Golang" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["pokemon2.0"], tech: "NestJS, SQLite, GraphQL" },
      { year: 2023, title: text_website.TECH_PROJECT_TITLES["tradingDashboard"], tech: "NodeJS, MongoDB, Express" },
    ],
  },
  {
    category: text_website.SINGLE_WORDS["others"],
    items: [
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["fileSortener"], tech: "Bash, C++, C#, NodeJS, MongoDB" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["udemy"], tech: "Python" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["meliaAnalysis"], tech: "NMap, Bash" },
      { year: 2020, title: text_website.TECH_PROJECT_TITLES["instagram"], tech: "C#, Python" },
      { year: 2021, title: text_website.TECH_PROJECT_TITLES["challengeWebsites"], tech: "Bash, C++, NodeJS, Python" },
      { year: 2021, title: text_website.TECH_PROJECT_TITLES["cuda"], tech: "CUDA, C++, Python" },
      { year: 2021, title: text_website.TECH_PROJECT_TITLES["malwareAnalysis"], tech: "Forensic Software" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["binance"], tech: "Python" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["tradingBot"], tech: "NodeJS, Python" },
      { year: 2022, title: text_website.TECH_PROJECT_TITLES["bookmarks"], tech: "NodeJS" },
      { year: 2023, title: text_website.TECH_PROJECT_TITLES["botTrading"], tech: "Python, Keras" },
    ],
  },
];

const TechPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative" style={{ background: "rgba(13, 2, 33, 0.6)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="vhs-deco mb-4">{"◆ TECH STACK"}</div>
          <h1 className="sw-section-header text-3xl md:text-4xl sw-neon-pink">
            {text_website.TECH_FIRST_TITLE[language!]}
          </h1>
        </div>

        {/* Tech Icons Grid */}
        <div className="mb-24">
          <div
            className="max-w-5xl mx-auto grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))" }}
          >
            {tech.map((item, i) => (
              <div key={i} className="sw-tech-icon">
                <img src={item.src} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects by Category */}
        {projects.map((category, idx) => {
          const categoryTitle = typeof category.category === "string"
            ? category.category
            : (category.category as any)[language!];

          return (
            <div key={idx} className="mb-24">
              <h2 className="sw-category text-xl md:text-2xl text-center mb-10 sw-neon-cyan">
                {categoryTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {category.items.map((project, i) => (
                  <div key={i} className="sw-card p-5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5">
                        <span className="sw-year-badge">{project.year}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--sw-text)" }}>
                          {project.title[language!]}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.split(", ").map((t, tidx) => (
                            <span key={tidx} className="sw-pill">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="text-center vhs-deco py-8">
          {"◆ "}{projects.reduce((a, c) => a + c.items.length, 0)}{" PROJECTS LOADED ◆"}
        </div>
      </div>
    </div>
  );
};

export default TechPage;
