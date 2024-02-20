import React from 'react';

const Cards = ({ item }) => {
    // Function to truncate text if it exceeds 50 characters
    const truncateText = (text) => {
        return text.length > 20 ? text.slice(0, 25) + "..." : text;
    };

    return (
        <div className="cardDiv flex justify-center items-center bg-white-400">
    <div className="bg-white shadow-md rounded-md overflow-hidden m-2 flex flex-col w-80 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
        <div className="flex-none bg-purple-200 text-center py-3">
            <h2 className="text-lg font-semibold text-gray-800 uppercase">{item.sector ? item.sector : "Sector"}</h2>
            <p className="text-md text-gray-500">{item.topic ? item.topic : "No Info"}</p>
        </div>
        <div className="flex-grow px-4 py-3">
            <ul className="text-sm text-gray-700 space-y-2">
                <li>
                    <span className="font-semibold text-gray-800">Title:</span> {truncateText(item.title ? item.title : "No Info")}
                </li>
                        <li>
                            <span className="font-semibold text-gray-800">Insight:</span> {truncateText(item.insight ? item.insight : "No Info")}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">URL:</span> {truncateText(item.url ? item.url : "No Info")}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Region:</span> {item.region ? item.region : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Country:</span> {item.country ? item.country : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Source:</span> {item.source ? item.source : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Pestle:</span> {item.pestle ? item.pestle : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Start Year:</span> {item.start_year ? item.start_year : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">End Year:</span> {item.end_year ? item.end_year : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Added:</span> {item.added ? item.added : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Published:</span> {item.published ? item.published : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Intensity:</span> {item.intensity ? item.intensity : "No Info"}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-800">Likelihood:</span> {item.likelihood ? item.likelihood : "No Info"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
