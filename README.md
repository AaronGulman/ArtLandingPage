# Art Landing Page Template

## Technologies Used
- **Frontend**: React, plain CSS (add tailwind instead)
- **Backend**: Node.js, Express.js (Nest.js perhaps?)
- **Database**: MongoDB
- **Build Tool**: Vite
- **Package Manager**: npm

- ### Live Demo: https://aarongulman.github.io/ArtLandingPage/

## Project Overview

The Art Landing Page Template is a project designed to provide artists and creatives with a customizable personal website template. This template allows users to showcase their work, list their services, and accept orders from clients. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this project aims to offer a modern, responsive, and user-friendly platform for managing personal portfolios and client interactions.

<img width="400" alt="Website1" src="https://github.com/AaronGulman/ArtLandingPage/assets/81993286/b058b24b-8b1a-4740-8b0d-51a627c748ec">
<img width="400" alt="Website2" src="https://github.com/AaronGulman/ArtLandingPage/assets/81993286/8620febe-0df4-4564-81f2-42ec35019fc6">
<img width="400" alt="Website3" src="https://github.com/AaronGulman/ArtLandingPage/assets/81993286/81643092-3c92-42f7-82f2-dcef5db46329">
<img width="400" alt="Website4" src="https://github.com/AaronGulman/ArtLandingPage/assets/81993286/299c68dc-24cd-44c8-8980-a4de1a9df9e8">



## Features

- **Responsive Design**: Ensures the website looks great on all devices.
- **Smooth Scrolling Navigation**: Allows users to smoothly navigate between different sections of the website.
- **Order Management**: Enables artists to accept and manage orders from clients.
- **Customizable Sections**: Easy to customize sections such as Header, Greeting, Experience, Projects, and Services.
- **Client-Side Routing**: Uses React Router for seamless page transitions.

## Project Structure

```plaintext
├── client
│   ├── node_modules
│   ├── public
│   │   ├── 1.jpeg
│   │   ├── 2.jpeg
│   │   ├── 3.jpeg
│   │   ├── 4.jpeg
│   │   └── index.html
│   ├── src
│   │   ├── assets
│   │   │   └── NewLogo.svg
│   │   ├── components
│   │   │   ├── Card
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Card.module.css
│   │   │   ├── Experience
│   │   │   │   ├── Experience.jsx
│   │   │   │   └── Experience.module.css
│   │   │   ├── Greeting
│   │   │   │   ├── Greeting.jsx
│   │   │   │   └── Greeting.module.css
│   │   │   ├── Header
│   │   │   ├── Order
│   │   │   ├── Projects
│   │   │   │   ├── Projects.jsx
│   │   │   │   └── Projects.module.css
│   │   │   ├── Services
│   │   │   │   ├── Services.jsx
│   │   │   │   └── Services.module.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── server
│   ├── db
│   ├── node_modules
│   ├── router
│   ├── .gitignore
│   ├── config.env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ArtLandingPage.git
    cd ArtLandingPage
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

### Running the Application

1. Start the MongoDB server:
    ```bash
    mongod
    ```

2. Start the backend server:
    ```bash
    cd server
    npm start
    ```

3. Start the frontend development server:
    ```bash
    cd client
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`.

## DO NOT FORGET TO CONFIGURE YOUR OWN .ENV

### Project Status

This project is currently under development. Features such as order management and additional customization options are in progress. We hope to finish the code soon and release a stable version for artists and creatives to easily set up their personal websites.

Frontend needs to imrpoved and the security of the backend must be prioritized.

## Contributing

 Please feel free to fork the repository, make changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
