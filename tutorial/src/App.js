import React, { useCallback, useMemo, useRef, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


function countActiveUsers(users){
  //이렇게만 구현한다면 input 값을 적을때 마다 함수가 호출되는 단점이 있다. ==> 자원 낭비
  //users의 정보가 변화 시에만 호출해야함 ==> useMemo 함수 사용(이전에 값을 재사용한다는 의미)
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}

 const initialState ={
      inputs: {
        username: '',
        email: ''
      },
      users : [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active:true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active:false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active:false
        }
      ]
 };

//reducer 함수 구현 객체의 불변성 고려
function reducer(state, action){
    debugger;
    switch (action.type){
        case 'CHANGE_INPUT' : //입력창
            return{
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name] : action.value
                }
            };
        case 'CREATE_USER': //등록
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER': //active 변경
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? {...user, active: !user.active} : user
                )
            };
        case 'REMOVE_USER': // 삭제
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        default:
            return state;
    }
}

//UserDispatch 라는 이름으로 내보낸다
//어디서든지 dispatch 를 사용하겠다
//export const UserDispatch = React.createContext(null);


function App() {

  const [state, dispatch] = useReducer(reducer, initialState); //state값 안에는 users와 inputs값 포함
  const { users } = state;
  const { username, email } = state.inputs;
  const nextId = useRef(4); //기존에 3개가 등록되어있기 때문에

  
  //reducer onChange
  const onChange = useCallback((e) => {
          const {name, value} = e.target;
          dispatch({
              type : 'CHANGE_INPUT',
              name,
              value
          })
      },
      []
  );

  const onCreate = useCallback(() => {
          dispatch({
              type : 'CREATE_USER',
              user:{
                  id : nextId.current,
                  username,
                  email
              }
          });
          nextId.current += 1;
      },
      [username, email]
  );

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []); //배열이 비어있는 이유는 함수를 계속 재사용하겠다는 의미


    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, []);



  /*const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email, id} = inputs;
  //useCallback 함수 적용
  const onChange = useCallback(  
    e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
      //[]의 의미는 key값으로 쓰겠다는 의미
      //[name] 이 username과 email 두가지의 경우가 있는데, 
      //onChange라는 하나의 함수로 여러값을 저장하기 위해서 사용한
      //[e.target.name] : e.target.value 이런식으로 state에 저장을하면 input마다 
      //다른 함수를 사용하지 않고 여러개 input값을 저장할 수 있다. 
      //username:e.target.value, email: e.target.value 이렇게 dynamic하게 key값이 들어감

    });
  },
  [inputs]
  );


  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active:true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:false
    }
  ]);

  const nextId = useRef(4);
  //useCallback 함수 적용
  const onCreate = useCallback (() => {
    const user = {
      id:nextId.current,
      username,
      email
    };
    //파라미터에서 최신 users를 조회 == username, email 바뀔때만 조회
    setUsers(users =>[...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  },[username, email]
  );

  const onUpdate = () => {
    setUsers(
      users.map(user => user.id === id ? {...user, username: username, email : email} : user)
    )
    setInputs({
      username: '',
      email: '',
      id: ''
    })
  }

  const onRemove = useCallback( id => {
    //user.id가 id인것을 제거함
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만들게함
    //setUsers에 등록하는 콜백함수의 파라미터에서 최신 users를 참조할 수 있기 때문에
        // value: users가 갖는 의미는 컴포넌트가 처음 만들어질 때 한번 딱 만들고, 그 이후로는 계속 재사용!! 그렇기때문에 deps에 배열을 비어도됨..?
    // 기존 deps에 users가 들어있기 때문에 배열이 바뀔때마다 함수가 새로 만들어져서 리렌더링 되고 있던 것
    setUsers(users => users.filter(user => user.id !== id));
  },[]
  );

  const onToggle = useCallback(id => {
    //id 값을 비교해서 id가 다르다면 그대로 두고
    //같다면 active 값을 변경(반대의 값으로 변경시켜줌 true->false)시켜주는 로직
    //value: users가 갖는 의미는 컴포넌트가 처음 만들어질 때 한번 딱 만들고, 그 이후로는 계속 재사용!! 그렇기때문에 deps에 배열을 비어도됨..?
    //기존 deps에 users가 들어있기 때문에 배열이 바뀔때마다 함수가 새로 만들어져서 리렌더링 되고 있던 것
    setUsers(
     users => users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  },[]
  );

  const onModify = user =>{
    //props로 해당 user 객체를 받아온 다음에 setInputs을 통해 input태그에 계정명과 이메일,
    // id(추후 update해주기 위해)를 받아옴
    setInputs({
      username : user.username,
      email : user.email,
      id : user.id
    })
  }
*/
  const count = useMemo( ()=> countActiveUsers(users), [users] );
  //(첫번째 파라미터 = 어떻게 연산할지 정의하는 함수),[두번째 파라미터 = deps 배열]

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
          /*onUpdate={onUpdate}*/
      />
      <UserList users={users}
                onRemove={onRemove}
                onToggle={onToggle}
            /*onModify={onModify}*/ />
      <div>활성 사용자 수: {count} </div>
    </>
  );
  }

export default App;



/*
// const Parent = ({children}) => {
//
//   return <div style={{color: "white"}}><h1>부모요소입니다.</h1>{children}</div>
//
// }

function App() {
  //1.JSX
  // const name = 'react';
  // //스타일을 주고 싶을땐 객체를 따로 만들어 적용시키자
  // //그런 다음 div 값 안에 해당 name이 쓰일 수 있게 해주기
  // const style ={
  //   backgroundColor : 'black',
  //   color : 'aqua',
  //   fontSize : 24,
  //   padding :'1rem'
  // };
  //----------------1 끝---------------

  return (
      <UserList/>

      // <InputSample/>
      //   //2.Wrapper는 부모 props
      //   <Wrapper>
      // <Hello name="방구석희" color="Red" isSpecial/>
      // <Hello color="blue"/>
      // {/!*1.JSX <div style={style}>{name}</div>*!/}
      // {/!*<div className="gray-box"></div> ------1 끝-------*!/}
      //   </Wrapper>
      // -------------2 끝--------------------

      // //3.useState
      // <Counter>
      // </Counter>
      // ------------------3 끝-------------------
  );
}*/
