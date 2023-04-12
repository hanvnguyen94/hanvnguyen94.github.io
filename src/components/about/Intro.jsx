import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/profile-green.png",
    name: "Han Nguyen",
    designation: "Software Developer",
    text: (
      <>
        <p>
          Hi, my name is Han Nguyen and I am an experienced software developer with a flair for
          creating elegant solutions. Knowledgeable in user
          interface, testing, and debugging processes. My ideal
          position will allow me to learn and grow; all while
          continuing to write clean, elegant, and efficient code
        </p>
        <p>
        Currently pursuing higher education at Boston
        University's Master of Science in Computer
        Information Systems as a part-time student
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
