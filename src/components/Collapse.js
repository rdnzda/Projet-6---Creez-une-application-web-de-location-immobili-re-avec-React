import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse-container'>
      <button className='collapse-button' onClick={toggleCollapse}>
        <p>{title}</p>
        <img src='../Vector.png' alt='arrow' className={isCollapsed ? '' : 'open'}></img>
      </button>
      <div className={`wrapper ${isCollapsed ? '' : 'open'}`}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Collapse;