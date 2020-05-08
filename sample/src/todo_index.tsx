import * as React from 'react';

// IProps：reactにおけるpropsを明示的に型として定義したもの。名称は任意の文字列でOK ※ props：React における props は親の Component から渡されてくる情報のこと
// → 型を定義しておくことで、この Component にはtodosという string のリストと、string を受け取って void を返す関数が入った props が渡ってくることが明確に。
interface IProps {
  todos: string[];
  onClickAddButton: (todo: string) => void;
}

// IState：React における state を明示的に型として定義したもの。名称は任意の文字列でOK ※ React における state はこの Component の状態(主に UI)を表すもの
// → 型を定義することで、この Component はtextという文字列を状態として持つことを明示
interface IState {
  text: string;
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // Componentのstateの初期化
    this.state = { text: '' };
  }

  public render() {
    const { todos } = this.props;
    const { text } = this.state;
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <h1>TODO LIST</h1>
        <input type="text" value={text} name="" onChange={this.onTextChange} />
        <button onClick={this.onClickAddButton}>Add Todo</button>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
  // onTextChangeやonClickAddButtonのようなコールバック関数はクラスのメンバとして定義。こうすることで描画のたびに関数が生成されるのを防ぐ。
  // テキストが更新されたときのイベント関数
  private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.currentTarget.value });
  };
  // ボタンがクリックされたときのイベント関数
  private onClickAddButton = () => {
    const { onClickAddButton } = this.props;
    const { text } = this.state;
    onClickAddButton(text);
  };
}
