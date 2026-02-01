function ResultCard({ data }) {

  if (!data) return null;

  return (
    <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-6">

      <h3 className="font-semibold text-green-700 mb-2">
        Analysis Result
      </h3>

      <p>
        <b>Category:</b> {data.category}
      </p>

      <p>
        <b>Priority:</b> {data.priority}
      </p>

      <p>
        <b>Keywords:</b> {data.keywords.join(", ")}
      </p>

    </div>
  );
}

export default ResultCard;
