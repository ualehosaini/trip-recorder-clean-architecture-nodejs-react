import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getVehicleWiseMillageReport } from '../../services/ReportService';
import '../../styles/reportStyles.css';

const VehicleWiseMillageChart = ({ startDate, endDate }) => {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReportData = async () => {
            setLoading(true);
            try {
                const data = await getVehicleWiseMillageReport(startDate, endDate);
                setReportData(data);
            } catch (error) {
                console.error('Error fetching report data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReportData();
    }, [startDate, endDate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="chart-container">
            <h2>Vehicle Wise Millage Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={reportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="registration" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="millage" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VehicleWiseMillageChart;