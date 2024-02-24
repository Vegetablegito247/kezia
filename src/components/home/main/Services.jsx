import React from 'react';
import { IoMdMicrophone } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { SlSpeech } from "react-icons/sl";

function Services() {
    const service = [
        {
            id: 1,
            icon: <IoMdMicrophone />,
            head: 'Master of Ceremonies (MC) Services',
            text: 'Whether it is a corporate event, conference, gala, or any other special occasion, Kezia brings energy, charisma, and professionalism to ensure your event runs smoothly and leaves a lasting impression on your audience.'
        },
        {
            id: 2,
            icon: <FaCalendarCheck />,
            head: 'Event Hosting',
            text: 'From intimate gatherings to large-scale events, Kezia specialises in hosting various types of events, including fundraisers, symposiums, networking events, and more. With a keen attention to detail and a natural ability to engage with diverse audiences, Kezia will make your event memorable and impactful.'
        },
        {
            id: 3,
            icon: <SlSpeech />,
            head: 'Event Public Speaker',
            text: 'Kezia is not just a speaker but a catalyst for change. With a background rooted in Political Science and International Relations and a Masters in Public Administration combined with solid years of experience in Policy advocacy, gender and inclusion,  fundraising, nonprofit management and community building, Kezia brings a unique blend of knowledge, passion, and charisma to every speaking engagement. Whether addressing a small group or a large audience, Kezia inspires, educates, and motivates her audience, leaving a lasting impression that sparks action and drives positive change.'
        },
    ]
    return (
        <div className="services">
            <div className="service_head">
                <h1>
                    My Services
                </h1>
            </div>
            <div className='service_cont'>
                {
                    service.map((serve) => (
                        <div key={serve.id} className="service_list">
                            <div className="service_icon">
                                {serve.icon}
                            </div>
                            <div className="service_content">
                                <h3>{serve.head}</h3>
                                <p>{serve.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="serv_circle"></div>
            <div className="serv_circle serv_circle2"></div>
        </div>
    )
}

export default Services