import React, { useEffect } from "react";
import ReactGA from "react-ga";

const index: React.FC = ({}) => {
  useEffect(() => {
    ReactGA.pageview("index");
  }, []);

  return (
    <>
      <p>Welcome to jonessam.com</p>
    </>
  );
};

export default index;
