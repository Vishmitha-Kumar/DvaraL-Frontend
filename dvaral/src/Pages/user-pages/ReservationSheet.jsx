import React, { useState } from 'react';
import { X, User, Mail, Calendar, Clock, Users, DollarSign, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ReservationSheet = ({ isOpen, onClose, hallData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    slot: '',
    guests: '',
    purpose: '',
    specialRequests: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    toast.success('Reservation booked successfully!');
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      slot: '',
      guests: '',
      purpose: '',
      specialRequests: '',
    });
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none "
        {...props}
      />
    </div>
  );

  const SelectField = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <select
        className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
        {...props}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out overflow-y-auto`}
    >
      <div className="p-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 z-10 pt-20 ">
        <button 
          onClick={onClose} 
          className="absolute top-12 right-4 text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
          aria-label="Close reservation sheet"
        >
          <X size={24} />
        </button>
        
      </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <InputField
              icon={User}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <InputField
              icon={Mail}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <InputField
              icon={Phone}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
            <SelectField
              icon={Calendar}
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a date</option>
              {hallData.availableDates.map((date, index) => (
                <option key={index} value={date.date}>{date.date}</option>
              ))}
            </SelectField>
          </div>
          <div>
            <label htmlFor="slot" className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
            <SelectField
              icon={Clock}
              id="slot"
              name="slot"
              value={formData.slot}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a time slot</option>
              {hallData.availableDates.find(d => d.date === formData.date)?.slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </SelectField>
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
            <InputField
              icon={Users}
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              min="1"
              max={hallData.capacity}
              placeholder={`Max ${hallData.capacity}`}
            />
          </div>
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">Event Purpose</label>
            <SelectField
              icon={DollarSign}
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              required
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="conference">Conference</option>
              <option value="other">Other</option>
            </SelectField>
          </div>
          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
            <div className="relative">
              <div className="absolute top-3 left-3 text-gray-400">
                <MessageSquare size={20} />
              </div>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows="4"
                className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Any special arrangements or requests?"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center justify-center shadow-md"
          >
            <Calendar className="mr-2" size={20} />
            Book Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationSheet;