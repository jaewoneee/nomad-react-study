import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      //  todo 내용이 없으면 해당 함수를 작동하지 않게 함
      return;
    }
    // setter 함수 호출시 함수를 인자(argument)로 보내게 된다면,
    // 그 콜백 함수의 첫번째 인자는 해당 setter 함수의 짝지인 (현재의) state가 된다!
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  return (
    <div className="App">
      <h1>My ToDos({toDos.length})</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="Write your to do"
        ></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
