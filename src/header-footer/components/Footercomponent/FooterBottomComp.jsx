import React from "react";
import {Link } from 'react-router-dom';
import companycard from '../../../assets/images/cards.png';

const FooterBottomComp = () => {
  return (
    <>
      <div className="footer_bottom_wrap">
        <div className="col col1">
          <p>
            Copyrights 2022. <Link to="/"> Pegasus</Link>. All Rights Reserved.
          </p>
        </div>
        <div className="col col2">
          <img src={companycard} alt="no" />
        </div>
      </div>
    </>
  );
};

export default FooterBottomComp;
