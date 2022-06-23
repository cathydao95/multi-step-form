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

  //   function to go to previous question
  function goBack() {
    setStep((prevStep) => prevStep - 1);
  }

  //   function to go to next questionn
  function nextPage() {
    setStep((prevStep) => prevStep + 1);
  }

  //   function to display submit buttons
  function testResults() {
    if (step === formData.length - 2) {
      setShowResults(true);
    }
  }

  function handleChange(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  console.log(input);

  //   useEffect(() => {
  //     setInput(formData[step].name || "");
  //   }, [step]);

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
        handleChange={handleChange}
      />
    </div>
  );
}

export default Form;
