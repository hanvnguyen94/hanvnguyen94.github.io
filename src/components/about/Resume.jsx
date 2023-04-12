import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2023 - 2025",
          institute: "Boston University",
          degree: "Master's Degree",
        },
        {
          id: 2,
          year: "2013 - 2017",
          institute: "Lincoln University",
          degree: "Bachelor's Degree",
        }
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2021 - 2023",
          institute: "Advata Inc",
          degree: "Associate Engineer",
        },
        {
          id: 2,
          year: "2021 - 2022",
          institute: "Freelance",
          degree: "Freelance Web Developer",
        },
        {
          id: 3,
          year: "2020 - 2021",
          institute: "General Assembly",
          degree: "Software Engineering Fellow",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
