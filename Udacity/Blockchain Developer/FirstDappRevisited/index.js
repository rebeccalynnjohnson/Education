//Set up the appropriate configuration 
// If you uncomment the lines below and run a ganache-cli instance with the sample message .sol file 
// in remix this will work.  Just make sure to use the right compiler version number (not nightly)
// and update the address below to point at where you deployed the contract with remix.

var Web3 = require("web3")
var web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getTransactionCount("0x7B3E9818aB5c0BE719B951055DFCA1dCB73c77c3").then(console.log);