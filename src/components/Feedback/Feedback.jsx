import React from "react";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total feedback: {totalFeedback}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;
