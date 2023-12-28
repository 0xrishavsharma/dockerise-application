# Dockerized React App with Vite

This project is a React application that has been dockerized for easy development and deployment. It uses Vite for a faster and leaner development experience.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Node.js v18.3.0

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/0xrishavsharma/dockerise-application .
    ```
2. Navigate to the project directory
    ```sh
    cd dockerise-react-app-with-vite
    ```
3. Build the Docker image
    ```sh
    docker build -t dockerise-react-app-with-vite .
    ```
4. Run the Docker container
    ```sh
    docker run -p 8080:80 dockerise-react-app-with-vite
    ```
The application should now be running at [http://localhost:8080](http://localhost:8080).

## Project Structure

The project has the following structure:

- `src/`: This directory contains the source code for the React application.
- `public/`: This directory contains static assets.
- `Dockerfile`: This file contains Docker commands to build an image for the application.
- `vite.config.ts`: This file contains configuration for Vite.
- `package.json`: This file contains the dependencies and scripts for the application.
- `tsconfig.json`: This file contains the TypeScript configuration for the application.


## License

This project is licensed under the MIT License - Please feel free to use it anywhere, however you like, no need for attribution