import { useState } from "react";
import {connect} from "react-redux"
import { actionCreaters } from "../store";
import Todo from "../components/ToDo";

function Home({toDos, addTodo}){
    const [text, setText] = useState("");

    function onChange(e){
        setText(e.target.value);

    }

    function onSubmit(e){
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    
    return (<>
    <h1>Todo</h1>
    <form>
        <input type="text" onChange={onChange} placeholder="write sth" value={text}></input>
        <button onClick={onSubmit}>submit</button>
    </form>
    <ul>{toDos.map(todo => <Todo {...todo} key={todo.id}/>)}</ul>
    </>
    )
    
}

function mapStateToProps(state){
    return {toDos:state};
}
function mapDispatchToProps(dispatch){
    return{
        addTodo:(text)=>dispatch(actionCreaters.addTodo(text))
    }
}
// mapStateToProps() 함수 통해 store로부터 state를 받아와 Home 컴포넌트에 적용시킴
export default connect(mapStateToProps, mapDispatchToProps)(Home);