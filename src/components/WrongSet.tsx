import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import '../css/question.scss'
import QuestionConstructor, { ISingleOpQuestion } from '../utils/question';
import { Question } from './Question';

let index = 0;
export const WrongSet = observer(
  (props: { level: { value: number; setLevel(v: number): void } }) => {
    const [questions, setQuestions] = useState([] as ISingleOpQuestion[]);
    const [checked, setChecked] = useState(false);
    const [score, setScore] = useState(0);
    const [reload, setReload] = useState(false);
    useEffect(() => {
      let q: ISingleOpQuestion[] = [];
      // for (let i = 0; i < 50; ++i) {
      //   q.push(QuestionConstructor.createQuestion(props.level.value));
      // }
      setQuestions(q);
      return () => {
        setChecked(false);
      };
    }, [props.level.value, reload]);
    useEffect(() => {
      let i = 0;
      if (!checked) {
        return;
      }
      questions.forEach((q) => {
        if (q.result === q.answer) {
          i++;
        }
      });
      console.log('already checked');
      setScore(i);
    }, [checked]);
    useEffect(() => {
      if (checked) {
        alert('你获得了' + score + '分');
      }
    }, [score]);
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
  }
);