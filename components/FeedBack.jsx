// FeedbackComponent.js
import { useState, useEffect } from 'react';

function FeedbackComponent({ articleId }) {
  const [feedback, setFeedback] = useState(localStorage.getItem(`feedback_${articleId}`) || null);

  useEffect(() => {
    localStorage.setItem(`feedback_${articleId}`, feedback);
  }, [feedback, articleId]);

  const submitFeedback = () => {
    // Implement logic to send feedback to your server or perform actions locally
    console.log(`Feedback for article ${articleId} submitted:`, feedback);
  };

  return (
    <div className="text-center">
      <p className='mb-3'>Was this article helpful?</p>
      <button
        className={`mr-3 border border-solid border-edceab px-4 py-2 rounded text-edceab ${feedback === 'thumbsUp' ? 'bg-[#edceab] text-white' : ''}`}
        onClick={() => setFeedback('thumbsUp')}
      >
        Yes
      </button>
      <button
        className={`border border-solid border-edceab px-4 py-2 rounded text-edceab ${feedback === 'thumbsDown' ? 'bg-[#edceab] text-white' : ''}`}
        onClick={() => setFeedback('thumbsDown')}
      >
        No
      </button>
      <div className='mt-3 text-sm'>0 out of 0 found this helpful</div>
      {/* <button onClick={submitFeedback}>Submit Feedback</button> */}
    </div>
  );
}

export default FeedbackComponent;
