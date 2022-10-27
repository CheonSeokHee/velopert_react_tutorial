import React, {useEffect} from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import {renderToReadableStream} from "react-dom/server";

function App() {
    // es5
    // fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
    //     response.json()
    // ).then((data) => console.log(data))
    //  .catch((error)=> console.log('통신 실패'))

    // const data = { username: 'example' };
    // fetch('https://jsonplaceholder.typicode.com/todos/1', {
    //     method: 'POST', // 또는 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('성공:', data);
    //     })
    //     .catch((error) => {
    //         console.error('실패:', error);
    //     });


    //fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Test",
            body: "I am testing!",
            userId: 1,
            userName : "CheonSeokHee"
        }),
    }).then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log('통신 실패입니다'))



    //async, await
    // async function post(host, path, body, headers = {}) {
    //     const url = `https://${host}/${path}`;
    //     const options = {
    //         method : "POST",
    //         headers : {
    //             "Content-Type" : "application / json",
    //             ...headers
    //         },
    //         body : JSON.stringify(body),
    //     };
    //     const res = await fetch(url, options);
    //     const data = await res.json();
    //     if(res.ok){
    //         return data;
    //     } else {
    //         throw Error(data);
    //     }
    // }
    //
    // post("jsonplaceholder.typicode.com", "posts", {
    //     title: "Test",
    //     body: "I am testing!",
    //     userId: 1,
    // })
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error));

    
    //async 예제
    async function fetchAuthorName(postId){
        //우선 받고자 하는 URL의 postId를 받고 나서 -> 우리가 userId를 모르기 때문에 받아야한다
        const postResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        //console.log('postResponse', postResponse)
        //받은 postResponse 형태를 jsaon 형태로 변환
        const post =  await postResponse.json();
        //console.log('post', post)
        //json 형태로 변환된 객체중 필요한걸 추출
        const userId = post.userId;
        //console.log('userId', userId)
        //추출한 id를 통해 원하는 users 조회
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        console.log('userResponse', userResponse)
        //다시 json 형태로 변환
        const user = await userResponse.json();
        console.log('user', user)
        //원하는 값 추출
        return user.name;
    }
    fetchAuthorName(1).then((name) => console.log("name:", name));


    return (
        <div>

            {/*<CounterContainer />*/}
            {/*<hr />*/}
            {/*<TodosContainer />*/}

        </div>
    );
}

export default App;