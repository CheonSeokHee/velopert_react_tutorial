import {Outlet, useNavigate} from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goProfiles = () => {
        navigate('/profiles',{replace: true}) //replace: page 이동 시 현재 page 정보를 남기지 않음
          //Home -> About -> 프로필보기 -> 브라우저 뒤로가기 -> 이전버튼 클릭시 처리됨
    }

    return(
        <div>
            <header style={{background: 'lightgray', padding: 16, fontSize:24}}>
                Header
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goProfiles}>프로필보기</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;