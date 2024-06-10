# Job Frontend Challenge

The goal for this project is to use the provided APIs (in the package `api`) to build a very simple dashboard where users can see their company's (also referred to as **SME**, Small/Medium Enterprises) card transactions.

The dashboard should not be accessible to the general public, and the user must login first using a json web token provided by the API.

## Specification

- **Must** use Typescript and React, Redux.
- Authentication
  - User must be able to login and logout
  - If the token expires, user must be logged out
- Create a simple dashboard
  - Should not be accessed by unauthenticated users
  - In the header of the dashboard, please display the legal name of the SME, the name of the user currently logged in, and allow them to logout
- Display the transaction feed.
  - Display only current SME's transactions
  - Users should be able to filter by status of the transaction excepted `REVERSED`
  - Each transaction item must display:
    - Merchant name
    - Merchant icon
    - Transaction status
    - Formatted date (`dd.mm.yyyy` format, so something like `16.03.2021`)
    - Formatted value with the correct currency
  - Clicking the transaction should open more details about it in a sidebar
    - Here we should have the full timestamp, the status again, and the name of the user responsible
- When making requests to the API make sure to have the proper query states setup - show loading states when appropriate

# The API

The API contains a few endpoints that you'll need to use:

- `POST /login`
- `GET /users`
- `GET /smes`
- `GET /transactions`

We have a Swagger UI available and runs alongside the API at `http://localhost:3000/docs`.

## Packages

| Package name | Description                                               | Available at          | Swagger Docs               |
| ------------ | --------------------------------------------------------- | --------------------- | -------------------------- |
| api          | Simple Express.js API                                     | http://localhost:3000 | http://localhost:3000/docs |
| client       | React application, bootstrapped using Vite.js             | http://localhost:3300 | N/A                        |
| lib-common   | Common types shared by the API and potentially the client | N/A                   | N/A                        |

## Mock data and run the services

### `pnpm run create-data`

The data for the API is stored in `packages/api/src/data`, in the form of `json` files. Run this command before the other ones, to generate the data and get started with the API.

```
$ pnpm run create-data

✨ Created Users: packages/api/src/data/users.json
   Users and passwords:
      gandalf.the.grey@test.com / 123code
      frodo.baggins@test.com / 123code
      gollum@test.com / 123code
✨ Created SMEs: packages/api/src/data/smes.json
✨ Created Transactions: packages/api/src/data/transactions.json
```

### `pnpm run start`

Serves the React application using Vite.

### `pnpm run backend`

Starts the Node API.
