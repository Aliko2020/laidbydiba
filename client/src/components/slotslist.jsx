import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { BarLoader} from 'react-spinners'


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
      Monday: 'bg-gray-300',
      Tuesday: 'bg-gray-200',
      Wednesday: 'bg-gray-300',
      Thursday: 'bg-gray-200',
      Friday: 'bg-gray-300',
      Saturday: 'bg-gray-200',
      Sunday: 'bg-gray-300'
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-40">
        <img src={logo} alt="Logo" className="" />
      </div>
      <div className="flex flex-col w-full md:w-3/4 p-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Available Slots</h1>
        <div className="mb-4">
          <select
            className="border rounded bg-[#637373] text-white w-full py-3 px-3 focus:outline-none"
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
            <BarLoader />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {filteredSlots.map(slot => (
              <div 
                key={`${slot.date}-${slot.slot}`} 
                className={`p-4 border rounded-md ${getBackgroundColor(slot.date)}`}
              >
                <p>Date: {slot.date}</p>
                <p>Slot: {slot.slot} ({slot.time})</p>
                {slot.service && <p>Service: {slot.service}</p>}
                <button 
                  className="btn btn-secondary" 
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
            className="btn btn-secondary mt-4"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotList;
