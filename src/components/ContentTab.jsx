import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaSearch } from 'react-icons/fa';

//import from files
import Cards from './Cards';
import Charts from './Charts';
import Filters from './Filters';
import axios from 'axios';

const ContentTab = ({ data, setMainData }) => {
    // state to store the number of data cards we want to display at a time, we'll update it on click of a button
    const [limit, setLimit] = useState(4);
    const limitedData = data.slice(0, limit);
    // state to store the search bar text
    const [search, setSearch] = useState("");
    // function to make an api call to get the filtered data
    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:4000/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="tabsClass">
            <Tabs defaultActiveKey="chart" className="mb-3">
                <Tab eventKey="chart" title="Dashboard">
                <form className="flex justify-center space-x-4 bg-white-100 p-4 rounded-lg mb-4 " onSubmit={handleSearchResult}>
                    <input className="bg-white rounded-md px-4 py-2 w-72 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 text-gray-700 border border-gray-300 focus:transition duration-300 ease-in-out transform hover:scale-105" type="search" placeholder="Search Keyword" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105" type="submit">
                        <FaSearch />
                    </button>
                </form>

                    <Filters setMainData={setMainData} />
                    {limitedData.length === 0 ? (
                        <div className=" h-[50vh] flex justify-center items-center">
                        <div className="flex flex-col ">
                        
                            <div className='spinner'></div>
            
                          <span className="mt-3 ">Loading</span>
                        </div>
                        </div> 
                    ) :(<Charts data={data} />
                    )}
                </Tab>
                <Tab eventKey="data" title="Data">
                <form className="flex justify-center space-x-4 bg-white-100 p-4 rounded-lg mb-4 " onSubmit={handleSearchResult}>
                    <input className="bg-white rounded-md px-4 py-2 w-72 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500 text-gray-700 border border-gray-300 focus:transition duration-300 ease-in-out transform hover:scale-105" type="search" placeholder="Search Keyword" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105" type="submit">
                        <FaSearch />
                    </button>
                </form>
                    <Filters setMainData={setMainData} />

                    {limitedData.length === 0 ? (
                        <div className=" h-[50vh] flex justify-center items-center">
                        <div className="flex flex-col ">
                        
                            <div className='spinner'></div>
            
                          <span className="mt-3 ">Loading</span>
                        </div>
                        </div> 
                    ) : (
                        <CardGroup>
                            {limitedData.map((e, i) => (
                                <Cards item={e} key={i} />
                            ))}
                        </CardGroup>
                    )}
                    
                    <div className="flex justify-center my-4">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105" onClick={() => setLimit(prev => prev + 4)}>Show More</button>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default ContentTab;
