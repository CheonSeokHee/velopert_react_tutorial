import React from "react";

//프레젠테이셔널 컴포넌트 선언
//UI에만 집중, 필요한 값들이나 함수는 props로 받아와서 구현
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    console.log(diff);
    const onChange = e => {
        // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
        onSetDiff(parseInt(e.target.value, 10));
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;