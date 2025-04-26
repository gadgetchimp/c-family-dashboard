import React from "react";

function CalendarView() {
  return (
    <div className="calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_link_here"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Family Calendar"
      ></iframe>
    </div>
  );
}

export default CalendarView;
