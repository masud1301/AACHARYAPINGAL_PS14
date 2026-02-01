import { useState } from "react";

import ComplaintForm from "../components/ComplaintForm";
import ResultCard from "../components/ResultCard";

import { getPriority } from "../utils/logic";

function Home({ issues, setIssues }) {

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (text, clearInput) => {

    if (!text.trim()) {
      alert("Please write an issue first!");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      const category = "Network";
      const priority = getPriority(text);

      const newIssue = {
        text,
        category,
        priority,
        timestamp: new Date().toLocaleString(),
      };

      setIssues([...issues, newIssue]);

      setResult({
        category,
        priority,
        keywords: text.split(" ").filter(Boolean).slice(0, 3),
      });

      setLoading(false);
      clearInput(); // 🔥 textarea clear

    }, 1000);
  };

  return (
    <div>

      <h2 className="text-xl font-bold text-center mb-4">
        Submit Issue
      </h2>

      <ComplaintForm
        onSubmit={handleSubmit}
        loading={loading}
      />

      <ResultCard data={result} />

    </div>
  );
}

export default Home;
