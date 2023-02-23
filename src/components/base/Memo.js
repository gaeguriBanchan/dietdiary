/** @format */

import React from 'react';
import { useState } from 'react';

const Memo = () => {
  const [totalLength, setTotalLength] = useState('');
  const tL = (e) => {
    setTotalLength(e.target.value);
  };
  return (
    <div>
      <div className="bg-[#F6F6F6] rounded-2xl mb-8">
        <div className="p-8">
          <p className="text-textGray font-MuseoModerno font-normal text-[24px]">
            memo
          </p>
          <textarea
            className="font-normal w-full bg-[#F6F6F6] focus:outline-none p-3 text-[24px] resize-none h-[250px]"
            maxLength="150"
            value={totalLength}
            onChange={tL}
          />
          <p className=" left-0 text-xs text-textGray flex justify-end">
            <span>{totalLength.length}/150</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Memo;
