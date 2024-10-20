// controllers/votingController.js
const { web3, contractABI, contractAddress } = require('../config');
const votingContract = new web3.eth.Contract(contractABI, contractAddress);

async function vote(req, res) {
    const { candidateId, voterAddress } = req.body;

    try {
        await votingContract.methods.vote(candidateId).send({ from: voterAddress });
        res.status(200).send({ message: 'Vote successful' });
    } catch (error) {
        res.status(500).send({ message: 'Error voting', error });
    }
}

async function getResults(req, res) {
    try {
        const winnerName = await votingContract.methods.getResults().call();
        res.status(200).send({ winner: winnerName });
    } catch (error) {
        res.status(500).send({ message: 'Error fetching results', error });
    }
}

module.exports = {
    vote,
    getResults,
};
