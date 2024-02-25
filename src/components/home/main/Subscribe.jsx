import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from 'framer-motion';


function Subscribe() {
    return (
        <div className='subscribe' id='contact'>
            <div className="subscribe_and_socials">
                <motion.div
                    className="subscribe_form"
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
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
                            <motion.button
                            whileTap={{ scale: 0.9 }}
                            >Send Message</motion.button>
                        </div>
                    </form>
                </motion.div>
                <motion.div
                    className="socials_cont"
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ delay: .4, duration: 1, ease: "easeInOut" }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="social_head">
                        <h3>Connect with me via</h3>
                    </div>
                    <div className="social_links">
                        <motion.a
                            animate={{ scale: 1.2 }}
                            transition={{ repeat: Infinity, duration: 2, delay: .2 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://www.instagram.com/visioncentralhub?igsh=MTBoanpoeDFmcGhnMA=='
                            target="_blank"
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            animate={{ scale: 1.2 }}
                            transition={{ repeat: Infinity, duration: 2, delay: .6 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            animate={{ scale: 1.2 }}
                            transition={{ repeat: Infinity, duration: 2, delay: .8 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://wa.me/+16395906536'
                            target="_blank"
                        >
                            <FaWhatsapp />
                        </motion.a>
                        <motion.a
                            animate={{ scale: 1.2 }}
                            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                            whileTap={{ scale: 0.9 }}
                            href='mailto:macbruce@gmail.com'
                            target="_blank"
                        >
                            <SiGmail />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <motion.div 
            className="me_image"
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: .4, duration: 1, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            >
                <img src="https://ik.imagekit.io/on9x61d60/headImg/head4.jpg?updatedAt=1708721016947" alt="" />
            </motion.div>
        </div>
    )
}

export default Subscribe