

# Getting Started with Project

This Project is a demo of a transaction in real-time, user can create a wallet and do transactions over it and can check all the transactions and export it as a CSV file.

## Prerequisite to project setup

In the project directory, you can run:

### NodeJS

Install [NodeJS](https://nodejs.org/en/download/) latest version. recommend to use v14x.


### MongoDB

Install [MongoDB](https://docs.mongodb.com/manual/installation/) and Remember to run as `replica set`.


## Project setup

Follow below steps to local set up

### `Clone`

Clone the project to the local machine.


### `npm install`

Installs all the required dependencies for the server.


### `npm run install-client`

Installs all the required dependencies for the client.

### `npm run dev`

Starts the backend server and front end server for the development environment.

Note: Make sure your MongoDB is running as [replica set](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/) in your local machine


## Project links

[Click here](https://transactions01.herokuapp.com/) for a demo

Use Below Link for the Backend test

https://transactions01backend.herokuapp.com/


### Endpoints available

Note: `userId` is by default 1 as authentication is not added as of now.

1. `/setup`
    Type POST, Creates a new wallet for a user.
    
    Example: https://transactions01backend.herokuapp.com/setup

        body: {
        "userId": 1,
        "balance": 20,
        "name": "Hello world",
        "transactionId": []
        }
   
2. `/transact/:walletId`
    Type POST, Create a transaction on the wallet,  replace `walletID` with `_id` of `/setup` response.
    
    Example: https://transactions01backend.herokuapp.com/transact/61c877a534b57b001647449f

        body: {
        "amount": 80,
        "description": "test"
        }
    
3. `/transactions?walletId=1243434&skip=0&limit=10`
    Type GET, Returns transactions of the wallet using limit and skip as the query.
    
    Example: https://transactions01backend.herokuapp.com/transactions?walletId=61c877a534b57b001647449f&skip={0}&limit={10}
    
    
4. `/wallet/walletId`
    Type GET, Returns Wallet by walletId
    
    Example: https://transactions01backend.herokuapp.com/wallet/61c877a534b57b001647449f
    
    
5. `/walletByUser/:userId`
    Type GET, Returns wallet by userId
    
    Example: https://transactions01backend.herokuapp.com/wallet/1
    
    
## Video Demo for application

## https://www.loom.com/share/273d3ecfae6a473a8393af594b9fdb97


## Database design

Deployed MongoDB as a replica set to support transactions When a transaction is initiated, Transaction will commit in the two-step 
Calculate balance and update wallet record.
If the wallet record is updated create a transaction record.
if anything goes wrong in the above operation whole transaction will roll-back

![data base](https://user-images.githubusercontent.com/15859913/147466941-bc23c5f8-610a-4ea0-950f-78d311245aef.png)

Note: User table is not implemented as of now so userId is by default 1
