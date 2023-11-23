import { subTopicContent } from "@/data";

export function searchContent(searchTerm) {
  const matchingKeys = [];

  // Tokenize the search term
  const searchTokens = searchTerm.toLowerCase().split(/\s+/);

  // Iterate through each subtopic
  for (const [topic, content] of Object.entries(subTopicContent)) {
    // Iterate through each key-value pair in the subtopic
    for (const [key, value] of Object.entries(content)) {
      // Tokenize the content
      const contentTokens = value.toLowerCase().split(/\s+/);

      // Calculate a simple relevance score based on token matches
      const score = searchTokens.reduce(
        (total, token) => total + contentTokens.includes(token),
        0
      );

      // Adjust the score based on the length of the content
      const adjustedScore = score / contentTokens.length;

      // If a match is found, add the key and score to the result
      if (adjustedScore > 0) {
        matchingKeys.push({
          subTopic: `${key}`,
          score: adjustedScore,
          topic,
        });
      }
    }
  }

  // Sort the results by score in descending order
  matchingKeys.sort((a, b) => b.score - a.score);

  // Return only the keys without the scores
  return matchingKeys;
}
