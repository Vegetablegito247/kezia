import React from 'react';
import { IoMdMicrophone } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { SlSpeech } from "react-icons/sl";
import { motion } from 'framer-motion';

function Services() {
    const service = [
        {
            id: 1,
            icon: <IoMdMicrophone />,
            head: 'Master of Ceremonies (MC) Services',
            text: 'Whether it is a corporate event, conference, gala, or any other special occasion, I bring energy, charisma, and professionalism to ensure your event runs smoothly and leaves a lasting impression on your audience.'
        },
        {
            id: 2,
            icon: <FaCalendarCheck />,
            head: 'Event Hosting',
            text: 'From intimate gatherings to large-scale events, I specialise in hosting various types of events, including fundraisers, symposiums, networking events, and more. With a keen attention to detail and a natural ability to engage with diverse audiences, I will make your event memorable and impactful.'
        },
        {
            id: 3,
            icon: <SlSpeech />,
            head: 'Event Public Speaker',
            text: 'I am not just a speaker but a catalyst for change. With a background rooted in Political Science and International Relations and a Masters in Public Administration combined with solid years of experience in Policy advocacy, gender and inclusion,  fundraising, nonprofit management and community building, I bring a unique blend of knowledge, passion, and charisma to every speaking engagement. Whether addressing a small group or a large audience, I inspire, educate, and motivates my audience, leaving a lasting impression that sparks action and drives positive change.'
        },
    ];

    const animations = [
        { x: 100, y: 100, opacity: 0 },
        { x: -100, y: 100, opacity: 0 },
        { x: 100, y: 100, opacity: 0 },
    ]
    return (
        <div className="services" id='service'>
            <motion.div 
            className="service_head"
            initial={{ x: -100, opacity: 0 }}
            transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            >
                <h1>
                    My Services
                </h1>
            </motion.div>
            <div className='service_cont'>
                {
                    service.map((serve, index) => (
                        <motion.div 
                        key={serve.id} 
                        className="service_list"
                        initial={animations[index % animations.length]}
                        transition={{ delay: .4, duration: 1, ease: "easeInOut" }}
                        whileInView={{ x: 0, y:0,  opacity: 1 }}
                        viewport={{ once: true }}
                        >
                            <div className="service_icon">
                                {serve.icon}
                            </div>
                            <div className="service_content">
                                <h3>{serve.head}</h3>
                                <p>{serve.text}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            <div className="serv_circle"></div>
            <div className="serv_circle serv_circle2"></div>
            <div className="serv_line"></div>
            <div className="serv_line serv_line2"></div>
        </div>
    )
}

export default Services