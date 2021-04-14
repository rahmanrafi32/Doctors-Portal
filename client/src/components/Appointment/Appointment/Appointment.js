import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppoinmentHeader/AppointmentHeader';
import BookApointment from '../BookApointment/BookApointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDate = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader handleDate={handleDate}/>
            <BookApointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;