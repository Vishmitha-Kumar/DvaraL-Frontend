import React, { useState } from 'react';
import {
    User, Home, Type, MapPin, FileText, Star, Phone, Users, DollarSign,
    Wifi, Wind, Utensils, Car, Bed, Edit, Save, Mail, MessageSquare
} from 'lucide-react';
import ManNavBar from './ManNavBar';
import ManagerSideBar from './ManagerSideBar';

const HallDetailsForm = ({ initialData, onSubmit }) => {
    const [isEditing, setIsEditing] = useState(!initialData);
    const [formData, setFormData] = useState(initialData || {
        hallOwner: '',
        hallName: '',
        hallType: '',
        hallLocation: '',
        hallDescription: '',
        hallStatus: '',
        hallRating: 0,
        hallAddress: '',
        hallContact: '',
        capacity: 0,
        hallPrice: 0,
        hallAmenities: [],
    });

    const amenitiesList = [
        { name: 'WiFi', icon: <Wifi size={16} /> },
        { name: 'AC', icon: <Wind size={16} /> },
        { name: 'Catering', icon: <Utensils size={16} /> },
        { name: 'Parking', icon: <Car size={16} /> },
        { name: 'Room Booking', icon: <Bed size={16} /> },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(({ ...prevData, [name]: value }));
    };

    const handleAmenityChange = (amenity) => {
        setFormData(prevData => ({
            ...prevData,
            hallAmenities: prevData.hallAmenities.includes(amenity)
                ? prevData.hallAmenities.filter(a => a !== amenity)
                : [...prevData.hallAmenities, amenity]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        if (initialData) setIsEditing(false);
    };

    const InputField = ({ icon: Icon, ...props }) => (
        <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon className="h-5 w-5 text-gray-400" />
            </div>
            <input
                className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
                disabled={!isEditing}
                onChange={handleInputChange}
            />
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <ManNavBar />
            <div className="flex flex-grow overflow-hidden">
                <ManagerSideBar />
                <div className="flex-grow p-6 overflow-y-auto">
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-6 text-center text-blue-500 font-[Poppins]">Let Us Know About Your Hall</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="hallOwner" className="block text-sm font-medium text-gray-700 mb-1">Hall Owner</label>
                                    <InputField icon={User} name="hallOwner" id="hallOwner" placeholder="Hall Owner" />
                                </div>
                                <div>
                                    <label htmlFor="hallName" className="block text-sm font-medium text-gray-700 mb-1">Hall Name</label>
                                    <InputField icon={Home} name="hallName" id="hallName" placeholder="Hall Name" />
                                </div>
                                <div>
                                    <label htmlFor="hallType" className="block text-sm font-medium text-gray-700 mb-1">Hall Type</label>
                                    <InputField icon={Type} name="hallType" id="hallType" placeholder="Hall Type" />
                                </div>
                                <div>
                                    <label htmlFor="hallLocation" className="block text-sm font-medium text-gray-700 mb-1">Hall Location</label>
                                    <InputField icon={MapPin} name="hallLocation" id="hallLocation" placeholder="Hall Location" />
                                </div>
                                <div>
                                    <label htmlFor="hallAddress" className="block text-sm font-medium text-gray-700 mb-1">Hall Address</label>
                                    <InputField icon={MapPin} name="hallAddress" id="hallAddress" placeholder="Hall Address" />
                                </div>
                                <div>
                                    <label htmlFor="hallContact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                    <InputField icon={Phone} name="hallContact" id="hallContact" placeholder="Contact Number" />
                                </div>
                                <div>
                                    <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                                    <InputField icon={Users} name="capacity" id="capacity" type="number" placeholder="Capacity" />
                                </div>
                                <div>
                                    <label htmlFor="hallPrice" className="block text-sm font-medium text-gray-700 mb-1">Hall Price</label>
                                    <InputField icon={DollarSign} name="hallPrice" id="hallPrice" type="number" placeholder="Hall Price" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="hallDescription" className="block text-sm font-medium text-gray-700 mb-1">Hall Description</label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <FileText className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        name="hallDescription"
                                        id="hallDescription"
                                        rows="4"
                                        className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Hall Description"
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                                    {isEditing ? 'Save' : 'Edit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HallDetailsForm;
