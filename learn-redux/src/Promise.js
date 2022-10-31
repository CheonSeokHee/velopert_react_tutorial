
//Promise 함수 예제
function devide (numA , numB)  {
    return  new Promise((resolve, reject) => {
            if(numB === 0 ) reject(new Error('에러가 발생했습니다'));
            else resolve(numA / numB);
    });
}

devide(8, 2)
    .then((result) => console.log("성공:", result))
    .catch((error) => console.log("실패:", error));



//fetch GET 방식
fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));


fetch('http://localhost:8080')
    .then((response) => response.json())
    .then((data) => console.log(data));