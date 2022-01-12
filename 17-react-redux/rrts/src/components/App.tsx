import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

export const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  // const [fetching, setFetching] = useState(false);
  // to implement fetching status
  // It'd better add fetching success/failure(error) actions

  const todos = useSelector<StoreState, Todo[]>((state) => state.todos);

  const onButtonClick = (): void => {
    dispatch(fetchTodos());
    // setFetching(true);
  };

  const onTodoClick = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};
