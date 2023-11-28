import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const todo = useSelector((state) => {
    return state.todos;
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const filteredTodo = todo.filter((item) => {
    return item.id === id;
  });
  return (
    <StBodyBox>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        뒤로가기
      </button>

      <StContainer>
        {filteredTodo.map((item) => {
          return (
            <>
              <p>상세내용</p>
              <div>
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            </>
          );
        })}
      </StContainer>
    </StBodyBox>
  );
};

const StBodyBox = styled.div`
  button {
    width: 100px;
    height: 60px;
    border-radius: 10px;
    border: none;
    background-color: aqua;
    cursor: pointer;
  }
`;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 300px;

  p:first-child {
    font-size: 50px;
    font-weight: 800;
  }

  div {
    background-color: red;
    width: 300px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;

    P:first-child {
      font-size: 30px;
      font-weight: 800;
    }
  }
`;

export default Detail;
