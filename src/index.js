const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blockchain = require('./blockchain'); // Ensure blockchain.js is in the same directory

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample endpoint
app.get('/', (req, res) => {
    res.send('Voting Platform Backend');
});

// API endpoint to vote
app.post('/vote', async (req, res) => {
    const { candidateId, voterAddress } = req.body;

    // Check if candidateId and voterAddress are provided
    if (!candidateId || !voterAddress) {
        return res.status(400).send('candidateId and voterAddress are required');
    }

    try {
        // Call the blockchain vote function
        await blockchain.vote(candidateId, voterAddress);
        res.status(200).send('Vote submitted successfully');
    } catch (error) {
        console.error('Error submitting vote:', error);
        res.status(500).send('Error submitting vote');
    }
});

// API endpoint to get results
app.get('/results', async (req, res) => {
    try {
        const results = await blockchain.getResults();
        res.status(200).json({ winner: results });
    } catch (error) {
        console.error('Error getting results:', error);
        res.status(500).send('Error getting results');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
