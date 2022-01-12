// 리덕스 툴킷 활용한 리팩토링

import {createStore} from "redux";
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit"

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addTodo = (text)=>{
//     return {type: ADD, text}
// };
// const deleteTodo = id =>{
//     return {type:DELETE, id:parseInt(id)}
// };

const addTodo = createAction("ADD");
const deleteTodo = createAction("Delete");

// const reducer = (state=[], action) => {
//     switch(action.type){
//         case ADD:
//         return [{text:action.text, id: Date.now() }, ...state];
//         case DELETE:
//             return state.filter(toDo => toDo.id !== action.id);
//         default:
//             return state;
//     }
// }

// createReducer를 활용하면 state 와의 mutate가 가능하다
// createReducer()에서는 새로운 state를 리턴하거나 state를 mutate할 수 있다.
// 뭔가를 리턴할 때는 새로운 state여야만한다.
const reducer = createReducer([],{
    //  1. mutate
    [addTodo]:(state, action)=>{ 
        state.push({text:action.payload, id:Date.now()});
    },
    // 2. return new state
    [deleteTodo]:(state, action)=>state.filter(toDo => toDo.id !== action.id)
    
})



// const store = createStore(reducer);
const store = configureStore({reducer});

export const actionCreaters = {
    addTodo, deleteTodo
}
export default store;