import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

// interface AppProps {
//   todos: Todo[];
//   fetchTodos(): any;
// }

export const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const todos = useSelector<StoreState>((state) => state.todos);

  return <div>Hi there</div>;
};
