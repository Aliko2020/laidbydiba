import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Payment = ({ userInfo, slotInfo }) => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://laidbydiba.onrender.com/confirm-booking', {
        userInfo,
        slotInfo
      });
      console.log(response.data);
      // Redirect to confirmation page
      navigate('/confirmation');
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Error confirming booking');
    }
  };

  if (!userInfo || !slotInfo) {
    return navigate();
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone}</p>
      <p>Date: {slotInfo.date}</p>
      <p>Slot: {slotInfo.slot}</p>
      <p>Service: {slotInfo.service}</p>
      <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded">Pay Now</button>
    </div>
  );
};

export default Payment;
