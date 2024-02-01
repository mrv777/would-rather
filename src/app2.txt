import React, { useEffect, useState } from 'react';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    fetch('/questions.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Failed to load questions', error));
  }, []);

  const handleOptionClick = (option: string) => {
    // Logic to handle click
    alert(`You chose: ${option}`);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert("You've completed all questions!");
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      {questions.length > 0 ? (
        <div>
          <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="rounded-full bg-slate-600 p-0.5 text-center text-xs font-medium leading-none text-slate-100"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            >
              {currentQuestionIndex + 1}/{questions.length}
            </div>
          </div>
          <h2 className="text-xl font-bold">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="mt-4 space-x-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default App;
