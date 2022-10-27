import {combineReducers} from "redux";
import counter from './counter';
import todos from "./todos";

//여러개의 리듀서를 합치는 함수 선언, 합쳐진 리듀서는 루트 리듀서가 된다.
//combineReducers 사용
const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;