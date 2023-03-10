import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import myIcon from "../../../assets/images/icon/icon_b_my.png";
import myProfile from "../../../assets/images/icon/icon_profile_big.png";
import { MypageContext } from "../../../context/MypageContext";

const MyPageProfile = () => {
  const { toggleChange, human } = useContext(MypageContext);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);
  const [myImg, setMyImg] = useState("");
  const hard = () => {
    // console.log("여기?", userInfo.miHard);
    if (user.miHard === 0) {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          건강한 다이어터
        </p>
      );
    } else if (user.miHard === 1) {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          쉽게 가고싶은 다이어터
        </p>
      );
    } else if (user.miHard === 2) {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          탄탄한 몸매를 원하는 다이어터
        </p>
      );
    } else {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          극한의 몸매를 원하는 다이어터
        </p>
      );
    }
  };

  useEffect(() => {
    hard();
    axios
      .get(`http://192.168.0.16:9876/api/member/info?token=${user.miToken}`)
      .then((res) => {
        // console.log(res.data);
        // 사용자정보 업데이트
        setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setMyImg(userInfo.miImg);
    // console.log(myImg);
  }, []);
  // console.log(user);
  return (
    <div className="h-[770px] m-auto mb-[20px] rounded-2xl border bg-white ">
      <div className="flex justify-between">
        <div className="flex m-8">
          <img
            src={myIcon}
            alt="profile"
            className="w-[20px] h-[20px] self-center mr-3"
          />
          <p className="text-main text-xl">프로필</p>
        </div>
        <button
          onClick={() => toggleChange()}
          className="m-8 text-sm w-[70px] h-[25px] text-textAsh border-solid border-2 border-textAsh rounded-full"
        >
          수정
        </button>
      </div>
      <div className="w-[300px] h-[300px] m-auto rounded-full bg-textGray mb-[50px] overflow-hidden">
        <img
          // src={`http://192.168.0.16:9876/api/member/image/${userInfo.miImg}`}
          src={myProfile}
          alt="profile"
          className="w-[300px] h-[300px] "
        />
      </div>
      <p className="text-4xl text-textBlack text-center mb-[10px]">
        {userInfo.miName}
      </p>
      {hard()}
      <div className="flex justify-around">
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">나이</p>
          <p className="text-center text-textGray text-4xl">
            {userInfo.miAge} 세
          </p>
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">신장</p>
          <p className="text-center text-textGray text-4xl">
            {userInfo.miTall} cm
          </p>
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">체중</p>
          <p className="text-center text-textGray text-4xl">
            {user.miWeight} kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPageProfile;
