import React, { useState } from "react";

export default function TestNew() {
  // Step 1: Set up state for the array and input value
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [testTwo, setTestTwo] = useState("");

  const mainQuestion = "Using the questions and answers provided in the follwing copy, please generate a hogwarts house, muggle or squib answer from the information...";
  const questionOne = "What is your first name?";
  const questionTwo = "What is your favourite animal?";
  const questionThree = "Are you afraid of heights or flying?";

  // Step 2: Handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // TEST 2: Handle input changes
  const handleTestChange = (event) => {
    setTestTwo(event.target.value);
  };

  // Step 3: Add new value to the array
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, { value: inputValue }]);
      setInputValue(""); // Clear the input field
    }
    console.log(items);
  };

  // TESTTTT 3: Add new value to the array
  const handleAddTest = () => {
    if (testTwo.trim() !== "") {
      setItems([...items, { value: testTwo, question: 5, answer: testTwo }]);
      setTestTwo(""); // Clear the input field
    }
    console.log(items);
  };

  const handleAddArray = () => {
    const prompyOne = items[0].value;
    const prompyTwo = items[1].question;
    const total = `this works ${prompyOne} plus ${prompyTwo}`;
    const totalNew = `${mainQuestion} ${questionOne} ${prompyOne}. ${questionTwo} ${prompyTwo}. ${questionThree}`;
    console.log(total);
    console.log(totalNew);
  };

  return (
    <div>
      {/* Step 4: Input field */}
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a value" />

      {/* Button to trigger adding the value */}
      <button onClick={handleAddItem}>Add</button>

      {/* TEST SECTION*/}
      {/* Step 4: Input field */}
      <input className="bg-blue-300" type="text" value={testTwo} onChange={handleTestChange} placeholder="Enter a value" />

      {/* Button to trigger adding the value */}
      <button onClick={handleAddTest}>Add</button>
      <button onClick={handleAddArray}>CONFIRM</button>

      {/* Display the array of objects */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
