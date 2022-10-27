import React, {createContext, useContext, useState} from "react";

const MyContext = createContext('defaultValue');

function Child(){
    const text = useContext(MyContext);
    return <div>안녕하세요?!@ {text} </div>
}

function Parent({text}){
    return <Child text={text} />
}

function GrandParent({text}){
    return <Parent text={text}/>
}

function ContextSample() {
    const [value, setValue] = useState();
    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'} >
            <GrandParent/>    
            <button onClick={() => setValue(!value)}>클릭하세요</button>
        </MyContext.Provider>
        
    )
}
export default ContextSample;