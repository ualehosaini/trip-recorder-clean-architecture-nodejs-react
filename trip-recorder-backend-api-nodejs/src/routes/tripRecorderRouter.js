const express = require("express");

const VehicleController = require("../controllers/VehicleController");
const DriverController = require("../controllers/DriverController");
const LocationController = require("../controllers/LocationController");
const TripController = require("../controllers/TripController");
const ReportsController = require("../controllers/ReportsController");

const router = express.Router();

// Vehicle routes
router.get("/vehicle", VehicleController.getVehicles);
router.get("/vehicle/:registration", VehicleController.getVehicle);
router.post("/vehicle", VehicleController.createVehicle);
router.put("/vehicle/:registration", VehicleController.updateVehicle);
router.delete("/vehicle/:registration", VehicleController.deleteVehicle);

// Driver routes
router.get("/driver", DriverController.getDrivers);
router.get("/driver/:code", DriverController.getDriver);
router.post("/driver", DriverController.createDriver);
router.put("/driver/:code", DriverController.updateDriver);
router.delete("/driver/:code", DriverController.deleteDriver);

// Location routes
router.get("/location", LocationController.getLocations);
router.get("/location/:shortName", LocationController.getLocation);
router.post("/location", LocationController.createLocation);
router.put("/location/:shortName", LocationController.updateLocation);
router.delete("/location/:shortName", LocationController.deleteLocation);

// Trip routes
router.get("/trip", TripController.getTrips);
router.get("/trip/:id", TripController.getTrip);
router.post("/trip", TripController.createTrip);
router.put("/trip/:id", TripController.updateTrip);
router.delete("/trip/:id", TripController.deleteTrip);

// Reports routes
router.get("/reports/vehicle-wise-millage", ReportsController.getVehicleWiseMillage);

module.exports = router;