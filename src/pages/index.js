import Step1 from "@/components/step1";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";
import Stepper from "@/components/stepper";
import SvgLogo from "@/components/svgs/logo";

import React, { useState } from "react";

export default function Home({}) {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["1", "2", "3"];

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div className="lg:hidden flex onboarding-logo">
        <div className=" min-w-[260px]">
          <SvgLogo />
        </div>
      </div>
      <div className="h-screen bg-gray_1 w-full onboarding min-h-[600px]">
        <div className="container mx-auto flex lg:justify-between justify-center items-center relative w-full h-full ">
          <div className="lg:block hidden ">
            <div className="">
              <div className="absolute top-16  left-24 2xl:left-52 z-50 w-[360px] h-[72px]">
                <SvgLogo />
              </div>
            </div>
          </div>
          <div className="flex flex-col  mt-10  items-center text-white lg:w-[60%]">
            <div className="mb-6">
              <h1 className="text-28 font-clash-medium  text-center  lg:w-full w-[256px]">
                Enter your confirmation code
              </h1>
              <Stepper steps={steps} currentStep={currentStep} />
              {currentStep === 0 && <Step1 onNext={handleNext} />}
              {currentStep === 1 && (
                <Step2 onPrev={handlePrev} onNext={handleNext} />
              )}
              {currentStep === 2 && (
                <Step3 onPrev={handlePrev} onNext={handleNext} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
