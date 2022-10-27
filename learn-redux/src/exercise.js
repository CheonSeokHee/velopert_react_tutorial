import { createStore } from 'redux';

const initalState = {
    counter : 0,
    text : '',
    list : []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
    type : INCREASE
});

const decrease = () => ({
    type : DECREASE
});

const changeText  = text =>({
    type : CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

function reducer(state = initalState, action) {
    switch (action.type){
        case INCREASE :
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE :
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT :
            return {
                ...state,
                text: action.text
            };
        case  ADD_TO_LIST :
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default : return state;
    }
}
const store = createStore(reducer);
//console.log(reducer.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
//unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id :1, text: '와우우'}));

window.store = store;