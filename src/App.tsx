import { useState } from 'react';
import myData from './data/questions.json';

// interface Question {
//   a: string;
//   b: string;
// }

const App = () => {
  const [question, setQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  if (!myData) {
    return (
      <div className="min-h-screen w-full bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl p-4">Error loading questions</div>
      </div>
    );
  }

  if (question >= myData.length) {
    return (
      <div className="min-h-screen w-full bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl p-4 text-center">
          <button
            className="rounded-lg bg-neutral-600 p-4"
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
    <div className="min-h-screen w-full bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        <div className="w-full overflow-hidden rounded-full bg-neutral-300 dark:bg-neutral-600">
          <div
            className="bg-emerald-500 p-1 text-center text-sm font-semibold leading-none text-white"
            style={{ width: `${((question + 1) / myData.length) * 100}%` }}
          >
            {question + 1}/{myData.length}
          </div>
        </div>
        <div className="text-center text-3xl font-bold">
          Would you rather...
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div
            className="cursor-pointer rounded-lg bg-neutral-700 p-6 shadow-lg hover:bg-neutral-800"
            onClick={() => {
              setAnswers([...answers, 'a']);
              setQuestion(question + 1);
            }}
          >
            {myData[question].a}
          </div>
          <div
            className="cursor-pointer rounded-lg bg-neutral-700 p-6 shadow-lg hover:bg-neutral-800"
            onClick={() => {
              setAnswers([...answers, 'b']);
              setQuestion(question + 1);
            }}
          >
            {myData[question].b}
          </div>
          <div
            className="col-span-2 mx-auto w-3/4 cursor-pointer rounded-lg bg-neutral-700 p-6 text-center shadow-lg hover:bg-neutral-800"
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
