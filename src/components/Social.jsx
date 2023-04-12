import React from "react";

const SocialShare = [  {
    iconName: "instagram",
    link: "https://www.instagram.com/han.dragonlady/",
  },
  {
    iconName: "github",
    link: "https://github.com/hanvnguyen94",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/",
  },


];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
