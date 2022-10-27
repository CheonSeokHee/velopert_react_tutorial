//import React, {useState} from "react";
import React, { useReducer } from "react"; //useReducer 예제

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return  state - 1;
        default:
            return state;
    }
}
//useMemo, useEffect
function Counter() {

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({type:'INCREMENT'});
    };
    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    };

    /*const [number, setNumber] = useState(0);
    //첫번째 number를 0으로 세팅하겠다는 의미 두번째부터 setNumber로 값 세팅

    const onIncrease = () => {
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }*/

    return(
      <div>
          <h1>{number}</h1>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
      </div>

    );
}

export default Counter;
