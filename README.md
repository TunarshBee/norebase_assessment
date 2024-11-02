# Norebase Cryptocurrency Table Assessment

This is a responsive cryptocurrency table application built with **React + Vite**, styled with **Tailwind CSS**, used **Axios** to fetch data, leveraged on **React Query** for data caching and jest for testing the assessment. 

The assessment criteria are to:
- displays cryptocurrency information using a table
- Implement pagination showing the previous and next button when necessary
- Make the app responsive across difference screen size.

## Features

- Responsive table to display the coins with 10 coins per page.
- Displaying skeleton loader while the api response is not available yet.
- Pagination with 10 items per page.
- Hide the `previous` button on the first page.
- Hide the `next` button on the last page.

## Basic 

- **Node.js** (v14 or later)
- **bun** or **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

Environment Variables: Add .env file to root of the project

### 2. Clone the Repository

Open your terminal, copy and paste the below bash command to clone the repository to your local machine.

```bash
git clone https://github.com/TunarshBee/norebase_assessment.git
```
After successfully cloning the repository, run the below bash command

```bash
cd norebase_assessment
```

### 3. Install Dependencies

Now, run the following command to install the necessary dependencies

```bash
# Using bun
bun install

# Using npm
npm install

# Or using yarn
yarn install
```

### 4. Run the application

Run the below command to start the development server

```bash
# Using bun
bun run dev

# Using npm
npm run dev

# Or using yarn
yarn run dev
```

If nothing is running on the port `5173`, the application will be running on `http://localhost:5173/`. Else, the application will be running on a different port, which will be determined and shown by the terminal.

### 5. Testing the application

To test the application, you can run the following command:

```bash
# Using bun
bun run test

# Using npm
npm run test

# Or using yarn
yarn test
```

The command will test the application in the using jest.

### 6. Build the Application

To create a production build, you can use the following command:

```bash
# Using bun
bun run build

# Using npm
npm run build

# Or using yarn
yarn build
```

The command will create a production build of the application in the `build` directory.

### 7. Deploying the Application
You can deploy the application to any platform of your choice. But in this project, I leveraged on vercel UI by deploying it on vercel website and allowed vercel to handle the CICD deployment.

If you want to deploy the application using the vercel CLI, you can setup a github CICD workflow to automate the linting, testing and deployment process of the application.

## Folder Structure

```
norebase_assessment/
├── __mocks__/
|   ├──fileMock.js
|   ├──react-loading-skeleton.tsx  # Mock file to test the skeleton loader.
├── src/
|   ├── __tests__/                 # Folder that contains the test files.
|   ├── api/                       # Folder that contains anything concerning the API.
|   |   ├── axios.ts               # Axios instance file.
|   |   ├── getRequests.ts         # File to handle get requests.
|   ├── assets/
|   ├── common/                    # Folder to house common/reusable components.
|   |   ├── CoinRow.tsx            # Reusable table row.
|   |   ├── TablePagination.tsx     
|   |   ├── index.tsx              # The table component
│   ├── components/
│   │   └── Home.tsx               # Component to render the data table.
|   ├── Hooks/                     # Custom hooks
|   ├── types/                     # Folder that contains the types and interfaces.
│   ├── App.tsx                    # The assessment's entry point.
│   ├── App.css                    # Styles for the App.tsx component.
│   ├── main.tsx                   # Main file to render the app
│   ├── index.css                  # Index.tsx styles
|   └── vite-env.d.ts              # vite environment variables declaration file
├── setup-test.ts                  # Setup file for the test.
├── .env.example                   # Evironment variables example file.
├── .gitIgnore                     # File to ignore unwanted files/folders from getting pushed.
├── babel.config.ts                # Babel config file to detect JSX in the test.
├── eslint.config.js               # lint settings
├── index.html                     # html file to load react components into
├── package.json                   # package and app information + scripts
├── tsconfig.app.json              # typescript configration for client app
├── tsconfig.json                  # typescript config to mix server and client info
├── tsconfig.node.json             # typescript config for node related things
├── vite.config.ts                 # config for vite bundler
├── public/                        # Static assets
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration for Tailwind CSS
└── README.md                      # Documentation file
```

## Dependencies

- **Vite** - Library for scaffolding an application.
- **React** - JavaScript library for building user interfaces.
- **TypeScript** - JavaScript's super set to speed up javascript apps development.
- **Axios** - For making HTTP requests to fetch data from the CoinLore API.
- **Axios** - Use to handle temporary caching and manage state.
- **Tailwind CSS** - Utility-first CSS preprocessor for styling.
- **Jest** - Javascript Testing Framework

## Author

- [Sanusi Bello](https://github.com/TunarshBee/)