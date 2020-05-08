import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoIndex from './todo_index'; // TodoIndexの部分はキャメルケースであれば任意の文字列でOK。※アンダーバーなどは使用不可
class App extends React.Component {
  public render() {
    return (
      <div>
        <TodoIndex
          todos={['foo', 'bar']}
          onClickAddButton={(todo: string): void => {
            console.log(todo);
          }}
        />
      </div>
    );
  }
}

export default App;
