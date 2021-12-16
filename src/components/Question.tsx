import React, { useEffect, useRef, useState } from 'react';
import '../css/question.scss';
import { useDebounce } from '../utils/hooks';
import { ISingleOpQuestion } from '../utils/question';

export const Question = (props: { question: any; checked: boolean }) => {
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
  if (props.question.flag === 1) {
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
  } else if (props.question.flag === 2) {
    return (
      <div className="question-item">
        <div className="question-info">
          <span className="op2-number question-span">
            {props.question.num1}
          </span>
          <span className="question-span">{props.question.op1}</span>
          <span className="op2-number question-span">
            {props.question.num2}
          </span>
          <span className="question-span">{props.question.op2}</span>
          <span className="op2-number question-span">
            {props.question.num3}
          </span>
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
  } else if (props.question.flag === 3) {
    return (
      <div className="question-item">
        <div className="question-info">
          <span className="question-span">(</span>
          <span className="op2-number question-span">
            {props.question.num1}
          </span>
          <span className="question-span">{props.question.op1}</span>
          <span className="op2-number question-span">
            {props.question.num2}
          </span>
          <span className="question-span">)</span>
          <span className="question-span">{props.question.op2}</span>
          <span className="op2-number question-span">
            {props.question.num3}
          </span>
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
  } else if (props.question.flag === 4) {
    return (
      <div className="question-item">
        <div className="question-info">
          <span className="op2-number question-span">
            {props.question.num1}
          </span>
          <span className="question-span">{props.question.op1}</span>
          <span className="question-span">(</span>
          <span className="op2-number question-span">
            {props.question.num2}
          </span>

          <span className="question-span">{props.question.op2}</span>
          <span className="op2-number question-span">
            {props.question.num3}
          </span>
          <span className="question-span">)</span>
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
  } else {
    return <div></div>;
  }
};
