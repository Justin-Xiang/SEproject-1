/* eslint-disable no-unused-vars */
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/question.scss';
import QuestionConstructor, { ISingleOpQuestion } from '../utils/question';
import { Question } from './Question';
import { User } from '../utils/user';
function toGrade(v: number) {
  let grade = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
  return grade[v];
}
let index = 0;

export const WrongSet = observer(
  (props: {
    user: User;
    
  }) => {
    const [questions, setQuestions] = useState([] as ISingleOpQuestion[]);
    const [checked, setChecked] = useState(false);
    const [score, setScore] = useState(-1);
    const [reload, setReload] = useState(false);
    useEffect(() => {
      QuestionConstructor.getWrongQuestion(props.user.id).then((res: any) => {
        setQuestions(res);
      });
      return () => {
        setChecked(false);
        setScore(-1);
      };
    }, [reload]);
    useEffect(() => {
      let i = 0;
      let rightlist: Number[] = [];
     
      if (!checked) {
        return;
      }
      questions.forEach((q) => {
        //console.log(props.level.value);
        if (q.result === q.answer) {
          i++;
          rightlist.push(q.id);
        } 
      });
      let formValues = {
        trueId: rightlist,
        id: props.user.id
      };
      console.log(formValues);
      fetch('http://47.96.224.161:8080/checkMistake', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(formValues),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));

      console.log('already checked');
      setScore(i);
    }, [checked]);
    useEffect(() => {
      if (checked && score !== -1) {
        alert('你消灭了' + score + '道错题!');
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
            更多错题
          </button>
        </div>
      </>
    );
  }
);
