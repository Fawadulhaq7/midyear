


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Array to store appointments
let appointments = [];

// Endpoint to schedule an appointment
app.post('/schedule', (req, res) => {
    const { doctor, patient, time } = req.body;

    // Check if appointment time is available
    const isAvailable = appointments.every(appt => {
        return appt.time !== time;
    });

    if (!isAvailable) {
        return res.status(400).json({ error: 'Appointment time is not available' });
    }

    // Add appointment to the array
    appointments.push({ doctor, patient, time });
    res.json({ message: 'Appointment scheduled successfully' });
});

// Endpoint to get all appointments
app.get('/appointments', (req, res) => {
    res.json(appointments);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});