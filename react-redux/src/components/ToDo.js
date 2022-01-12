import React from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import { actionCreaters } from "../store";

function Todo({text, onBtnClick, id}){
    return <li>
        <Link to={`/${id}`}>
        {text}
        </Link>
        <button onClick={onBtnClick}>Delete</button>
    </li>
}

function mapDispathToProps(dispatch, ownProps){
    return {
        onBtnClick:()=>dispatch(actionCreaters.deleteTodo(ownProps.id))
    }
}

export default connect(null, mapDispathToProps)(Todo);