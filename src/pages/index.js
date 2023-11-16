import Step1 from "@/components/step1";
import Step2 from "@/components/step2";
import Stepper from "@/components/stepper";
import React, { useState } from "react";

export default function Home({}) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Stepper currentStep={currentStep} />
      {currentStep === 0 && <Step1 onNext={handleNext} />}
      {currentStep === 1 && <Step2 onPrev={handlePrev}  />}
      {/* Add more steps as needed */}
    </div>
  );
}
