const Web3 = require('web3');

// Connect to the Ethereum network (e.g., Infura, Alchemy, or your local node)
const web3 = new Web3('https://polygon-mainnet.g.alchemy.com/v2/Sq_ytPsTa3J3mAtCjsinZnt_rA7M9RRJ'); // Replace with your node URL

// Replace with your contract's ABI and address
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidatesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getResults",
        "outputs": [
            {
                "internalType": "string",
                "name": "winnerName",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]; // Your contract ABI

const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Replace with your contract's deployed address

const votingContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to vote
async function vote(candidateId, voterAddress) {
    try {
        const accounts = await web3.eth.getAccounts(); // Get accounts from the wallet
        const tx = await votingContract.methods.vote(candidateId).send({ from: accounts[0] }); // Change to the correct address if needed
        return tx;
    } catch (error) {
        console.error('Error submitting vote:', error);
    }
}

// Sample function to get voting results
async function getVotingResults() {
    try {
        const results = await votingContract.methods.getResults().call();
        return results;
    } catch (error) {
        console.error('Error fetching voting results:', error);
    }
}

// Export the functions to use in other files
module.exports = {
    vote,
    getVotingResults
};
