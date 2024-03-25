// Reactをインポートします。JSXを使用するために必要です。
import React from 'react';

// Mailboxコンポーネントを定義します。
function Mailbox(props) {
  // propsから未読メッセージを取得します。propsが未定義の場合は空の配列を使用します。
  const unreadMessages = props.unreadMessages || [];

  // JSXを返します。
  return (
    <div>
      <h1>Hello!</h1>
      {/* 未読メッセージがある場合のみ、メッセージ数を表示します。 */}
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

// NumberListコンポーネントを定義します。
function NumberList(props) {
  // propsから数字の配列を取得します。propsが未定義の場合は空の配列を使用します。
  const numbers = props.numbers || [];
  
  // 数字の配列をリストアイテムにマップします。
  const listItems = numbers.map((number) => (
    // 各アイテムにはユニークなキーを設定する必要があります。
    <li key={number.toString()}>{number}</li>
  ));
  
  // リストアイテムを含むul要素を返します。
  return <ul>{listItems}</ul>;
}

// Appコンポーネントを定義します。
function App() {
  // 数字の配列を定義します。
  const numbers = [1, 2, 3, 4, 5, 6];
  
  // 未読メッセージの配列を定義します。
  const messages = ['React', 'Re: React', 'Re:Re: React'];

  // JSXを返します。
  return (
    <div>
      {/* Mailboxコンポーネントを描画し、messagesを未読メッセージとして渡します。 */}
      <Mailbox unreadMessages={messages} />
      
      {/* NumberListコンポーネントを描画し、numbersを数字の配列として渡します。 */}
      <NumberList numbers={numbers} />
    </div>
  );
}

// Appコンポーネントをデフォルトエクスポートします。
export default App;