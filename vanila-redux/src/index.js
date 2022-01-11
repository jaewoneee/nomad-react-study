import { createStore } from "redux";

const input = document.getElementById("name");
const list = document.getElementById("name-box");
const add = document.getElementById("add");

// 1. action type에 쓰일 string 값을 따로 변수에 담아둔다(오타 등의 문제 방지)
const ADD = "ADD";
const REMOVE = "REMOVE";

// 2. dispatch에 쓰일 action의 속성만 따로 정리
const addName = (text) => {
  return { type: ADD, name: text, id: Date.now() };
};
const removeName = (id) => {
  return { type: REMOVE, id: id };
};
// action 은 반드시 object 형태여야 하며, type 속성을 가져야 한다.
// action은 modifier(reducer)와 communicate 하게 해 주는 매개체
// *** state는 절대 직접적으로 변경시켜서는 안되며, action을 통해 새로운 state를 반환시키는 형식이 되어야 한다.
const nameModifier = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [action, ...state];
    case REMOVE:
      // filter 메소드를 통해 새로운 배열 반환
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const nameStore = createStore(nameModifier);

const handleAdd = () => {
  const name = input.value;
  nameStore.dispatch(addName(name));
};

const handleRemove = (e) => {
  const id = parseInt(e.target.parentNode.id);
  nameStore.dispatch(removeName(id));
};

const onChange = () => {
  const data = nameStore.getState();
  list.innerHTML = "";
  console.log(data);
  data.forEach((val) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "delete";
    btn.addEventListener("click", handleRemove);
    li.id = val.id;
    li.innerText = val.name;
    li.appendChild(btn);
    list.appendChild(li);
  });
};

// subscribe를 통해 state의 변화에 따른 이벤트 등록
nameStore.subscribe(onChange);

// ADD EVENT
add.addEventListener("click", handleAdd);
