import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

export default function Card({
  id,
  title,
  body,
  deleteHandler,
  doneHandler,
  isDone,
}) {
  const navigate = useNavigate();

  return (
    <StCardContainer>
      <div>
        <p>{title}</p>
        <p>{body}</p>

        <button onClick={() => deleteHandler(id)}>삭제하기</button>
        <button onClick={() => doneHandler(id)}>
          {isDone ? '취소' : '완료'}
        </button>
        <button
          onClick={() => {
            navigate(`${id}`);
          }}
        >
          상세페이지
        </button>
      </div>
    </StCardContainer>
  );
}

const StCardContainer = styled.div`
  div {
    background-color: grey;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;

    button {
      cursor: pointer;
      margin: 10px;
      outline: none;
      border: none;
      transition: 0.2s;
      font-weight: 800;
      border-radius: 10px;
      height: 40px;

      &:hover {
        background-color: red;
        color: #fff;
      }
    }

    p:first-child {
      font-size: 30px;
      font-weight: 800;
    }
  }
`;
