
import { useRef, useState } from "react";
import TodoList from "./Components/TodoList";



function App() {

  const inputText = useRef();
  const key = useRef(0);

  const [items, setItems] = useState([
    {
      id: 0,
      name: '양치하기',
      date: '오늘까지'
    },
    
  ])

  const hInput = () => {

    key.current += 1;

    setItems((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: key.current,
          name: inputText.current.value,
          date: '오늘까지'
        }
      ]
  })

  }
  return (
    <div className="app">

      <input ref={inputText}></input>
      <button onClick={hInput}>스케줄 입력</button>
      <hr></hr>
      <TodoList items={items}/>

    </div>
  );
}
export default App;
