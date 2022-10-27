import React from "react";

function useInputs(initalForm){
    const [form, setForm] = useState(initalForm); //form 초기화 시켜주는 작업에 initalForm을 파라미터로 받음

    const onChange = useCallback( (e) => {
        const {name, value} = e.target; //e.target에서 추출하고
        setForm(form =>  ({ ...form, [name]:value }));
        }, []);

    const reset = useCallback(
        () => {
            callback
        },
        [input],
    );
    //form을 초기화 시켜주는 역할


}
