export default function QuestionTile({ label, onChange, value, className }) {
  return (
    <section className={`text-center prompt-one ${className}`}>
      <p className="text-3xl text-white mt-10 pb-5 px-5 sm:px-0">{label}</p>
      <input type="text" placeholder="type answer here" value={value} onChange={onChange} className="p-1" /> <br />
    </section>
  );
}
