import Form from "./components/Form";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const [finished, setFinished] = useState(false);

  return (
    <div>{finished ? <Success /> : <Form setFinished={setFinished} />}</div>
  );
}

export default App;
