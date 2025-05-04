import { useState } from "react";
import PropTypes from "prop-types";

const Accrodion = ({ title, desc }) => {
  const [accordionState, setAccordionState] = useState(false);

  const toggleAccordion = () => {
    console.log(
      "I want to expand the div: my current active state ",
      accordionState
    );
    setAccordionState(!accordionState);
  };
  return (
    <div>
      <div
        className="p-5 bg-gray-200 rounded-t flex items-center justify-between cursor-pointer hover:bg-gray-300"
        onClick={toggleAccordion}
      >
        <h4 className="font-semibold">{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
          className={accordionState ? "" : "-rotate-90"}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m19 9l-7 6l-7-6"
          ></path>
        </svg>
      </div>
      <div className={`bg-gray-100 p-5 ${accordionState ? "block" : "hidden"}`}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

Accrodion.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Accrodion;
