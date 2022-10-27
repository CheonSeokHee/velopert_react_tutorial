import React from "react";
import {Link, Route, Routes } from 'react-router-dom'
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/cheon?test=1">cheon</Link>
                </li>
                <li>
                    <Link to="/profiles/seok">seok</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
                <Route path=":username" element={<Profile/>} />
            </Routes>
        </div>
    )
}

export default Profiles;