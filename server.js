const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // Import path module

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the index.html file when visiting the root ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Make sure index.html is in the root folder
});

app.post('/submit-phone', (req, res) => {
    const { email, password, phone } = req.body;

    // Log the form data (this is where you could store it in a database)
    console.log(`Email: ${email}, Password: ${password}, Phone: ${phone}`);

    // Send a response to the user
    res.send('Phone number submitted successfully!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
