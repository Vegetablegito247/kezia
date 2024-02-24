import React from 'react';
import './landHead.css';
import { Link } from 'react-router-dom';
import { LuCrown } from "react-icons/lu";
import { GiMicrophone } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";

function LandHead() {
  //Getting date and month
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  return (
    <header>
      <div className="head_cont">
        <div className="head_info">
          <div className="head_content">
            <h1>Hey there!</h1>
            <p>
              Are you seeking a dynamic and engaging speaker to elevate your event or discuss important topics surrounding diversity, equity, inclusion, and public policy? Look no further! <b className='author'>Kezia</b> offers professional public speaking services tailored to meet the unique needs of your audience.
            </p>
          </div>
          <div className="head_btn">
            <Link to={`https://calendly.com/gracemacbruce/30min?month=${year}-${month}`} target="_blank">
              <span>Book an appointment</span>
            </Link>
          </div>

        </div>
        <div className="head_img_cont">
          <div className="head_imgs">
            <div className="img_list">
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head1.jpeg?updatedAt=1708721032468" alt="" />
            </div>
            <div className="img_list">
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head2.jpg?updatedAt=1708721017965" alt="" />
            </div>
          </div>
          <div className="head_imgs head_img2">
            <div className="img_list">
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head3.JPG?updatedAt=1708721041503" alt="" />
            </div>
            <div className="img_list">
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head4.jpg?updatedAt=1708721016947" alt="" />
            </div>
          </div>
        </div>
      </div>
      <LuCrown className='crown' />
      <GiMicrophone className='micro' />
      <IoBulbOutline className='bulb' />
    </header>
  )
}

export default LandHead