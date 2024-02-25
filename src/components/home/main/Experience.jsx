import React from 'react';

function Experience() {
  return (
    <div className='experience'>
        <div className="experience_list">
            <div className="exp_links">
                <div className="big_circle">
                    <div className="small_circle"></div>
                </div>
                <div className="exp_count">
                    <h1>+5</h1>
                    <span>years</span>
                </div>
                <div className="exp_content">
                    <p>of experience in public speaking</p>
                </div>
            </div>
            <div className="exp_links">
                <div className="big_circle">
                    <div className="small_circle"></div>
                </div>
                <div className="exp_count exp_count2">
                    <h1>+200</h1>
                    <span>exp</span>
                </div>
                <div className="exp_content exp_content2">
                    <p>of notable engagements and hosting</p>
                </div>
            </div>
            <div className="exp_links">
                <div className="big_circle">
                    <div className="small_circle"></div>
                </div>
                <div className="exp_count exp_count3">
                    <h1>1000</h1>
                </div>
                <div className="exp_content">
                    <p>connections made and networking</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience