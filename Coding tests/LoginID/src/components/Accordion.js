/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useState } from 'react';

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
