import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    // useSelector 에서 꼭 객체를 반환 할 필요는 없음
    // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 된다.
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    //onCreate는 Todos에서만 사용되는반면 onToggle 은 리렌더링이 빈번하게 이루어지는 TodoItem 까지 내려가기 때문
    const onCreate =  text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

    return <Todos todos={todos}
                  onCreate={onCreate}
                  onToggle={onToggle} />;
}

export default TodosContainer;