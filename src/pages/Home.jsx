import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import Card from '../Components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { addtodo, deletetodo, switchtodo } from '../redux/modules/todos';

const Home = () => {
  const todo = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const addTodo = () => {
    const newTodo = {
      id: shortid.generate(),
      title: titleValue,
      body: bodyValue,
      isDone: false,
    };

    if (titleValue === '' || bodyValue === '') {
      window.alert('제목과 내용 둘다 입력 해주세요');
    } else {
      dispatch(addtodo(newTodo));
      setTitleValue('');
      setBodyValue('');
    }
  };

  const doneHandler = (id) => {
    dispatch(switchtodo(id));
  };

  const deleteHandler = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    dispatch(deletetodo(newTodo));
  };

  return (
    <StContainer>
      <header>
        <div>
          제목 &nbsp;
          <input
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
        </div>
        <div>
          내용 &nbsp;
          <input
            value={bodyValue}
            onChange={(e) => {
              setBodyValue(e.target.value);
            }}
          />
        </div>
        <button onClick={addTodo}>추가하기</button>
      </header>

      <StSection>
        <div>working</div>

        {todo
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                isDone={item.isDone}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
              />
            );
          })}
        <div>done</div>
        {todo
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                isDone={item.isDone}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
              />
            );
          })}
      </StSection>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px;
`;

const StSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px;
`;
