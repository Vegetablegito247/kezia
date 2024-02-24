import React from 'react';
import head4 from '../../../assets/headImg/head4.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="subscribe_and_socials">
                <div className="subscribe_form">
                    <div className="sub_form_head">
                        <h1>
                            Subscribe to my newsletter today for exclusive content and updates!
                        </h1>
                    </div>
                    <form action="" className="sub_form">
                        <div className="sub_inputs">
                            <div className="inp_ctrl">
                                <input type="text" placeholder='Your Name' />
                            </div>
                            <div className="inp_ctrl">
                                <input type="text" placeholder='Your Email' />
                            </div>
                            <div className="inp_ctrl">
                                <textarea name="" placeholder='Message ( optional )'></textarea>
                            </div>
                        </div>
                        <div className="sub_btn">
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className="socials_cont">
                    <div className="social_head">
                        <h3>Follow me on</h3>
                    </div>
                    <div className="social_links">
                        <Link>
                            <FaInstagram />
                        </Link>
                        <Link>
                            <FaTwitter />
                        </Link>
                        <Link>
                            <FaLinkedin />
                        </Link>
                        <Link>
                            <FaFacebook />
                        </Link>
                        <Link>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="me_image">
                <img src="https://ik.imagekit.io/on9x61d60/headImg/head4.jpg?updatedAt=1708721016947" alt="" />
            </div>
        </div>
    )
}

export default Subscribe