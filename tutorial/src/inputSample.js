import React, {useRef, useState} from "react";

function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickName: ''
    });

    const nameInput = useRef();
    const {name, nickName} = inputs; //비 구조화 할당을 통해 값 추출

    // //input값이 하나일 때 관리
    // const [text, setText] = useState('');
    // const onChange = (e) => {
    //     setText(e.target.value);
    // }
    // const onReset = () => {
    //     setText('');
    // }
    const onChange = (e) => {
        const {name, value} = e.target; //우선 e.target에서 name과 value값 추출

        setInputs({
            ...inputs, //기존의 input 객체를 복사한 뒤
            [name]: value, // name키를 가진 값을 value로 설정 name의 관한 value 그리고 nickName 값을 value
        });
    };
    const onReset = () =>{
        setInputs({
            name: '',
            nickName: ''
        });
        nameInput.current.focus(); //첫번째 DOM의 접근 == NAME값
    };


    // React 에서 리렌더링 되는 4가지 규칙이있어요
    // 1. state 가 변경되었을때, (메모리주소값만 비교해 ! -> shallow Copy)
    // 2. props 가 변경되었을때,
    // 3. 부모 컴포넌트가 재렌더릴ㅇ 되었을때,
    // 4. forceUpdate()

     return (
        <div>
            <input id="input"
                   name= "name"
                   placeholder="이름"
                   onChange={onChange}
                   value={name}
                   ref={nameInput}
            />
            <input name= "nickName"
                   placeholder="닉네임"
                   onChange={onChange}
                   value={nickName}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickName})

            </div>
        </div>
    );
}

export default InputSample;