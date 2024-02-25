import React from 'react';
import cardBrd from '../../../assets/gallery/cardBrd.jpg';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion'

function Testimonial() {
    const glassTemp = [
        {
            id: 1,
            userImg: cardBrd,
            username: 'John Newman',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus asperiores neque dicta veritatis, voluptatem ullam deleniti sit id. Reprehenderit consequuntur obcaecati soluta, esse quam beatae deserunt nobis magni cum.'
        },
        {
            id: 2,
            userImg: cardBrd,
            username: 'Adebayo Adewale',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus asperiores neque dicta veritatis, voluptatem ullam deleniti sit id. Reprehenderit consequuntur obcaecati soluta, esse quam beatae deserunt nobis magni cum.'
        },
        {
            id: 3,
            userImg: cardBrd,
            username: 'Chukwudi Ebenezer',
            rating: 4,
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus asperiores neque dicta veritatis, voluptatem ullam deleniti sit id. Reprehenderit consequuntur obcaecati soluta, esse quam beatae deserunt nobis magni cum.'
        }
    ]
  return (
    <div className='testimonial' id='testimonial'>
        <motion.div 
        className="testimonial_head"
        initial={{ x: -100, opacity: 0 }}
        transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        >
            <h1>Testimonial from past collaboration</h1>
        </motion.div>
        <div className="testimonial_cont">
            {
                glassTemp.map((glass) => (
                    <motion.div 
                    key={glass.id} 
                    className="my_glass"
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ delay: .4, duration: 1, ease: "easeInOut" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    >
                        <div className="user_profile">
                            <div className="user_img">
                                <img src={glass.userImg} alt="" />
                            </div>
                            <div className="user_title">
                                <h3>{glass.username}</h3>
                            </div>
                        </div>
                        <div className="user_msg">
                            <div className="user_rating"></div>
                            <div className="user_comment">
                                <p>{glass.comment}</p>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
            {/* <div className="arrow_btns">
                <div className="prev_btn">
                    <FaChevronLeft />
                </div>
                <div className="next_btn">
                    <FaChevronRight />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Testimonial