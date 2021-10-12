import React from "react";
import PropTypes from "prop-types";

function ProgressBar(props) {
    const { progress } = props;
    const sum = (x) =>  100 - x;


    return (
      <div>
        <div></div>
        <h1> {sum(progress)}% TO GOAL</h1>
      </div>
    );
  }
  
  ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
  };

  
  export default ProgressBar;
  