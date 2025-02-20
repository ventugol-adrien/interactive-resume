# Interactive Resume

This project is an interactive resume application built with React, TypeScript, and Vite. It leverages modern web development practices and integrates with Google's Gemini AI to provide a dynamic and engaging experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [ESLint Configuration](#eslint-configuration)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Resume:** Presents resume information in an engaging and interactive format.
- **Dynamic Content:** Fetches job and company data from an external API.
- **AI-Powered Insights:** Integrates with Google's Gemini AI to provide insights and answer questions about the resume.
- **Dynamic Favicon and Title:** Updates the favicon and title dynamically based on the job being viewed.
- **Client-Side Routing:** Uses React Router for smooth navigation.
- **Modern UI:** Built with React and styled with CSS.

## Technologies Used

- **Frontend:**
    - React: A JavaScript library for building user interfaces.
    - TypeScript: A typed superset of JavaScript.
    - Vite: A fast build tool and development server for modern web projects.
    - React Router: A library for declarative routing in React applications.
- **AI:**
    - Google Gemini AI: Used for generating insights and answering questions.
- **Other:**
    - Node.js: JavaScript runtime environment.
    - npm: Package manager.
    - Docker: Platform for containerization.
    - Google Cloud Run: Platform for deploying containerized applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** (>=20.0.0) [https://nodejs.org/](https://nodejs.org/)
- **npm:** (Comes with Node.js)
- **Docker:** [https://www.docker.com/](https://www.docker.com/)
- **Google Cloud SDK (gcloud):** [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd interactive-resume
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1.  **Environment Variables:**

    Create a `.env.local` file in the root directory of the project and add the following environment variables:

    ```local
    VITE_GEMINI_API_KEY=<your_gemini_api_key>
    VITE_SHEETS_API_KEY=<your_sheets_api_key>
    VITE_SHEETS_ID=<your_sheets_id>
    OPENAI_KEY=<your_openai_key>
    VITE_SERVER_URL=<your_server_url>
    VITE_RESUME=<your_resume_data_as_json_string>
    ```

    *   `VITE_GEMINI_API_KEY`: Your Google Gemini API key.
    *   `VITE_SHEETS_API_KEY`: Your Google Sheets API key.
    *   `VITE_SHEETS_ID`: Your Google Sheets ID.
    *   `OPENAI_KEY`: Your OpenAI API key.
    *   `VITE_SERVER_URL`: The URL of the server providing job and company data.
    *   `VITE_RESUME`: Your resume data as a JSON string.  **Important:**  This should be a stringified JSON object.

    **Example `.env.local`:**

    ```local
    VITE_GEMINI_API_KEY = AIzaSy...
    VITE_SHEETS_API_KEY = AIzaSy...
    VITE_SHEETS_ID = 122LIKJ4G8KSomRhotHoRuOGK5ep0-V5tm0OEoM5Kv9w
    OPENAI_KEY = sk-proj-...
    VITE_SERVER_URL = https://sheets-server-640807931093.europe-west1.run.app
    VITE_RESUME = {"skills":["..."],"experience":[{"jobTitle":"...","company":"...", ...}]}
    ```

2.  **Nginx Configuration:**

    The `nginx.conf` file in the root directory contains the Nginx configuration for serving the application.  It's configured to serve the `index.html` file for all routes, allowing React Router to handle client-side routing.

    ```nginx
    server {
        listen 8080;
        root /usr/share/nginx/html;

        index index.html index.htm;

        location / {
            try_files $uri $uri/ /index.html;
        }

        error_page 404 /index.html;
            location = /index.html {
            }
    }
    ```

## Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server and open the application in your browser.

2.  **Access the application:**

    Open your web browser and navigate to `http://localhost:8080`.

## Deployment

The project includes a `deploy` script in `package.json` that automates the process of building, tagging, pushing the docker image and deploying the application to Google Cloud Run.

1.  **Configure Google Cloud SDK:**

    Make sure you have configured the Google Cloud SDK and authenticated with your Google Cloud account.

    ```bash
    gcloud auth login
    gcloud config set project <your_google_cloud_project_id>
    gcloud config configurations activate interactive-resume
    ```

2.  **Run the deploy script:**

    ```bash
    npm run deploy
    ```

    This script will:

    - Build the Docker image.
    - Tag the Docker image.
    - Push the Docker image to Docker Hub.
    - Activate the `interactive-resume` Google Cloud configuration.
    - Deploy the application to Google Cloud Run using the Docker image.

## Scripts

The `package.json` file contains the following scripts:

-   `start`: Starts the Vite development server.
    ```json
    "start": "vite"
    ```
-   `dev`: Starts the Vite development server.
    ```json
    "dev": "vite"
    ```
-   `build`: Builds the application for production.
    ```json
    "build": "tsc -b && vite build"
    ```
-   `lint`: Runs ESLint to lint the code.
    ```json
    "lint": "eslint ."
    ```
-   `preview`: Starts a local server to preview the production build.
    ```json
    "preview": "vite preview"
    ```
-   `deploy`: Builds, tags, pushes the docker image and deploys the application to Google Cloud Run.
    ```json
    "deploy": "docker build --no-cache -t latest . && docker tag latest ventugoladrien/interactive-resume:latest && docker push ventugoladrien/interactive-resume:latest && gcloud config configurations activate interactive-resume && gcloud run deploy interactive-resume --image docker.io/ventugoladrien/interactive-resume:latest"
    ```
-   `test`: Runs the unit tests using Vitest.
    ```json
    "test": "npx vitest run"
    ```

## ESLint Configuration

The project uses ESLint for linting JavaScript and TypeScript code. The ESLint configuration is defined in the `eslint.config.js` file.

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

## Directory Structure

```
interactive-resume/
├── .env.local                # Environment variables
├── .gitignore                  # Specifies intentionally untracked files that Git should ignore
├── dockerfile                  # Docker configuration file
├── eslint.config.js            # ESLint configuration file
├── index.html                  # HTML entry point
├── nginx.conf                  # Nginx configuration file
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
├── src/                        # Source code directory
│   ├── App.css                 # Global styles
│   ├── App.tsx                 # Main application component
│   ├── assets/                 # Static assets (images, etc.)
│   ├── components/           # React components
│   ├── index.css               # Global styles
│   ├── main.tsx                # Entry point for React
│   ├── services/             # API services
│   ├── types.ts                # TypeScript type definitions
│   └── vite-env.d.ts           # Vite environment variables
├── tsconfig.json             # TypeScript configuration file
├── vite-plugin-remove-default-tags.ts # Vite plugin to remove default tags
└── vite.config.ts            # Vite configuration file
```

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.