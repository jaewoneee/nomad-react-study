import React from "react";
import {connect} from "react-redux";
import { actionCreaters } from "../store";

function Todo({text, onBtnClick}){
    return <li>
        {text}<button onClick={onBtnClick}>Delete</button>
    </li>
}

function mapDispathToProps(dispatch, ownProps){
    return {
        onBtnClick:()=>dispatch(actionCreaters.deleteTodo(ownProps.id))
    }
}

export default connect(null,mapDispathToProps)(Todo);