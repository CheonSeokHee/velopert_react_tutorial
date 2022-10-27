import React from "react";
import {useParams} from "react-router-dom";

const profileData = {
    cheon :{
        name : '천석희',
        description : 'Fronted Engineer @ cheon'
    },
    seok : {
        name : '엔키아',
        description: '성남시 분당구 대왕판교로'
    }
};

const Profile = () =>  {

    const { username } = useParams(); //router 6버전에선 useParams() 형식으로 받아줘야 조회 가능  ??????????????????????????
    console.log(useParams())
    const profile = profileData[username];

 //   console.log(useParams());
   // console.log(useSearchParams());

    if(!profile){
        return (
            <div>데이터가 존재하지 않습니다</div>
        )
    }
    return(
        <div>
            <h3>{username}({profile.name})</h3>
        <p>
            {profile.description}
        </p>
        </div>
    )
};
export default Profile;