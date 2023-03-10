/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
// 임시 로고
import logo from '../../assets/images//icon/logo_d-day.png';
import food from '../../assets/images/food.png';
import water from '../../assets/images/water.png';
import drug from '../../assets/images/drug.png';
import me from '../../assets/images/man.png';

export const Sidebar = () => {
  return (
    <div className="w-[200px] h-[800px] bg-main rounded-3xl">
      <div className="flex h-full justify-center text-center">
        <div className="grid h-3/5  items-center justify-center align-middle text-center">
          <Link className="self-center" to="/dailyMenu">
            <img className="self-center m-auto" src={logo} alt="logo" />
          </Link>
          <Link
            to="/dailyMenu"
            className="flex justify-center items-center px-10 text-white h-7 rounded-xl focus:bg-white focus:text-main hover:bg-white hover:text-main"
          >
            <img
              src={food}
              alt=""
              className="w-6 h-6 opacity-60 border-2 rounded-xl items-center bg-main"
            />
            <p className="ml-2 text-xl">밥</p>
          </Link>
          <Link
            to="/drink"
            className="flex justify-center items-center px-10 text-white h-7 rounded-xl focus:bg-white focus:text-main hover:bg-white hover:text-main"
          >
            <img
              src={water}
              alt=""
              className="w-6 h-6 opacity-60 border-2 rounded-xl items-center bg-main"
            />
            <p className="ml-2 text-xl">물</p>
          </Link>
          <Link
            to="/supplement"
            className="flex justify-center items-center px-10 text-white h-7 rounded-xl focus:bg-white focus:text-main hover:bg-white hover:text-main"
          >
            <img
              src={drug}
              alt=""
              className="w-6 h-6 opacity-60 border-2 rounded-xl items-center bg-main"
            />
            <p className="ml-2 text-xl">약</p>
          </Link>
          <Link
            to="/mypage"
            className="flex justify-center items-center px-10 text-white h-7 rounded-xl focus:bg-white focus:text-main hover:bg-white hover:text-main"
          >
            <img
              src={me}
              alt=""
              className="w-6 h-6 opacity-60 border-2 rounded-xl items-center bg-main"
            />
            <p className="ml-2 text-xl">나</p>
          </Link>
        </div>
        <p className="text-white absolute top-[750px] font-NanumSquareNeo">
          나의 식단일지
        </p>
      </div>
    </div>
  );
};
