import React from 'react';
import './landHead.css';
import head2 from '../../../assets/headImg/head2.jpg';
import { Link } from 'react-router-dom';
import { LuCrown } from "react-icons/lu";
import { GiMicrophone } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

function LandHead() {
  //Getting date and month
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  return (
    <header>
      <div className="head_cont">
        <div className="head_info">
          <div className="head_content">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              transition={{ delay: .2, duration: 1, type: 'tween' }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >Hey there!</motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              transition={{ delay: .6, duration: 1, type: 'tween' }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Are you seeking a dynamic and engaging speaker to elevate your event or discuss important topics surrounding diversity, equity, inclusion, and public policy? Look no further! <b className='author'>Kezia</b> offers professional public speaking services tailored to meet the unique needs of your audience.
            </motion.p>
          </div>
          <motion.div
            className="head_btn"
            whileTap={{ scale: 0.9 }}
          >
            <Link to={`https://calendly.com/gracemacbruce/30min?month=${year}-${month}`} target="_blank">
              <span>Book an appointment</span>
            </Link>
          </motion.div>

        </div>
        <div className="head_img_cont">
          <div className="head_imgs">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="img_list">
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head1.jpeg?updatedAt=1708721032468" alt="" />
            </motion.div>
            <motion.div
              // initial={{ x: 100, opacity: 0 }}
              // transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
              // whileInView={{ x: 0, opacity: 1 }}
              // viewport={{ once: true }}
              className="img_list"
            >
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head2.jpg?updatedAt=1708721017965" alt="" />
            </motion.div>
          </div>
          <div className="head_imgs head_img2">
            <motion.div 
            className="img_list"
            initial={{ y: 100, opacity: 0 }}
            transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            >
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head3.JPG?updatedAt=1708721041503" alt="" />
            </motion.div>
            <motion.div 
            className="img_list"
            initial={{ y: 100, opacity: 0 }}
            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            >
              <img src="https://ik.imagekit.io/on9x61d60/headImg/head4.jpg?updatedAt=1708721016947" alt="" />
            </motion.div>
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