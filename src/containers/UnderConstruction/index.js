import React from 'react';

import { ReactComponent as ConstructionImg } from '../assets/images/underConstruction.svg';
import './style.css';

const UnderConstruction = () => {
  return (
    <div className="constraction">
      <ConstructionImg />
      <h2 className="constraction__heading">
        <p className="constraction__heading__p">page</p>
        under construction
      </h2>
    </div>
  );
};

export default UnderConstruction;
