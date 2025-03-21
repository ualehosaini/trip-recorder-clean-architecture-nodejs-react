const Trip = require("../models/Trip");
const VehicleWiseMillage = require("../models/Reports/VehicleWiseMillage");

class TripRepository {
    async getVehicleWiseMillage(startDate, endDate) {
        if (!startDate || !endDate) {
            throw new Error('Invalid start date or end date');
        }

        // Parse the dates to ensure they are in the correct format
        const start = new Date(startDate);
        const end = new Date(endDate);

        const results = await Trip.aggregate([
            // Filter trips within the provided start and end date range
            {
                $match: {
                    startDate: { $gte: start },
                    endDate: { $lte: end }
                }
            },
            // Group by vehicle registration to calculate total distance
            {
                $group: {
                    _id: "$vehicle",
                    totalDistance: { $sum: "$distance" }
                }
            },
            // Join vehicle details from Vehicle collection using registration
            {
                $lookup: {
                    from: "Vehicle",
                    localField: "_id",
                    foreignField: "registration",
                    as: "vehicleDetails"
                }
            },
            // Flatten the vehicleDetails array to an object
            { $unwind: { path: "$vehicleDetails", preserveNullAndEmptyArrays: true } },
            // Sort results by total distance in descending order
            {
                $sort: { totalDistance: -1 }
            },
            // Project fields into the DTO structure
            {
                $project: {
                    registration: "$_id",
                    description: "$vehicleDetails.description",
                    millage: "$totalDistance",
                    _id: 0
                }
            }
        ]);

        return results.map(r => new VehicleWiseMillage(r.registration, r.description || "", r.millage));
    }
}

module.exports = new TripRepository();