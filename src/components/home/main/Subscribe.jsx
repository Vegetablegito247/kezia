import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';


function Subscribe() {
    return (
        <div className='subscribe' id='contact'>
            <div className="subscribe_and_socials">
                <div className="subscribe_form">
                    <div className="sub_form_head">
                        <h1>
                            LET'S CONNECT
                        </h1>
                        <p>
                            Reach out to me directly! Whether you have questions or just want to say hello, I'm here to chat. I can't wait to hear from you!
                        </p>
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
                                <input type="text" placeholder='Your Phone No.' />
                            </div>
                            <div className="inp_ctrl">
                                <input type="text" placeholder='Your Company (optional)' />
                            </div>
                            <div className="inp_ctrl">
                                <textarea name="" placeholder='Your Message'></textarea>
                            </div>
                        </div>
                        <div className="sub_btn">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="socials_cont">
                    <div className="social_head">
                        <h3>Connect with me via</h3>
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
                            <FaWhatsapp />
                        </Link>
                        <Link>
                            <SiGmail />
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