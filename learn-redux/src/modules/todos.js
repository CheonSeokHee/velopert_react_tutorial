//액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//액션 생서함수 선언
let nextId = 1; /*todo 데이터에서 사용할 고유의 id*/

export const addTodo = text => ({ //새로운 할일,항목을 부여하는 액션
    type : ADD_TODO,
    todo : {
        id : nextId++, /*새 항목을 추가하고 nextId 값에 1을 더해준다*/
        text
    }
});

export const toggleTodo = id => ({ //id 값을 가지고 특정 항목 done 의 값을 바꿔주는 액션
    type: TOGGLE_TODO,
    id
});

//초기 상태 선언
//리듀서의 초기상태는 객체 형태일 필요는 없다
//배열, 원시 type도 가능
const initalState = [

    // id : 1,
    // text : '예시입니다',
    // done : false
];

export default function todos(state = initalState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo); // 새로운 항목 추가
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id //id가 일치한다면
                ? {...todo, done: !todo.done} //done 값을 반전시키고
                : todo //아니라면 그대로 유지
         );
    default: return state;
}
}
