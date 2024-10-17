import { useEffect, useState } from "react";

export default function InputTest() {
  const [answer, setAnswer] = useState("");
  const question = "what's your fave pet";
  const [array, setArray] = useState([]);

  const handleAnswerChange = (e) => {
    let answerSelected = e.target.value;
    setAnswer(answerSelected);
    console.log(answerSelected);
    return;
  };

  useEffect(() => {
    console.log(answer); // Logs the updated state
  }, [answer]);

  // ADD TO ARRAY
  const handleAddArray = () => {
    if (answer !== "") {
      setArray([...array, { value: answer }]);
    }
    console.log(array);
  };

  // MAKING THE WHOLE SENTENCE TO SEND TO THE AI START
  const handleCombineSentence = () => {
    // const answerOne = array[0].value;
    const answerOne = array.at(-1).value;
    const combinedAnswers = `${question} ${answerOne}`;
    console.log(combinedAnswers);
  };
  // MAKING THE PARAGRAPH TO SEND TO THE AI END

  return (
    <>
      <label for="image-select" className="text-black text-3xl">
        {question}
      </label>

      <select onChange={handleAnswerChange} name="images" id="image-select">
        <option value="">--Please choose an option--</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
      </select>

      <button className="block bg-blue-300" onClick={handleAddArray}>
        Click me to confirm choice to ARRAY
      </button>
      <button onClick={handleCombineSentence}>MAKE MY SENTENCE</button>
    </>
  );
}
