
# Funding DApp with Truffle and Ganache

## Overview

This repository contains a decentralized application (DApp) fortransferring funds and recieving using the Ethereum blockchain. The DApp is built using the Truffle framework for Ethereum smart contract development and Ganache for local blockchain testing. it can transfer funds, withdraw funds, shows balance and address of the account on react website 


## Prerequisites

Before you begin, make sure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [MetaMask](https://metamask.io/) browser extension (for interacting with the DApp)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Upendra-Jaiswal/funding-dApp.git
   cd funding-dApp
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Start Ganache to simulate a local Ethereum blockchain.

4. Compile and deploy the smart contracts to the local blockchain:

   ```bash
   truffle migrate --reset
   ```

5. Update the `truffle-config.js` file with the appropriate network configuration if needed.

6. Run the development server:

   ```bash
   npm start
   ```

7. Open your web browser and connect MetaMask to the local Ganache blockchain network.

8. Import accounts from Ganache into MetaMask for testing. These accounts will have test Ether for funding campaigns.

## Usage

1. Access the DApp by visiting `http://localhost:3000` in your web browser.

2. Create a new campaign by providing a title, description, and funding goal.

3. Contribute funds to an existing campaign by clicking on the "Contribute" button and specifying the amount of Ether to contribute.

4. Check the campaign details to see the progress, contributors, and whether the funding goal has been reached.

5. The campaign owner can request to withdraw funds when the goal is met, and contributors can approve or reject the withdrawal request.

## Smart Contracts

The smart contracts for this DApp are located in the `contracts/` directory. The main contract is `Campaign.sol`, which handles campaign creation, contributions, and withdrawal requests.

## Configuration

- You can configure network settings, such as the provider URL and port, in the `truffle-config.js` file.

## Testing

To run tests for the smart contracts, use the following command:

```bash
truffle test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This DApp was created as a learning project and is not suitable for production use without further development and security audits.

## Contributors

- Add your name and contact information here if you want to accept contributions or collaborate on this project.

---

Feel free to customize this README to include any additional information or instructions specific to your project. Don't forget to replace placeholder text like `yourusername` with your actual information.
