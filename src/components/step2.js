import React from "react";

const Step2 = ({ onPrev }) => {
  return (
    <div>
      <h1 className="text-white">Step 2</h1>

      <button onClick={onPrev} className="text-white">
        prev
      </button>
    </div>
  );
};

export default Step2;
