import React, { useState, useEffect } from "react";
import Navbar from '../../Web/Navbar';
import { BookMarked, Heart, DollarSign, Wifi, Home, Tv, Flame, Filter } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Sign in to perform actions');


const ExplorePage = () => {
    const [filters, setFilters] = useState({
        priceRange: 1000,
        propertyType: 'all',
        amenities: [],
    });

    const [filteredCards, setFilteredCards] = useState([]);

    const amenities = [
        { icon: DollarSign, tooltip: "Affordable" },
        { icon: Wifi, tooltip: "Free wifi" },
        { icon: Home, tooltip: "Entire home" },
        { icon: Tv, tooltip: 'HDTV' },
        { icon: Flame, tooltip: "Heating" },
    ];

    const bookingCards = [
        {
            id: 1,
            title: "Wooden House, Florida",
            image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
            rating: 5.0,
            price: 129,
            type: "house"
        },
        {
            id: 2,
            title: "Beachfront Villa, Malibu",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "Luxurious beachfront villa with stunning ocean views, private pool, and direct access to the sandy shores of Malibu.",
            rating: 4.9,
            price: 599,
            type: "villa"
        },
        {
            id: 3,
            title: "Mountain Cabin, Aspen",
            image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "Cozy mountain retreat perfect for skiing enthusiasts, featuring a fireplace, hot tub, and breathtaking mountain views.",
            rating: 4.8,
            price: 299,
            type: "cabin"
        },
        {
            id: 4,
            title: "City Loft, New York",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "Modern and stylish loft in the heart of Manhattan, close to all the attractions and featuring a rooftop terrace.",
            rating: 4.7,
            price: 249,
            type: "apartment"
        },
        {
            id: 5,
            title: "Tropical Bungalow, Bali",
            image: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "Exotic bungalow surrounded by lush tropical gardens, featuring a private pool and traditional Balinese architecture.",
            rating: 4.9,
            price: 179,
            type: "bungalow"
        },
    ];

    useEffect(() => {
        setFilteredCards(bookingCards);
    }, []);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: type === 'checkbox' 
                ? checked 
                    ? [...prevFilters.amenities, value]
                    : prevFilters.amenities.filter(item => item !== value)
                : value
        }));
    };

    useEffect(() => {
        const newFilteredCards = bookingCards.filter(card => {
            return (
                card.price <= filters.priceRange &&
                (filters.propertyType === 'all' || card.type.toLowerCase() === filters.propertyType.toLowerCase()) &&
                (filters.amenities.length === 0 || filters.amenities.every(amenity => 
                    card.description.toLowerCase().includes(amenity.toLowerCase())
                ))
            );
        });
        setFilteredCards(newFilteredCards);
    }, [filters]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-10">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight font-josefin-sans">Your Vision, Our Spaces!</h1>
                    <p className="text-xl text-gray-600 font-popppins">Find your perfect getaway</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="flex items-center mb-4">
                        <Filter className="h-6 w-6 text-blue-500 mr-2" />
                        <h2 className="text-2xl font-semibold">Filters</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range (up to ${filters.priceRange})</label>
                            <input
                                type="range"
                                name="priceRange"
                                min="0"
                                max="1000"
                                value={filters.priceRange}
                                onChange={handleFilterChange}
                                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-sm text-gray-600 mt-1">
                                <span>$0</span>
                                <span>${filters.priceRange}</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                            <select
                                name="propertyType"
                                value={filters.propertyType}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="all">All</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="cabin">Cabin</option>
                                <option value="bungalow">Bungalow</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Amenities</label>
                            <div className="space-y-2">
                                {amenities.map((amenity, index) => (
                                    <label key={index} className="inline-flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            name="amenities"
                                            value={amenity.tooltip}
                                            checked={filters.amenities.includes(amenity.tooltip)}
                                            onChange={handleFilterChange}
                                            className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">{amenity.tooltip}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 bg-gray-100">
                    {filteredCards.map((card) => (
                        <div key={card.id} className="bg-white rounded-xl h-[68vh] w-[29vw] shadow-lg overflow-hidden cursor-pointer transform hover:scale-103 transition duration-300">
                            <div className="relative">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={card.image}
                                    alt={card.title}
                                />
                                <button onClick={notify}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition duration-200"
                                    aria-label="Like"
                                >
                                    <Heart className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">               
                                    <h2 onClick = {notify} className="text-xl font-semibold text-blue-900">{card.title}</h2>
                                    <div className="flex items-center bg-blue-100 rounded-full px-2 py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-blue-600 font-semibold">{card.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-3">{card.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {amenities.map((item, index) => (
                                        <div key={index} className="relative group">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors group-hover:bg-gray-200">
                                                <item.icon className="h-5 w-5" />
                                            </span>
                                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                {item.tooltip}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-blue-900">${card.price}/night</span>
                                    <button className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center">
                                        <BookMarked className="h-5 w-5 mr-2" />
                                        <span className="text-center">Reserve</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExplorePage;


