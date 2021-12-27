

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

Note: `userId` is by default 1 as authentication is not added as of now.

1. `/setup`
    Type POST, Creats a new wallet for a user.
    
    Example: https://transactions01backend.herokuapp.com/setup

        body: {
        "userId": 1,
        "balance": 20,
        "name": "Hello world",
        "transactionId": []
        }
   
2. `/transact/:walletId`
    Type POST, Create a transaction on wallet,  replace `walletID` by `_id` of `/setup`reponse.
    
    Example: https://transactions01backend.herokuapp.com/transact/61c877a534b57b001647449f

        body: {
        "amount": 80,
        "description": "test"
        }
    
3. `/transactions?walletId=1243434&skip=0&limit=10`
    Type GET, Returns transactions of wallet using limt and skip as query.
    
    Example: https://transactions01backend.herokuapp.com/transactions?walletId=61c877a534b57b001647449f&skip={0}&limit={10}
    
    
4. `/wallet/walletId`
    Type GET, Returns Wallet by walletId
    
    Example: https://transactions01backend.herokuapp.com/wallet/61c877a534b57b001647449f
    
    
5. `/walletByUser/:userId`
    Type GET, Returns wallet by userId
    
    Example: https://transactions01backend.herokuapp.com/wallet/1
    
    
### Video Demo for application

## https://www.loom.com/share/273d3ecfae6a473a8393af594b9fdb97
