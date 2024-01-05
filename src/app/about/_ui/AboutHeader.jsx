import React from "react";
import Image from "next/image";
import logo from "../../../../public/pageLogonav.png";
export default function AboutHeader({ header }) {
  return (
    <div>
      {header === "" && (
        <div className='About__Header_Logo'>
          <h2 className=' abt-tag'>About</h2>
          <Image className='img-abt' src={logo} alt='Logo' />
        </div>
      )}
      <h3 className='About__Header'>{header}</h3>
    </div>
  );
}
