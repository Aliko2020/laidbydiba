import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SlotList = ({ onBook }) => {
  const [slots, setSlots] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    try {
      const response = await axios.get('http://localhost:3000/slots');
      setSlots(response.data);
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };

  const bookSlot = async (date, slot) => {
    if (!selectedService) {
      alert('Please select a service before booking.');
      return;
    }
    onBook({ date, slot, service: selectedService });
    navigate('/user-info');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Available Slots</h1>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Select Service</label>
        <select
          className="border rounded w-full py-2 px-3 text-gray-700"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Choose a service</option>
          <option value="Makeup Session">Makeup Session</option>
          <option value="Haircut">Haircut</option>
          <option value="Hair Coloring">Hair Coloring</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {slots.map(slot => (
          <div key={`${slot.date}-${slot.slot}`} className={`p-4 border rounded-md ${slot.booked ? 'bg-red-100' : 'bg-green-100'}`}>
            <p>Date: {slot.date}</p>
            <p>Slot: {slot.slot} ({slot.time})</p>
            {slot.service && <p>Service: {slot.service}</p>}
            <button 
              className={`mt-2 px-4 py-2 rounded-md ${slot.booked ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`} 
              onClick={() => bookSlot(slot.date, slot.slot)} 
              disabled={slot.booked}
            >
              {slot.booked ? 'Booked' : 'Book Slot'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotList;
