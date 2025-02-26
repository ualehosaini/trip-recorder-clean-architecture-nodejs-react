import React, { useState } from 'react';
import VehicleWiseMillageReport from './VehicleWiseMillageReport';
import VehicleWiseMillageChart from './VehicleWiseMillageChart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/reportStyles.css';

const ReportPage = () => {
    const [selectedStartDate, setSelectedStartDate] = useState(new Date('2019-01-01'));
    const [selectedEndDate, setSelectedEndDate] = useState(new Date('2025-12-31'));
    const [startDate, setStartDate] = useState(new Date('2019-01-01'));
    const [endDate, setEndDate] = useState(new Date('2025-12-31'));

    const handleFetchReport = () => {
        setStartDate(selectedStartDate);
        setEndDate(selectedEndDate);
    };

    return (
        <div className="report-page">
            <h1>Reports</h1>
            <div className="date-picker-container">
                <div className="date-picker">
                    <label>Start Date:</label>
                    <DatePicker
                        selected={selectedStartDate}
                        onChange={(date) => setSelectedStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                <div className="date-picker">
                    <label>End Date:</label>
                    <DatePicker
                        selected={selectedEndDate}
                        onChange={(date) => setSelectedEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                <button onClick={handleFetchReport}>Fetch Report</button>
            </div>
            <VehicleWiseMillageReport startDate={startDate.toISOString().split('T')[0]} endDate={endDate.toISOString().split('T')[0]} />
            <VehicleWiseMillageChart startDate={startDate.toISOString().split('T')[0]} endDate={endDate.toISOString().split('T')[0]} />
        </div>
    );
};

export default ReportPage;