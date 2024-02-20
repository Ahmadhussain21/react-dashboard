import React, { useState } from 'react';
import { FaUndoAlt } from 'react-icons/fa';
import axios from 'axios';

const Filters = ({ setMainData }) => {
    const [selectedYear, setSelectedYear] = useState('');

    const handleSelect = async (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
        getDataFromDB(selectedYear);
    };

    const getDataFromDB = async (year) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/data/year/${year}`);
            setMainData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleReset = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/data/all');
            setMainData(response.data.data);
        } catch (error) {
            console.log(error);
        }
        setSelectedYear('');
    };

    return (
        <div className="flex justify-center items-center space-x-4 my-4">
            <div className="relative">
    <select
        value={selectedYear}
        onChange={handleSelect}
        className="appearance-none bg-purple-500 hover:bg-purple-600 focus:bg-purple-600 text-white px-6 py-2 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105"
    >
        <option value="" disabled hidden>Select Year</option>
        {[2014, 2015, 2016, 2017, 2018, 2020].map((year) => (
            <option key={year} value={year} className="text-gray-800 bg-white ">{year}</option>
        ))}
    </select>
    <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
        />
    </svg>
</div>
            <button
                onClick={handleReset}
                className="bg-gray-400 hover:bg-gray-600 text-white px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
                <FaUndoAlt />
            </button>
        </div>
    );
};

export default Filters;
