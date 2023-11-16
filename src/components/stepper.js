// Stepper.js
import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-center mt-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? "active" : ""}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
