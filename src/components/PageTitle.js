import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Han Nguyen</title>
    </Helmet>
  );
};

export default PageTitle;
