export default function Question({ question, handleAnswerClick, showScore, userName, restartQuiz }) {
  if (!question) {
    return (
      <div className="question-container">
        <h1>Quiz Finished!</h1>
        <p className="total-score">{userName} Your score <strong>{showScore}</strong> <br></br>
        <button className="restart-again" onClick={restartQuiz}>Restart Quiz</button>
        </p>
      </div>
    );
  }

  const { question: q, answers, correctAnswer } = question;

  return (
    <div>
      <div className="question-container">
        <h2>{q}</h2>
        <div className="ans-container">
          {answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerClick(answer, correctAnswer)}>
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
