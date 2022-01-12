import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail(props){
    const id = useParams();
    console.log(props);
    return (
        <h1>Detail</h1>
    )
}

function mapStateToProps(state, ownProps){
    console.log(state)
    console.log(ownProps);
    return{toDos:state};
}

export default connect(mapStateToProps)(Detail);


// ownProps 찍어도 빈 오브젝트였음.. 아래는 그 답변,
// The component has now deprecated its children & render props, 
// so it’s no longer possible to pass router props like history / location / match to components. 
// You should now use the useNavigate / useLocation / useParams hooks.

// 아마 이 오류를 겪고 계신 분들은 
// react-router-dom 버전이 6 이상이실 겁니다!! 
// 6버전부터는 더이상 history, location, match 등의 props를 
// component에서 받을 수 없다고 합니다. 
// 니코 선생님이 초반에 알려주신 useParams 이용해서 진행하면 될 듯 합니다!