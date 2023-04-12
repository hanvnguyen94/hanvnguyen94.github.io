import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Location",
          content: "Claremont, NH 03743",
        },
        {
          id: 2,
          name: "Email",
          content: (
            <>
              <a href="mailto:hanvnguyen94@gmail.com">hanvnguyen94@gmail.com</a>
            </>
          ),
        },
        {
          id: 3,
          name: "GitHub",
          content: (
            <>
              <a href="https://github.com/hanvnguyen94">GitHub</a>
            </>
          ),
        },
        {
          id: 4,
          name: "LinkedIn",
          content: (
            <>
              <a href="https://www.linkedin.com/in/hnguyen94/">LinkedIn</a>
            </>
          ),
        }
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Institution",
          content: "Boston University",
        },
        {
          id: 3,
          name: "Currently pursuing",
          content: "Master's Degree",
        },
        {
          id: 4,
          name: "Interest",
          content: "Reading, Video Games",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
        },
      ],
    }
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.content}</span>
                  <span>{value.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
