import { createContext, useState } from "react";

export const QuizContext = createContext();

function QuizProvider({ children }) {
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
}
export default QuizProvider;