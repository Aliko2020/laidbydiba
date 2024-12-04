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
      const response = await axios.get('https://laidbydiba.onrender.com/slots');
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

  const getBackgroundColor = (date) => {
    const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
    const colors = {
      Monday: 'bg-red-100',
      Tuesday: 'bg-Primary',
      Wednesday: 'bg-red-100',
      Thursday: 'bg-Primary',
      Friday: 'bg-red-100',
      Saturday: 'bg-Primary',
      Sunday: 'bg-red-100'
    };
    return colors[day] || 'bg-Primary';
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Available Slots</h1>
      <div className="mb-4">
        <select
          className="border rounded bg-Complemetary text-Primary w-full py-3 px-3 focus:outline-none"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Choose a service</option>
          <option value="Glue-less wigs">Glue-less wigs</option>
          <option value="Bridal Hairstyling">Bridal Hairstyling</option>
          <option value="Revamping services">Revamping services</option>
          <option value="Hair colouring">Hair colouring</option>
          <option value="Wig styling for Occasion & shoots">Wig styling for Occasion & shoots</option>
        </select>

      </div>
      <div className="grid grid-cols-1 gap-4">
        {slots.map(slot => (
          <div 
            key={`${slot.date}-${slot.slot}`} 
            className={`p-4 border rounded-md ${getBackgroundColor(slot.date)}`}
          >
            <p>Date: {slot.date}</p>
            <p>Slot: {slot.slot} ({slot.time})</p>
            {slot.service && <p>Service: {slot.service}</p>}
            <button 
              className={`mt-2 px-4 py-2 rounded-md ${slot.booked ? 'bg-red-500 text-white' : 'bg-Complemetary text-Primary'}`} 
              onClick={() => bookSlot(slot.date, slot.slot)} 
              disabled={slot.booked}
            >
              {slot.booked ? 'Booked' : 'Book Slot'}
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-end w-full'>
      <button 
        onClick={() => navigate(-1)} 
        className="bg-Complemetary mt-4 text-white px-4 py-2 rounded shadow-lg"
      >
        Back
      </button>
      </div>
    </div>
  );
};

export default SlotList;
