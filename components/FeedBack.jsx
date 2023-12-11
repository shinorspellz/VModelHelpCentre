// FeedbackComponent.js
import { useState, useEffect } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

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
    <div>
      <p>Was this article helpful?</p>
      <button
        className={`mr-3 ${feedback === 'thumbsUp' ? 'selected' : ''}`}
        onClick={() => setFeedback('thumbsUp')}
      >
        <ThumbUpOutlinedIcon style={{ color: '#edceab' }} />
      </button>
      <button
        className={`${feedback === 'thumbsDown' ? 'selected' : ''}`}
        onClick={() => setFeedback('thumbsDown')}
      >
        <ThumbDownAltOutlinedIcon style={{ color: '#edceab' }} />
      </button>
      {/* <button onClick={submitFeedback}>Submit Feedback</button> */}
    </div>
  );
}

export default FeedbackComponent;
