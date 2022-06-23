function Questions({
  formData,
  input,
  setInput,
  step,
  nextPage,
  showResults,
  testResults,
  handleChange,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    nextPage();
    testResults();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={formData[step]}>{formData[step].name}</label>
          <input
            type={formData[step].type}
            placeholder={formData[step].name}
            onChange={handleChange}
            name={formData[step].name}
            id={formData[step].name}
            required
          />
          {showResults ? (
            <button type="submit">Submit</button>
          ) : (
            <button type="submit">Next</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Questions;
