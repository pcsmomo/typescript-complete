import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

export const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const todos = useSelector<StoreState, Todo[]>((state) => state.todos);

  const onButtonClick = (): void => {
    dispatch(fetchTodos());
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};
