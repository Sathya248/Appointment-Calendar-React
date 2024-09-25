import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentCalendar.css';

const AppointmentCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState({});

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleAddAppointment = () => {
        const appointment = prompt("Enter appointment details:");
        if (appointment) {
            const dateKey = date.toDateString();
            setAppointments((prev) => ({
                ...prev,
                [dateKey]: [...(prev[dateKey] || []), appointment],
            }));
        }
    };

    return (
        <div className="calendar-container">
            <div className='calendar-container-box'>
                <Calendar onChange={handleDateChange} value={date} /> </div>

            <h2>Appointments for {date.toDateString()}</h2>
            <ul className="appointment-list">
                {(appointments[date.toDateString()] || []).map((appt, index) => (
                    <li key={index} className="appointment-item">{appt}</li>
                ))}
            </ul>

            <button className="add-appointment-button" onClick={handleAddAppointment}>Add Appointment</button>
        </div>
    );
};

export default AppointmentCalendar;
