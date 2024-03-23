import React, { useState } from 'react';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      section: 'Science',
      questionText: 'Who is credited with the discovery of penicillin?',
      answerOptions: [
        { answerText: 'Alexander Fleming', isCorrect: true },
        { answerText: 'Louis Pasteur', isCorrect: false },
        { answerText: 'Robert Koch', isCorrect: false },
        { answerText: 'Joseph Lister', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'What is the name of the first artificial satellite launched into space?',
      answerOptions: [
        { answerText: 'Apollo 11', isCorrect: false },
        { answerText: 'Sputnik 1', isCorrect: true },
        { answerText: 'Explorer 1', isCorrect: false },
        { answerText: 'Vanguard 1', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who proposed the theory of general relativity?',
      answerOptions: [
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Albert Einstein', isCorrect: true },
        { answerText: 'Niels Bohr', isCorrect: false },
        { answerText: 'Max Planck', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'What element did Marie and Pierre Curie discover in 1898?',
      answerOptions: [
        { answerText: 'Radon', isCorrect: false },
        { answerText: 'Radium', isCorrect: true },
        { answerText: 'Polonium', isCorrect: false },
        { answerText: 'Uranium', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who formulated the laws of planetary motion?',
      answerOptions: [
        { answerText: 'Galileo Galilei', isCorrect: false },
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Johannes Kepler', isCorrect: true },
        { answerText: 'Tycho Brahe', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who is considered the father of modern chemistry?',
      answerOptions: [
        { answerText: 'Antoine Lavoisier', isCorrect: true },
        { answerText: 'Dmitri Mendeleev', isCorrect: false },
        { answerText: 'Robert Boyle', isCorrect: false },
        { answerText: 'John Dalton', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'What is the unit of electrical resistance named after?',
      answerOptions: [
        { answerText: 'Alessandro Volta', isCorrect: false },
        { answerText: 'James Clerk Maxwell', isCorrect: false },
        { answerText: 'Georg Ohm', isCorrect: true },
        { answerText: 'Michael Faraday', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who discovered the circulation of blood in the human body?',
      answerOptions: [
        { answerText: 'William Harvey', isCorrect: true },
        { answerText: 'Andreas Vesalius', isCorrect: false },
        { answerText: 'Hippocrates', isCorrect: false },
        { answerText: 'Galen', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who developed the first successful polio vaccine?',
      answerOptions: [
        { answerText: 'Jonas Salk', isCorrect: true },
        { answerText: 'Louis Pasteur', isCorrect: false },
        { answerText: 'Edward Jenner', isCorrect: false },
        { answerText: 'Alexander Fleming', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'What year did the Apollo 11 mission land the first humans on the moon?',
      answerOptions: [
        { answerText: '1965', isCorrect: false },
        { answerText: '1969', isCorrect: true },
        { answerText: '1972', isCorrect: false },
        { answerText: '1975', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who is known as the founder of modern genetics?',
      answerOptions: [
        { answerText: 'Gregor Mendel', isCorrect: true },
        { answerText: 'Charles Darwin', isCorrect: false },
        { answerText: 'Thomas Hunt Morgan', isCorrect: false },
        { answerText: 'Francis Crick', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'What scientist is famous for his theory of evolution by natural selection?',
      answerOptions: [
        { answerText: 'Gregor Mendel', isCorrect: false },
        { answerText: 'Charles Darwin', isCorrect: true },
        { answerText: 'Alfred Russel Wallace', isCorrect: false },
        { answerText: 'Thomas Hunt Morgan', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who is credited with the discovery of X-rays?',
      answerOptions: [
        { answerText: 'Wilhelm Conrad Roentgen', isCorrect: true },
        { answerText: 'Max Planck', isCorrect: false },
        { answerText: 'Ernest Rutherford', isCorrect: false },
        { answerText: 'Marie Curie', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'What is the unit of energy named after?',
      answerOptions: [
        { answerText: 'James Joule', isCorrect: true },
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Albert Einstein', isCorrect: false },
        { answerText: 'Michael Faraday', isCorrect: false },
      ],
    },
    {
      section: 'Science',
      questionText: 'Who formulated the theory of atomic structure with a nucleus surrounded by electrons?',
      answerOptions: [
        { answerText: 'Ernest Rutherford', isCorrect: true },
        { answerText: 'J.J. Thomson', isCorrect: false },
        { answerText: 'Niels Bohr', isCorrect: false },
        { answerText: 'Dmitri Mendeleev', isCorrect: false },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz completed, do something (e.g., show score)
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
      // Reset quiz
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="app">
      <h1>Quiz App</h1>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};
// return (
//   <div className="Copyright">
//     <p>&copy; All right to Abhaya Solutions</p>
//   </div>
// );

export default App;
