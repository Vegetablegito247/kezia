import React from 'react'

function Engagements() {
  const events = [
    {
      id: 1,
      text: 'Keynote Speaker at the first Afrocentric Symposium for Black History Month in Saskatoon.'
    },
    {
      id: 2,
      text: 'Master of Ceremonies and Event Host for the impactful "Black Donor Saves Lives" Black History Month event.'
    },
    {
      id: 3,
      text: 'Host of the "Black Canadian Women in Action" networking event mixer, celebrating and empowering black business owners.'
    },
    {
      id: 4,
      text: 'Lead Moderator for the RCCG DSM Life Empowerment Advancement program, facilitating monthly discussions on personal and professional development.'
    },
    {
      id: 5,
      text: 'Facilitator of workshops on strategic planning, vision boarding, and goal setting, catering to diverse audiences including students, business owners, and professionals.'
    },
    {
      id: 6,
      text: 'Instructor at the Peculiar Youth Church, teaching youth how to create vision boards to manifest their dreams and goals.'
    }
  ];

  return (
    <div className="engagements" id='engagement'>
      <div className="engage_head">
        <h1>My Engagement and Collaboration</h1>
      </div>
      <div className='engagement_cont'>
        {
          events.map((event) => (
            <div key={event.id} className="event_list">
              <div className="event_id">
                <h3>{event.id <= 9 ? `0${event.id}` : event.id}</h3>
              </div>
              <div className="event_content">
                <p>{event.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Engagements