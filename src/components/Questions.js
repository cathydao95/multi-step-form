function Questions(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.nextPage();
    props.testResults();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={props.formData[props.step]}>
            {props.formData[props.step].name}
          </label>
          <input
            type={props.formData[props.step].type}
            placeholder={props.formData[props.step].name}
            onChange={props.handleChange}
            name={props.formData[props.step].name}
            id={props.formData[props.step].name}
            value={props.input}
            required
          />
          {props.showResults ? (
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
