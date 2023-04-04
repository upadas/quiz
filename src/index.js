import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { quizComponents } from "./QuizComponents.js";
import QuizComponentsBuilder from "./QuizComponentsBuilder.js";

// Main Component
function QuizComponentDashboard() {
  return (
    <div>
      <h1>iNeuron Quiz Zone</h1>
      <div className="c_quiz_dashboard">
        {quizComponents.map((quiz) => {
          return (
            <>
              <QuizComponentsBuilder
                key={quiz.qid}
                qlogo={quiz.qlogo}
                qname={quiz.qname}
              ></QuizComponentsBuilder>
            </>
          );
        })}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizComponentDashboard />
  </React.StrictMode>
);
