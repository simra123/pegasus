import React from "react";
import {Sec1, Sec2, Sec3, Sec4, Sec5} from './components/Homecomponent/index';

const Home = () => {
  return (
    <>
      <div id="home_main">
        <div className="content_wrap">
          <Sec1 />
          <Sec2 />
          <Sec3 />
          <Sec4 />
          <Sec5 />
        </div>
      </div>
    </>
  );
};

export default Home;
