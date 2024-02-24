import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
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
                        <Link>
                            <span>Book an Appointment</span>
                        </Link>
                    </div>
                </div>
                <div className="foot_bottom">
                    <span>Kezia.com &copy; 2024</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer