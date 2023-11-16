// Step1.js
import React from "react";

const Step1 = ({ onNext }) => {
  return (
    <div>
      <h1 className="text-white">Step 1</h1>

      <button onClick={onNext} className="text-white">
        Next
      </button>
    </div>
  );
};

export default Step1;
