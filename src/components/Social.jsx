import "./css/social.css";

export const Social = () => {
  const links = {
    Telegram: {
      ico: "telegrama.png",
      link: "https://t.me/boost/alertatolima",
    },
    WhatsApp: {
      ico: "whatsapp.png",
      link: "https://chat.whatsapp.com/FrWvG18X3aC2YDH7eXXAok",
    }
  };
  return (
    <div className="followContainer">
      <div className="idContainer">
        Síga nuestros canales
      </div>
      <div className="icoContainer">
        <ul>
          {Object.entries(links).map(([key, value]) => (
            <li key={key}>
              <a href={value.link} target="_blanck" className="linkSocial">
                <img src={value.ico} alt={key} width={"50px"} className="ico" />
                {/* <div className="name">  {key}</div> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


// const links = {
//   Telegram: {
//     ico: "telegrama.png",
//     link: "https://t.me/boost/alertatolima",
//   },
//   WhatsApp: {
//     ico: "whatsapp.png",
//     link: "https://chat.whatsapp.com/FrWvG18X3aC2YDH7eXXAok",
//   },
//   Facebook: {
//     ico: "facebook.png",
//     link: "https://www.facebook.com/alertatolimaoficial",
//   },
//   Instagram: {
//     ico: "instagram.png",
//     link: "https://www.instagram.com/alertatolima/?hl=es",
//   },
//   "X (Twitter)": {
//     ico: "gorjeo.png",
//     link: "https://x.com/AlertaTolima",
//   }
// };