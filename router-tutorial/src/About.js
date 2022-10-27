import React from 'react';
//import qs from 'qs';
import {useSearchParams} from "react-router-dom";

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');

    const onToggleDetail = () => {
        setSearchParams({detail: detail === 'true' ? false : true});
    };

/*
const About = ({ location }) => {
    const query = qs.parse(window.location.search, { //router6 버전에서는 window.location 으로 접근
        ignoreQueryPrefix: true
    });

    const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열 형태
    //http://localhost:3001/about?detail=true 쿼리스트링
*/
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            <p>detail : {detail}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            {/*{detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}*/}
        </div>
    );
};

export default About;