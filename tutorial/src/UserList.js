import React, { useEffect } from 'react';

const User = React.memo( function User({ user, onRemove, onToggle, onModify} ) {
   //마운트
  useEffect(()=> {
    console.log('user 값이 설정됨');
    console.log(user);
    //언마운트
    return () => {
    console.log('user가 바뀌기 전임');
    console.log(user);
    };
  },[user]); //sideEffect
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >{user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => {onRemove(user.id)}}>삭제</button>
      <button onClick={() => onModify(user)}>수정</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle, onModify}) {


  return (
    <div>
        {/*<User user={users[0]} />*/}
        {/*<User user={users[1]} />*/}
        {/*<User user={users[2]} />         동적인 배열 렌더링 불가   */}

      {users.map((user,index) => (
        <User
          user={user}
          key={index} // id값이 없다면 콜백함수에 두번째 파라미터 값을 index 키로 사용
          onRemove={onRemove}
          onToggle={onToggle}
          onModify={onModify}
        />
      ))}
    </div>
  );
}


export default React.memo(UserList);