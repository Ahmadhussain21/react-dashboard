import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ serverData }) => {
    let uniquePestle = [];
    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    });

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length,
        };
    });

    return (
        <div className="h-96">
            <Line
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: 'Projects ',
                            data: pestleCount.map((i) => i.count),
                            borderWidth: 1,
                            borderColor: '#4F46E5', // Customizing line color
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    },
                }}
                height={300}
            />
        </div>
    );
};

export default LineChart;
