import React from 'react';
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Charts = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg">
            {/* Polar Area and Doughnut Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                {/* Polar Area Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-2xl font-semibold mb-4">Polar Area Chart</h2>
                    <PolarChart serverData={data} />
                </div>
                {/* Doughnut Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-2xl font-semibold mb-4">Doughnut Chart</h2>
                    <DoughnutChart serverData={data} />
                </div>
            </div>

            {/* Bar Chart */}
            <div className="my-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
                <BarChart serverData={data} />
            </div>

            {/* Line Chart */}
            <div className="my-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
                <LineChart serverData={data} />
            </div>

            {/* Radar and Pie Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                {/* Radar Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-2xl font-semibold mb-4">Radar Chart</h2>
                    <RadarChart serverData={data} />
                </div>
                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
                    <PieChart serverData={data} />
                </div>
            </div>
        </div>
    );
}

export default Charts;
