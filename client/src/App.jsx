import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SlotList from './components/slotslist';
import UserForm from './components/UserForm';
import Payment from './pages/Payment';
import Confirmation from './pages/Comfirmation';
import Home from './pages/Home';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const handleBookSlot = (details) => {
    setBookingDetails(details);
  };

  const handleUserFormSubmit = (details) => {
    setUserDetails(details);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path='/slots' element={<SlotList onBook={handleBookSlot} />} />
          <Route path='/user-info' element={<UserForm onSubmit={handleUserFormSubmit} />} />
          <Route path='/payment' element={<Payment userInfo={userDetails} slotInfo={bookingDetails} />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
