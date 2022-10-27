import {Navigate} from "react-router-dom";

const MyPage = () => {
    const isLoggedIn = false;
    
    if(!isLoggedIn) {
        console.log("로그인을 해주세요")
        return <Navigate to="/login" replace={true}/>;
    };
    return <div>마이 페이지</div>
};
export default MyPage;



