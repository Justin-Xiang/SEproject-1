import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import "../css/question.scss";
import QuestionConstructor, { ISingleOpQuestion } from "../utils/question";
import { Question } from "./Question";
import { User } from "../utils/user";
let index = 0;
export const WrongSet = observer((props: { user: User }) => {
  const [questions, setQuestions] = useState([] as ISingleOpQuestion[]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(-1);
  const [reload, setReload] = useState(false);
  useEffect(() => {});
  return (
    <>
      <div className="question-container">
        <div className="questions">
          {questions.map((v) => (
            <Question checked={checked} key={index++} question={v} />
          ))}
        </div>
      </div>
      <div className="toolbar">
        <button
          className="toolbar-btn"
          onClick={() => {
            setChecked(true);
          }}
        >
          check
        </button>
        <button
          className="toolbar-btn"
          onClick={() => {
            setReload(!reload);
          }}
        >
          再来一套
        </button>
      </div>
    </>
  );
});
