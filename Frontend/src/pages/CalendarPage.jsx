import { useState } from "react";
import PageHeader from "../components/PageHeader";
import "./CalendarPage.css";

const activities = [
  {
    id: 1,
    title: "Follow-up call",
    date: "2026-05-18",
    time: "10:00",
    type: "Call",
    customer: "Nordic Design AS",
    contactPerson: "Emma Larsen",
    status: "Planned",
    notes: "Discuss last week's offer.",
  },
  {
    id: 2,
    title: "Product demo",
    date: "2026-05-18",
    time: "14:30",
    type: "Meeting",
    customer: "GreenTech Solutions",
    contactPerson: "Jonas Berg",
    status: "Planned",
    notes: "Show CRM dashboard and contact features.",
  },
  {
    id: 3,
    title: "Contract renewal",
    date: "2026-05-22",
    time: "09:00",
    type: "Deadline",
    customer: "Relatio Client",
    contactPerson: "Sara Holm",
    status: "Important",
    notes: "Prepare renewal documents.",
  },
];

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("2026-05-18");

  const daysInMonth = 31;

  const selectedActivities = activities.filter(
    (activity) => activity.date === selectedDate
  );

  function getDate(day) {
    return `2026-05-${String(day).padStart(2, "0")}`;
  }

  return (
    <div className="calendar-page">
      <PageHeader
        title="Calendar"
        description="Plan meetings, calls, deadlines and customer follow-ups."
        buttonText="Add activity"
      />

      <section className="calendar-layout">
        <div className="calendar-card">
          <div className="calendar-month">
            <h2>May 2026</h2>
          </div>

          <div className="calendar-grid">
            {Array.from({ length: daysInMonth }, (_, index) => {
              const day = index + 1;
              const date = getDate(day);

              const hasActivity = activities.some(
                (activity) => activity.date === date
              );

              return (
                <button
                  key={day}
                  className={`calendar-day ${
                    selectedDate === date ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span>{day}</span>
                  {hasActivity && <div className="activity-dot"></div>}
                </button>
              );
            })}
          </div>
        </div>

        <aside className="activity-panel">
          <h2>Activities</h2>
          <p className="selected-date">{selectedDate}</p>

          {selectedActivities.length === 0 ? (
            <p className="empty-message">No activities planned for this day.</p>
          ) : (
            <div className="activity-list">
              {selectedActivities.map((activity) => (
                <div className="activity-card" key={activity.id}>
                  <div className="activity-top">
                    <strong>{activity.time}</strong>
                    <span>{activity.type}</span>
                  </div>

                  <h3>{activity.title}</h3>
                  <p>{activity.customer}</p>
                  <p>{activity.contactPerson}</p>

                  <div className="activity-status">{activity.status}</div>

                  <small>{activity.notes}</small>
                </div>
              ))}
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}

export default CalendarPage;