const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


//액션 생성함수 만들기
//생성 후 export 키워드로 내보낸다 -> 재사용하기 위함
export const setDiff = diff => ({type : SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

//초기 상태 선언
const initalState = {
    number : 0,
    diff : 1
};

//리듀서 선언
//리듀서는 export default로 내보내기 한 모듈당 하나만 선언하자
export default function counter(state = initalState, action){ //state를 어떻게 바뀌는지 코드
    switch (action.type){
        case SET_DIFF: //action 이름 
            //action.diff = state.diff 는 다른것이다. 새로운 action 객체를 만들어서 바뀐 값만 업데이트하므로
            return{
                ...state,
                diff: action.diff // 바뀌는 부분
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff //action.diff로 선언하면 값을 못가져온다
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
}