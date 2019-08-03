import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import style from './app.less';
import TS from './TSTest';

const App = () => (
  <div className={style.Container}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <TS text="tstest" />
  </div>
);
export default App;
