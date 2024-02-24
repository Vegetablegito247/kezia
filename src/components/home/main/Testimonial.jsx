import React from 'react';
import cardBrd from '../../../assets/gallery/cardBrd.jpg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className='testimonial'>
        <div className="testimonial_head">
            <h1>Testimonial from past collaboration</h1>
        </div>
        <div className="testimonial_cont">
            {
                glassTemp.map((glass) => (
                    <div className="my_glass">
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
                    </div>
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