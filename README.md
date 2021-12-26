

# Getting Started with Project

This Project is a demo of a transaction in real time, user can create a wallet and do transactions over it and can check all the transactions and export it as CSV file.

## Prerequisite to project setup

In the project directory, you can run:

### NodeJS

Install [NodeJS](https://nodejs.org/en/download/) latest version. recommend to use v14x.


### MongoDB

Install [MongoDB](https://docs.mongodb.com/manual/installation/) and Remember to run as `replica set`.


## Project setup

Follow below steps to local set up

### `Clone`

Clone the project to local machine.


### `npm install`

Installs all the required dependencies for server.


### `npm run install-client`

Installs all the required dependencies for client.

### `npm run dev`

Starts the backend server and front end server for development environment.

Note: Make sure your mongoDB is running as [replica set](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/) in your local machine


## Project links

[Click here](https://transactions01.herokuapp.com/) for a demo

Use Below Link for Backend test

https://transactions01backend.herokuapp.com/


### End points awailable

1. /setup
    Type Post, Creats a new wallet for a user.
   
2. /transact/:walletId
    Type Post, Create a transaction on wallet 
    
3. /transactions?walletId=1243434&skip=0&limit=10
    Type Get, Returns transactions of wallet using limt and skip as query.
    
4. /wallet/walletId
    Type Get, Returns Wallet by walletId
    
5. /walletByUser/:userId
    Type Get, Returns wallet by userId
