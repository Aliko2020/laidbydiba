import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SlotList = ({ onBook }) => {
  const [slots, setSlots] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(true);
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
    } finally {
      setLoading(false);
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

  const getBackgroundColor = (day) => {
    const colors = {
      Monday: 'bg-red-100',
      Tuesday: 'bg-blue-100',
      Wednesday: 'bg-red-100',
      Thursday: 'bg-blue-100',
      Friday: 'bg-red-100',
      Saturday: 'bg-blue-100',
      Sunday: 'bg-red-100'
    };
    return colors[day] || 'bg-primary';
  };

  // Get today's date and the name of the current day
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentDayName = today.toLocaleDateString('en-US', { weekday: 'long' });

  // Days of the week in order
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Filter slots to show only those from today onwards
  const filteredSlots = slots.filter(slot => {
    const slotDayIndex = daysOfWeek.indexOf(slot.date);
    const todayIndex = daysOfWeek.indexOf(currentDayName);
    return slotDayIndex >= todayIndex;
  });

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
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading available slots.This might take a couple seconds...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredSlots.map(slot => (
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
      )}
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
