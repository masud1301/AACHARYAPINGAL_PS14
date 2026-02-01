// utils/logic.js
// Central logic file for priority & dashboard calculations

// -----------------------------
// PRIORITY LOGIC
// -----------------------------
export function getPriority(text) {
  if (!text) return "Low";

  text = text.toLowerCase();

  if (
    text.includes("not working") ||
    text.includes("down") ||
    text.includes("urgent")
  ) {
    return "High";
  }

  if (
    text.includes("slow") ||
    text.includes("delay")
  ) {
    return "Medium";
  }

  return "Low";
}

// -----------------------------
// CATEGORY COUNT LOGIC
// -----------------------------
export function countCategory(issues = []) {
  const count = {};

  issues.forEach(issue => {
    if (!issue.category) return;
    count[issue.category] = (count[issue.category] || 0) + 1;
  });

  return count;
}

// -----------------------------
// PRIORITY COUNT LOGIC
// -----------------------------
export function countPriority(issues = []) {
  const count = {
    High: 0,
    Medium: 0,
    Low: 0,
  };

  issues.forEach(issue => {
    if (issue.priority && count[issue.priority] !== undefined) {
      count[issue.priority]++;
    }
  });

  return count;
}
