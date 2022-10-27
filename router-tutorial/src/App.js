import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import About from './About';
import Home from './pages/Home';
import Profiles from './Profiles';
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout/>}> {/*Outlet 처리*/}
                    <Route path="/" element={<Home />}  exact={true}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/info" element={<About />} />
                </Route>
                {/* 서브라우팅 */}
                <Route path="/profiles/*" element={<Profiles/>} />
                <Route path="/login" element={<Login />}/>
                <Route path="/mypage" element={<MyPage />}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
            </ul>
            <hr/>

        </div>
    );
};

export default App;