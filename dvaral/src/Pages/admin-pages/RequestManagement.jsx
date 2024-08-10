import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth';

import RequestSummary from './RequestSidePanel';

function RequestManagement() {

    const navigate = useNavigate();

    const [requests, setRequests] = useState([
        {
            id: 1,
            client: 'John Doe',
            date: '2024-08-15',
            event: 'Wedding',
            status: 'pending',
            hallDetails: {
                name: 'Grand Ballroom',
                capacity: 200,
                price: '$2000',
                amenities: ['Stage', 'Dance floor', 'Audio system']
            }
        },
        {
            id: 2,
            client: 'Jane Smith',
            date: '2024-08-20',
            event: 'Corporate Event',
            status: 'pending',
            hallDetails: {
                name: 'Conference Center',
                capacity: 150,
                price: '$1500',
                amenities: ['Projector', 'Whiteboard', 'Wi-Fi']
            }
        },
  {
            id: 3,
            client: 'Bob Johnson',
            date: '2024-08-25',
            event: 'Birthday Party',
            status: 'pending',
            hallDetails: {
                name: 'Party Hall',
                capacity: 100,
                price: '$1000',
                amenities: ['Decorations', 'Catering kitchen', 'Sound system']
            }
        },
        {
            id: 4,
            client: 'John Doe',
            date: '2024-08-15',
            event: 'Wedding',
            status: 'pending',
            hallDetails: {
                name: 'Grand Ballroom',
                capacity: 200,
                price: '$2000',
                amenities: ['Stage', 'Dance floor', 'Audio system']
            }
        },
{
            id: 5,
            client: 'Jane Smith',
            date: '2024-08-20',
            event: 'Corporate Event',
            status: 'pending',
            hallDetails: {
                name: 'Conference Center',
                capacity: 150,
                price: '$1500',
                amenities: ['Projector', 'Whiteboard', 'Wi-Fi']
            }
        },
        {
            id: 6,
            client: 'Bob Johnson',
            date: '2024-08-25',
            event: 'Birthday Party',
            status: 'pending',
            hallDetails: {
                name: 'Party Hall',
                capacity: 100,
                price: '$1000',
                amenities: ['Decorations', 'Catering kitchen', 'Sound system']
            }
        },
    ]);




    const [expandedId, setExpandedId] = useState(null);
    const [showSummary, setShowSummary] = useState(false);

    const handleAccept = (id) => {
        setRequests(requests.map(req =>
            req.id === id ? { ...req, status: 'accepted' } : req
        ));
    };

    const handleDecline = (id) => {
        setRequests(requests.map(req =>
            req.id === id ? { ...req, status: 'declined' } : req
        ));
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleRequestSummary = () => {
        setShowSummary(true);
    };

    const handleCloseSummary = () => {
        setShowSummary(false);
    };

    const handleLogout = () => {
        authService.SignOut()
        navigate('/')
    }

    if (showSummary) {
        return <RequestSummary requests={requests} onClose={handleCloseSummary} />;
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-6">Event Request Management</h2>
                <div className="flex flex-col sm:flex-row justify-between mb-6">
                    <button 
                        onClick={handleRequestSummary}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2 sm:mb-0"
                    >
                        Request Summary
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                    >
                        Logout
                    </button>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 overflow-x-auto">
                    <table className="w-full divide-y divide-indigo-200">
                        <thead className="bg-indigo-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Client</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Date</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Event</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-indigo-100">
                            {requests.map((request) => (
                                <React.Fragment key={request.id}>
                                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">{request.client}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{request.date}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{request.event}</td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${request.status === 'accepted' ? 'bg-green-100 text-green-800' : 
                                                request.status === 'declined' ? 'bg-red-100 text-red-800' : 
                                                'bg-yellow-100 text-yellow-800'}`}>
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                                            {request.status === 'pending' && (
                                                <>
                                                    <button onClick={() => handleAccept(request.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-1 transition-colors duration-200">
                                                        Accept
                                                    </button>
                                                    <button onClick={() => handleDecline(request.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-1 transition-colors duration-200">
                                                        Decline
                                                    </button>
                                                </>
                                            )}
                                            <button onClick={() => toggleExpand(request.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded transition-colors duration-200">
                                                {expandedId === request.id ? 'Hide Details' : 'Show Details'}
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedId === request.id && (
                                        <tr>
                                            <td colSpan="5" className="px-4 py-3">
                                                <div className="bg-indigo-50 p-4 rounded-lg shadow-inner">
                                                    <h4 className="font-bold text-lg mb-3 text-indigo-800">Hall Details</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <p><span className="font-semibold text-indigo-700">Name:</span> {request.hallDetails.name}</p>
                                                        <p><span className="font-semibold text-indigo-700">Capacity:</span> {request.hallDetails.capacity}</p>
                                                        <p><span className="font-semibold text-indigo-700">Price:</span> {request.hallDetails.price}</p>
                                                        <p><span className="font-semibold text-indigo-700">Amenities:</span> {request.hallDetails.amenities.join(', ')}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RequestManagement;