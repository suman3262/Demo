import React from 'react';
import {GiNetworkBars} from "react-icons/gi";
import {MdNetworkWifi} from "react-icons/md";
import {FaBatteryFull} from "react-icons/fa"

const Header = ({from,to}) => {

  console.log(from,to);
  return (
      <>
        <div className='flex items-center justify-between px-5 pt-5 '>
            <p className='text-xl font-bold'>9:41</p>
            <div className='flex items-center justify-evenly gap-4'>
                <GiNetworkBars size={25}/>
                <MdNetworkWifi size={25}/>
                <FaBatteryFull size={25} />
            </div>
        </div>
      </>
  )
}

export default Header