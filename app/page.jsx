"use client";

import { useState } from "react";
import Heading from "./components/Heading";
import QuestionTile from "./components/QuestionTile";
import StartButton from "./components/StartButton";
import NextButton from "./components/NextButton";
import FetchAiButton from "./components/FetchAiButton";
import ResultsGenerated from "./components/ResultsGenerated";
import Spinner from "./components/Spinner";
import { getResponse } from "./actions";

export default function Home() {
  const [startApp, setStartApp] = useState(false);
  const [startBtnHide, setStartBtnHide] = useState(true);
  const [prompt, setPrompt] = useState(0);
  const [promptOneInput, setPromptOneInput] = useState("");
  const [promptTwoInput, setPromptTwoInput] = useState("");
  const [promptThreeInput, setPromptThreeInput] = useState("");
  const [promptFourInput, setPromptFourInput] = useState("");
  const [promptFiveInput, setPromptFiveInput] = useState("");
  const [promptSixInput, setPromptSixInput] = useState("");

  const [items, setItems] = useState([]);
  const [combinedQuestions, setCombinedQuestions] = useState("");
  const [houseResult, setHouseResult] = useState("");
  const [houseExplanation, setHouseExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const mainQuestion = "Using the questions and answers provided in the follwing copy, please generate a hogwarts house, muggle or squib answer from the information...";
  const questionOne = "What is your first name?";
  const questionTwo = "What is your favourite animal?";
  const questionThree = "Are you afraid of heights or flying?";
  const questionFour = "Do you prefer trolls or goblins?";
  const questionFive = "What one word describes you best?";
  const questionSix = "What is your favourite spell?";

  // START APP FUNCTION START
  const handleClickStartApp = () => {
    setStartApp(true);
    setStartBtnHide(false);
  };
  // START APP FUNCTION END

  // GETTING VALUES ENTERED FOR PROMPS START
  const handleInputOneChange = (e) => {
    console.log(e.target.value);
    setPromptOneInput(e.target.value);
  };

  const handleInputTwoChange = (e) => {
    console.log(e.target.value);
    setPromptTwoInput(e.target.value);
  };

  const handleInputThreeChange = (e) => {
    console.log(e.target.value);
    setPromptThreeInput(e.target.value);
  };

  const handleInputFourChange = (e) => {
    console.log(e.target.value);
    setPromptFourInput(e.target.value);
  };

  const handleInputFiveChange = (e) => {
    console.log(e.target.value);
    setPromptFiveInput(e.target.value);
  };

  const handleInputSixChange = (e) => {
    console.log(e.target.value);
    setPromptSixInput(e.target.value);
  };
  // GETTING VALUES ENTERED FOR PROMPS END

  // ADD PROMPT INPUTS INTO THE ARRAY START
  const handleAddItemOne = () => {
    if (promptOneInput.trim() !== "") {
      setItems([...items, { value: promptOneInput }]);
      setPromptOneInput(""); // Clear the input field
    }
    console.log(items);

    setStartApp(false);
    setPrompt(2);
  };

  const handleAddItemTwo = () => {
    if (promptTwoInput.trim() !== "") {
      setItems([...items, { value: promptTwoInput }]);
      setPromptTwoInput(""); // Clear the input field
    }
    console.log(items);

    setPrompt(3);
  };

  const handleAddItemThree = () => {
    if (promptThreeInput.trim() !== "") {
      setItems([...items, { value: promptThreeInput }]);
      setPromptThreeInput(""); // Clear the input field
    }
    console.log(items);

    setPrompt(4);
  };

  const handleAddItemFour = () => {
    if (promptFourInput.trim() !== "") {
      setItems([...items, { value: promptFourInput }]);
      setPromptFourInput(""); // Clear the input field
    }
    console.log(items);

    setPrompt(5);
  };

  const handleAddItemFive = () => {
    if (promptFiveInput.trim() !== "") {
      setItems([...items, { value: promptFiveInput }]);
      setPromptFiveInput(""); // Clear the input field
    }
    console.log(items);

    setPrompt(6);
  };

  const handleAddItemSix = () => {
    if (promptSixInput.trim() !== "") {
      setItems([...items, { value: promptSixInput }]);
      setPromptSixInput(""); // Clear the input field
    }
    console.log(items);

    setPrompt(7);
  };
  // ADD PROMPT INPUTS INTO THE ARRAY END

  // GENERATING THE RESPONSE FROM AI FUNCTION START
  const handleGenerateHogwarts = async () => {
    // MAKING THE WHOLE SENTENCE TO SEND TO THE AI START
    setIsLoading(true);
    const promptOne = items[0].value;
    const promptTwo = items[1].value;
    const promptThree = items[2].value;
    const promptFour = items[3].value;
    const promptFive = items[4].value;
    const promptSix = items[5].value;
    const total = `this works ${promptOne} plus ${promptTwo}`;
    const combinedAnswers = `${mainQuestion} ${questionOne} ${promptOne}. ${questionTwo} ${promptTwo}. ${questionThree} ${promptThree}. ${questionFour} ${promptFour}. ${questionFive} ${promptFive}. ${questionSix} ${promptSix}.`;
    console.log(total);
    console.log(combinedAnswers);
    setCombinedQuestions(combinedAnswers);
    // MAKING THE PARAGRAPH TO SEND TO THE AI END

    const { object } = await getResponse(combinedAnswers);
    setIsLoading(false);
    console.log(object.house);
    console.log(object.explanation);
    console.log(combinedQuestions);
    setHouseResult(object.house);
    setHouseExplanation(object.explanation);
  };
  // GENERATING THE RESPONSE FROM AI FUNCTION END

  return (
    <main className="main-layout">
      <Heading />

      <div className="content-holder">
        {startBtnHide && <StartButton onClick={handleClickStartApp} />}

        {startApp && (
          <>
            <QuestionTile label={questionOne} value={promptOneInput} onChange={handleInputOneChange} />
            <NextButton onClick={handleAddItemOne} />
          </>
        )}

        {prompt === 2 ? (
          <>
            <QuestionTile label={questionTwo} value={promptTwoInput} onChange={handleInputTwoChange} />
            <NextButton onClick={handleAddItemTwo} />
          </>
        ) : (
          ""
        )}

        {prompt === 3 ? (
          <>
            <QuestionTile label={questionThree} value={promptThreeInput} onChange={handleInputThreeChange} />
            <NextButton onClick={handleAddItemThree} />
          </>
        ) : (
          ""
        )}

        {prompt === 4 ? (
          <>
            <QuestionTile label={questionFour} value={promptFourInput} onChange={handleInputFourChange} />
            <NextButton onClick={handleAddItemFour} />
          </>
        ) : (
          ""
        )}

        {prompt === 5 ? (
          <>
            <QuestionTile label={questionFive} value={promptFiveInput} onChange={handleInputFiveChange} />
            <NextButton onClick={handleAddItemFive} />
          </>
        ) : (
          ""
        )}

        {prompt === 6 ? (
          <>
            <QuestionTile label={questionSix} value={promptSixInput} onChange={handleInputSixChange} />
            <NextButton onClick={handleAddItemSix} />
          </>
        ) : (
          ""
        )}

        {/* SHOW OR HIDE RESULTS BUTTON */}
        {prompt === 7 ? <FetchAiButton onClick={handleGenerateHogwarts} combinedQuestions={combinedQuestions} /> : ""}

        {isLoading && <Spinner />}

        <ResultsGenerated houseResult={houseResult} houseExplanation={houseExplanation} />
      </div>
    </main>
  );
}

/* <button className="block bg-cyan-400" onClick={handleAddArray}>
          CONFIRM
        </button> */

// MAKING THE WHOLE SENTENCE TO SEND TO THE AI START
// const handleAddArray = () => {
//   const promptOne = items[0].value;
//   const promptTwo = items[1].value;
//   const promptThree = items[2].value;
//   const total = `this works ${promptOne} plus ${promptTwo}`;
//   const combinedAnswers = `${mainQuestion} ${questionOne} ${promptOne}. ${questionTwo} ${promptTwo}. ${questionThree} ${promptThree}.`;
//   console.log(total);
//   console.log(combinedAnswers);
//   setCombinedQuestions(combinedAnswers);
// };
// MAKING THE PARAGRAPH TO SEND TO THE AI END

/* DISPLAY ITEMS ADDED */
/* <section className="bg-lime-600 block mt-11">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </ul>
        </section> */
