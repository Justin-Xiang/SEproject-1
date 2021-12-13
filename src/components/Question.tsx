import React, { useEffect, useRef, useState } from 'react';
import '../css/question.scss';
import { useDebounce } from '../utils/hooks';
import { ISingleOpQuestion } from '../utils/question';

export const Question = (props: {
  question: ISingleOpQuestion;
  checked: boolean;
}) => {
  const [result, setResult] = useState(NaN);
  const [checkRes, setRes] = useState('not-check');
  const fn = useDebounce((e: any) => {
    props.question.answer = parseInt(e.target.value);
  });
  const input = useRef(null);
  useEffect(() => {
    if (props.checked) {
      if (props.question.answer === props.question.result) {
        setRes('right');
      } else {
        setRes('wrong');
      }
      (input.current as any).value = props.question.result;
    }
  }, []);
  return (
    <div className="question-item">
      <div className="question-info">
        <span className="op-number question-span">{props.question.num1}</span>
        <span className="question-span">{props.question.op}</span>
        <span className="op-number question-span">{props.question.num2}</span>
        <span className="question-span">=</span>
      </div>
      <input
        className={
          'question-result' + (checkRes === 'not-check' ? '' : ` ${checkRes}`)
        }
        disabled={checkRes !== 'not-check'}
        onChange={(e) => {
          fn(e);
        }}
        ref={input}
      />
    </div>
  );
};
