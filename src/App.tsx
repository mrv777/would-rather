import { useState } from 'react';
import myData from './data/questions.json';

const App = () => {
  const [question, setQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  if (!myData) {
    return (
      <div className="min-h-screen w-full bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl p-4">Loading...</div>
      </div>
    );
  }

  if (question >= myData.length) {
    return (
      <div className="min-h-screen w-full bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl p-4 text-center">
          <button
            className="rounded-lg bg-slate-600 p-4"
            onClick={() => {
              setQuestion(0);
              setAnswers([]);
            }}
          >
            Start Over
          </button>
          <div>Your answers</div>
          <div className="mx-auto w-fit">
            <ul className="list-decimal">
              {answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl p-4">
        <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="rounded-full bg-slate-600 p-0.5 text-center text-xs font-medium leading-none text-slate-100"
            style={{ width: `${((question + 1) / myData.length) * 100}%` }}
          >
            {question + 1}/{myData.length}
          </div>
        </div>
        <div className="p-4 text-center text-2xl font-bold">
          Would you rather...
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="cursor-pointer rounded-lg border border-gray-300 p-4"
            onClick={() => {
              setAnswers([...answers, 'a']);
              setQuestion(question + 1);
            }}
          >
            {myData[question].a}
          </div>
          <div
            className="cursor-pointer rounded-lg border border-gray-300 p-4"
            onClick={() => {
              setAnswers([...answers, 'b']);
              setQuestion(question + 1);
            }}
          >
            {myData[question].b}
          </div>
          <div
            className="col-span-2 mx-auto w-1/2 cursor-pointer rounded-lg border border-gray-300 p-4 text-center"
            onClick={() => {
              setAnswers([...answers, 'c']);
              setQuestion(question + 1);
            }}
          >
            Either
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
