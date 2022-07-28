import './timeline.styles.css'

const Timeline = (): JSX.Element => {
  interface IProject {
    shortTitle: string,
    title: string,
    description: string,
    date: string
  }
  const projects: IProject[] = [
    {
      shortTitle: "Pokemon (High School)",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Social Network (High School)",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Wordpress websites",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Movistar (Accenture)",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "R.A.T.",
      title: "Remote Access Tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "File sortener",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Udemy downloader",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Covid management dashboard",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Meliá's network",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Instagram bots",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Challenge websites",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Strools",
      title: "Strools - The Twitch streaming tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!", 
      date: ""
    },
    {
      shortTitle: "Krebor management",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "CUDA",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Malware analysis",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "My definitive set-up",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Binance candles",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Bot Trading",
      title: "My first crypto trading bot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Poocoin script",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Internet radio",
      title: "NodeJS Radio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "A.M.P.A.",
      title: "A.M.P.A.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Jazztel (NTT Data)",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Wildprint",
      title: "Wildprint.es",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Bookmarks to MP4",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "This website",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Smart contracts",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Trading dashboard",
      title: "From order to success",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
    {
      shortTitle: "Krebor Website",
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi molestias commodi magnam cumque ad, nemo error eius pariatur maiores nostrum ipsa nulla. Placeat aperiam ullam iste dolore, dignissimos quos!",
      date: ""
    },
  ]
  
  return (
    <div className={"scroll-box"}>
      {projects.map((project,i)=>(
        <div key={i} className={"timeline-box"}>
              <div className={0===i%2 ? "left-box left-desc" : "left-box left-title"}>
                <span className={0===i%2 ? "timeline-description" : "timeline-title"}>
                {0===i%2 ? project.description : project.shortTitle}
                </span>
              </div>
              <div className={0===i%2 ? "right-box right-desc" : "right-box right-title"}>
                <span className={0===i%2 ? "timeline-title" : "timeline-description"}>
                {0===i%2 ? project.shortTitle : project.description}
                </span>
              </div>
        </div>
      ))}
    </div>
  );
};
  
export default Timeline;  