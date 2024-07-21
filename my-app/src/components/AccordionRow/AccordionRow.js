import React, { useState } from 'react';
import './AccordionRow.css';

const AccordionRow = ({ title, upvotes, isActive, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`accordion-row ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="title">
          {title}
          <span className="upvotes">{upvotes} Upvotes</span>
        </div>
        <div className={`arrow ${isExpanded ? 'expanded' : ''}`}>&#9654;</div>
      </div>
      <div className="accordion-content" style={{ height: isExpanded ? 'auto' : 0 }}>
        {children}
      </div>
    </div>
  );
};

export default AccordionRow;