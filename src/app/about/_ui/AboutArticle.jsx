// AboutArticle.jsx
import React from "react";

export default function AboutArticle({ article }) {
  if (!article) return null; // Handle case where article is not provided

  // Check if the article matches the specific content
  const isSpecificArticle =
    article.includes("Blockchain Integrity:") &&
    article.includes("RFID Integration:") &&
    article.includes("Universal Applicability:") &&
    article.includes("OneChain® Integration:");

  if (isSpecificArticle) {
    // Convert the article string into an array of lines by splitting it by newline characters
    const articleLines = article
      .split("\n")
      .filter((line) => line.trim() !== ""); // Filter out empty lines

    return (
      <ul className='specific-about-article-list'>
        {articleLines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    );
  }

  // Render plain text if it's not the specific article
  return <p>{article}</p>;
}
