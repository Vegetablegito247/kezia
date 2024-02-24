import React from 'react';
import { Link } from 'react-router-dom';

function Specialty() {
    //Getting date and month
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    const expertiseData = [
        {
            id: 1,
            head: 'Expertise',
            text: 'With over five years of experience in public speaking and event hosting, I know how to command the stage and capture the audience\'s attention.'
        },
        {
            id: 2,
            head: 'Professionalism',
            text: 'From meticulous event planning to flawless execution, I approach every engagement with the utmost professionalism and attention to detail.'
        },
        {
            id: 3,
            head: 'Versatility',
            text: 'Whether it\'s a corporate event, a wedding reception, or a community gathering, I have the versatility to adapt to any audience and setting.'
        },
        {
            id: 4,
            head: 'Passion',
            text: 'I am deeply passionate about advocating for communities and driving positive social change through impactful dialogue and engagement.'
        },
        {
            id: 5,
            head: 'Tailored Approach',
            text: 'I understand that every event is unique, and work closely with clients to tailor speeches and hosting services to suit their specific objectives and audience demographics.'
        }
    ];

    return (
        <div className='specialty' id='specialty'>
            <div className="specialty_head">
                <h1>Elevating Events with Expertise and Passion</h1>
            </div>
            <div className="expertise">
                {
                    expertiseData.map((data) => (
                        <div key={data.id} className="expertise_list">
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
                        Whether you are looking for an event  public speaker to inspire and educate on important issues, an MC to energise your event, or an event host to create a vibrant atmosphere, don’t leave the success of your event to chance. Contact me today to discuss your public speaking needs and take the first step toward creating an unforgettable experience for your audience.
                    </p>
                </div>
                <div className="expertise_btn">
                    <Link to={`https://calendly.com/gracemacbruce/30min?month=${year}-${month}`} target="_blank">
                        <span>Book an Appointment</span>
                    </Link>
                </div>
            </div>
            <div className="half_circle"></div>
            <div className="half_circle half_circle2"></div>
            <div className="half_circle half_circle3"></div>
            <div className="half_circle half_circle4"></div>
            <div className="expertise_line"></div>
            <div className="expertise_line expertise_line2"></div>
        </div>
    )
}

export default Specialty