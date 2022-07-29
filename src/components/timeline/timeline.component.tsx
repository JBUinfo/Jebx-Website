import './timeline.styles.css'
import text_website from "../../assets/text-website.json";

const Timeline = (): JSX.Element => {
  interface IProject {
    shortTitle: string,
    description: string
  }
  const projects: IProject[] = [
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["pokemon"].en,
      description: "Fue un minijuego que simulaba batallas pokemon. Si ganabas X partidas, conseguias un pokemon aleatorio. Tuvimos que recrear todo el sistema de elementos (agua, fuego, veneno...) y hacer batallas de 3 vs 3.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["socialNetwork"].en,
      description: "Proyecto individual de final de grado. Recreé Twitter con la adición de un chat global. Aquí es donde aprendí que MongoDB no es el mejor haciendo 'SELECT' pero si 'INSERT' ",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["movistar"].en,
      description: "Descubrí la existencia de programas RPA como Blueprism (y de lo lentos que pueden llegar a ser). Sugerí que se usaran requests directas para optimizar x10 el uso que le daban. Antes de esto, me dedicaba a hacer scrappers...",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wordpress"].en,
      description: "Me llegaron algunas solicitudes para realizar o editar algunas webs en wordpress. En este momento dejó de gustarme PHP. No es optimo!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["rat"].en,
      description: "Mi primer proyecto en C++ y C#. Tenia funciones como: compartir pantalla, conexión directa a la consola sin ssh, administrador de archivos sin ftp... Trabajé sin librerias y a nivel de bytes. No sabia que un 'compartir pantalla' iba a ser un verdadero reto.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["strools"].en,
      description: "Poco despues de empezar en Twitch ya queria automatizar funciones. Tiene funciones como: coger el titulo de YT de la cancion que suene en el momento, autodonar cajas de Streamloots y, en un futuro, añadir delay durante el stream. Lector, te reto a recrear la funcion de YT!", 
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["fileSortener"].en,
      description: "Tenía en mi propiedad varias bases de datos (en texto plano) y queria ordenar el contenido de todas en ficheros. Recreé el programa en NodeJS, C++, C# y Bash. No sabia que las letras rusas no eran aceptadas en las funciones base de algunos lenguajes... Además, descubrí las 'pools' de MongoDB",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["udemy"].en,
      description: "Me cansé de no poder ver los cursos de manera offline, así pues, creé un programa para almacenar copias de seguridad offline. A los pocos meses añadieron encriptación en el login y ya no funciona. Tengo pendiente recrearlo...",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["meliaAnalysis"].en,
      description: "Me llamaron del Melia de Alicante para que analizar la red del hotel. Por privacidad, no puedo mencionar nada más.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["covid"].en,
      description: "Me contrataron en una empresa para realizar un programa que permitia a los trabajadores entrar a una instalación dependiendo de si tenia fiebre o no. Yo me encargaba del dashboard del administrador que se conectaba con los dispositivos instalados en las puertas.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["instagram"].en,
      description: "Hice 2 bots para instagram. 1. Un bot para dar likes, dejar comentarios y seguir a gente. 2. Un bot para descargar todos los mensajes directos de tu cuenta. Haciendo este bot descubrí un fallo de seguirdad en IG.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["cuda"].en,
      description: "Estudié un curso de NVIDIA y me volví loco al descubrir las velocidad que se podían alcanzar con esta tecnología. Meses después me sirvió para ayudar a un amigo físico optimizando su programa (De 10min a 30s).",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["malwareAnalysis"].en,
      description: "Ingresé en un curso impartido por los empleados de Virustotal. Ya tenia conocimientos de antes pero... me volví a enamorar de la Ingenieria Inversa!!! Espero trabajar de ello en un futuro.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborManagement"].en,
      description: "La empresa Krebor Technology necesitaba un programa para la administración de su almacén e inventario. C#, WPF y SQLite fueron necesarios para hacer este proyecto. Aprendí que imprimir un documento desde C# puede complicarse un poco.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["poocoin"].en,
      description: "Después de estar dias, semanas y meses mirando gráficas me pregunté 'por que no hacer un script que avise cuando el precio llega a X?', y eso es lo que hice. Nunca antes habia reproducido un sonido con base64 desde el propio navegador. Hice algo así como una extensión para chrome.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["challengeWebsites"].en,
      description: "Después de que Amazon me contactase para que trabajara con ellos tuve que hacer un test que no conseguí pasar. Después de eso me dediqué durante semanas a realizar pruebas en webs como hackerrank, codewars, acepta el reto!, hack the box...",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["ampa"].en,
      description: "Me llamaron para implementar un sistema de inscripción y pago en un web de un ampa (Asociación de Madres y Padres de Alumnos). Mi primer sistema de pago implementado!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["radio"].en,
      description: "Detestaba hacer viajes con muchos amigos y no poder escuchar la misma musica en los diferentes coches. Cree una radio donde el admin colocaba la URL de YT, se descargaba en el servidor y se añadia a la sala donde quisieras. La musica se reproducia de forma aleatoria y en bucle (como una radio).",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["binance"].en,
      description: "Ese momento cuando se te ocurre una estrategia que te hará ganar dinero pero necesitas hacer backtesting y no puedes... Creé este script para descargarte TODAS las velas en TODAS las temporalidades de la cryptomoneda que quieras.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingBot"].en,
      description: "Comencé a crear un bot de trading pero lo dejé a medias debido a que necesitaba trabajar. Se quedó en la fase de backtesting (Quedan la fase de estadisticas y conexión con Binance).",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["jazztel"].en,
      description: "Necesitaba dinero y trabajé en NTT Data durante 3 meses. Fui colocado en la web de jazztel para encontrar y solucionar bugs.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["wildprint"].en,
      description: "Una empresa dedicada a la enseñanza del mundo animal me contactó para que les hiciera su web. Apliqué mis conocimientos de React + Redux. wildprint.es",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["bookmarks"].en,
      description: "Un amigo me pidió crear un script que descargase todos los videos de YT que tenía guardados en los marcadores de Chrome. Además, había que descargarlos dentro con sus respectivas carpetas. Aquí descubrí lo mal que exporta Chrome los marcadores.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["thisWebsite"].en,
      description: "Posiblemente uno de los proyectos que más satisfecho me han dejado. Normalmente nunca elijo yo el diseño pero... en este caso si!",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["smartContracts"].en,
      description: "Un juego de NFTs necesitaba un programador de Smart Contracts. Coincidía con que yo me estaba leyendo la documentación de solidity y de Ethereum. Así pues, me dispuse a crear 5 smart contracts.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["kreborWebsite"].en,
      description: "Krebor Technology S.L. necesita expandirse y no hay mejor forma que a través de internet. A la espera de recibir más información, espero lanzar su web en 2023.",
    },
    {
      shortTitle: text_website.TECH_PROJECT_TITLES["tradingDashboard"].en,
      description: "Con la esperanza de volver al mundo del trading, haré un panel de administración para todos mis trades.",
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