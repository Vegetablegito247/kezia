import React from 'react';
import Counter from '../../../utils/Counter';

function Experience() {
    return (
        <div className='experience'>
            <div className="experience_list">
                <div className="exp_links">
                    <div className="big_circle">
                        <div className="small_circle"></div>
                    </div>
                    <div className="exp_count exp_count1">
                        <h1>+</h1>
                        <Counter targetNumber={5} />
                        <span>years</span>
                    </div>
                    <div className="exp_content exp_content1">
                        <p>of experience in public speaking</p>
                    </div>
                </div>
                <div className="exp_links">
                    <div className="big_circle">
                        <div className="small_circle"></div>
                    </div>
                    <div className="exp_count exp_count2">
                        <h1>+</h1>
                        <Counter targetNumber={200} />
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
                        <Counter targetNumber={1000} />
                    </div>
                    <div className="exp_content exp_content1">
                        <p>connections made and networking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience