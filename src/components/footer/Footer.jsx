import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    //Getting date and month
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    return (
        <footer>
            <div className='footer_cont'>
                <div className="foot_main">
                    <div className="foot_main_head">
                        <h1>
                            Book an appointment with me today. Looking forward to working with you!
                        </h1>
                    </div>
                    <div className="foot_btn">
                        <Link to={`https://calendly.com/gracemacbruce/30min?month=${year}-${month}`} target="_blank">
                            <span>Book an Appointment</span>
                        </Link>
                    </div>
                </div>
                <div className="foot_bottom">
                    <span>Kezia.com &copy; {year}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer