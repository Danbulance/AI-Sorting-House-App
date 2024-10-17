export default function ResultsGenerated({ houseResult, houseExplanation }) {
  return (
    <div className="px-6">
      <p className="text-white text-center text-4xl mb-5">{houseResult}</p>
      <p className="text-white text-center text-2xl">{houseExplanation}</p>
    </div>
  );
}
