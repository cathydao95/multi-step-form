import { useState, useEffect } from "react";
import Questions from "./Questions";

function Form(props) {
  const [showResults, setShowResults] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const formData = [
    { name: "name", type: "text" },

    { name: "email", type: "email" },

    { name: "date", type: "date" },

    { name: "password", type: "password" },
  ];

  function goBack() {
    setStep((prevStep) => prevStep - 1);
  }

  function nextPage() {
    setStep((prevStep) => prevStep + 1);
  }

  function testResults() {
    if (step === formData.length - 2) {
      setShowResults(true);
    }
  }
  //   console.log(showResults);
  //   console.log(formData.length - 1, step);
  console.log(input);

  return (
    <div>
      {step > 0 && step < formData.length ? (
        <button onClick={goBack}>Back</button>
      ) : null}

      <Questions
        formData={formData}
        nextPage={nextPage}
        step={step}
        testResults={testResults}
        showResults={showResults}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default Form;
