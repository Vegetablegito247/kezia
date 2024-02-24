import React from 'react'
import { Link } from 'react-router-dom';

function AboutMe() {
    const expertiseData = [
        {
            id: 1,
            head: 'Expertise',
            text: 'With over five years of experience in public speaking and event hosting, Kezia knows how to command the stage and capture the audience\'s attention.'
        },
        {
            id: 2,
            head: 'Professionalism',
            text: 'From meticulous event planning to flawless execution, Kezia approaches every engagement with the utmost professionalism and attention to detail.'
        },
        {
            id: 3,
            head: 'Versatility',
            text: 'Whether it\'s a corporate event, a wedding reception, or a community gathering, Kezia has the versatility to adapt to any audience and setting.'
        },
        {
            id: 4,
            head: 'Passion',
            text: 'Kezia is deeply passionate about advocating for communities and driving positive social change through impactful dialogue and engagement.'
        },
        {
            id: 5,
            head: 'Tailored Approach',
            text: 'Kezia understands that every event is unique, and works closely with clients to tailor speeches and hosting services to suit their specific objectives and audience demographics.'
        }
    ];

    return (
        <div className='about_me'>
            <div className="about_head">
                <h1>Elevating Events with Expertise and Passion</h1>
            </div>
            <div className="expertise">
                {
                    expertiseData.map((data) => (
                        <div className="expertise_list">
                            <div className="expertise_id">
                                <h3>{data.id <= 9 ? `0${data.id}` : data.id}</h3>
                            </div>
                            <div className="expertise_content">
                                <h3>{data.head}:</h3>
                                <p>{data.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="expertise_comment">
                <div className="expertise_info">
                    <p>
                        Whether you are looking for an event  public speaker to inspire and educate on important issues, an MC to energise your event, or an event host to create a vibrant atmosphere, don’t leave the success of your event to chance. Contact Kezia today to discuss your public speaking needs and take the first step toward creating an unforgettable experience for your audience.
                    </p>
                </div>
                <div className="expertise_btn">
                    <Link>Book an Appointment</Link>
                </div>
            </div>
            <div className="half_circle"></div>
            <div className="half_circle half_circle2"></div>
            <div className="half_circle half_circle3"></div>
            <div className="half_circle half_circle4"></div>
        </div>
    )
}

export default AboutMe