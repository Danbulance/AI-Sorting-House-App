export default function FetchAiButton({ onClick, combinedQuestions }) {
  return (
    <button onClick={onClick} className={`text-white text-3xl ${combinedQuestions ? "hide-button" : ""}`}>
      Tell me my Hogwarts House
    </button>
  );
}
