import { useState } from "react";

function ComplaintForm({ onSubmit, loading }) {

  const [text, setText] = useState("");

  return (
    <div className="mb-6">

      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
        placeholder="Describe your issue..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-3 mt-3">

        <button
          onClick={() => onSubmit(text, () => setText(""))}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Submit"}
        </button>

        <button
          onClick={() =>
            setText("WiFi not working in hostel since 3 days")
          }
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Try Demo
        </button>

      </div>

    </div>
  );
}

export default ComplaintForm;
