// Stepper.js
import React from "react";

const Stepper = ({ currentStep }) => {
  const steps = ["Step 1", "Step 2"]; // Add more steps as needed

  return (
    <div className="flex justify-center mt-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-16 h-2 mx-2 ${
            index === currentStep ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Stepper;
