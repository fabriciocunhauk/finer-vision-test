# Finer Vision Test

This file contains information on how to create the database, run the server, and client.

## NOTE

For submission purposes, the .env files for a local environment have been included.

Please ensure that Node is installed on the computer running this test

## DB Setup

Cd into server folder.

Run:

```
npm install
```

Create a .env file at the root directory of the "server" folder.

Enter your credentials on .env file.

Example:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=finerVisionTest
DB_TABLE_NAME=finerVisionTable
```

To create a database Run:

```
npm run create-database
```


## Server Setup

Run server:

```
npm run dev
```

## Client Setup

Ensure the Server is running before attempting to perform any command that requires data fetching or submission.

## Client Start

Cd into client folder.

Run:

```
npm install
```

To start the client run the following command from the client directory.

```
npm start
```

## Route Interactions

For this project, the server routes can be seen below:

Adds a user to the database

```
api.get("/")
```

Gets a list of all the users from the database

```
api.post("/users")
```
ERROR:

If you use Mac i advise you to delete the package-lock.json and run npm install.

If you run into any issues while viewing the submission, please get in touch with me.
