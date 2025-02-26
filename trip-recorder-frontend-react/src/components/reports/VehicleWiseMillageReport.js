import React, { useState, useEffect } from 'react';
import { getVehicleWiseMillageReport } from '../../services/ReportService';
import '../../styles/reportStyles.css';

const VehicleWiseMillageReport = ({ startDate, endDate }) => {
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
        <div className="report-container">
            <h2>Vehicle Wise Millage Report</h2>
            <table>
                <thead>
                    <tr>
                        <th>Registration</th>
                        <th>Description</th>
                        <th>Millage</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((vehicle) => (
                        <tr key={vehicle.registration}>
                            <td>{vehicle.registration}</td>
                            <td>{vehicle.description}</td>
                            <td>{vehicle.millage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleWiseMillageReport;