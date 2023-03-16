import React from "react";

const Btn = ({ text, className }) => {
    return (
      <button className= {className}>
        {text}
      </button>
    );
};

export { Btn };