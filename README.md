# Interactive Resume - AI-Powered Career Platform

This project is a sophisticated interactive resume application that revolutionizes the way candidates present themselves to potential employers. Built with React, TypeScript, and Vite, it integrates Google's Gemini AI to create a conversational interface where recruiters and hiring managers can directly ask questions about a candidate's experience and receive AI-generated responses based on real colleague feedback and dynamically tailored resumes.

## Table of Contents

- [🌟 Features](#features)
- [🏗️ Architecture Overview](#architecture-overview)
- [🤖 AI Integration & Intelligence](#ai-integration--intelligence)
- [🛠️ Technologies Used](#technologies-used)
- [📋 Prerequisites](#prerequisites)
- [⚙️ Installation](#installation)
- [🔧 Configuration](#configuration)
- [🚀 Running the Application](#running-the-application)
- [☁️ Deployment](#deployment)
- [📜 Scripts](#scripts)
- [🎨 UI/UX Components](#uiux-components)
- [📊 Data Management](#data-management)
- [🔧 Development Tools](#development-tools)
- [📁 Directory Structure](#directory-structure)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## 🌟 Features

### **Core Functionality**

- **Interactive AI Resume:** Presents resume information through an intelligent conversational interface powered by Google Gemini AI
- **Dynamic Job Matching:** Automatically fetches and displays job-specific information with tailored responses
- **Real Colleague Feedback Integration:** Leverages authentic workplace feedback from 15+ colleagues spanning 2+ years
- **Contextual AI Responses:** AI agent analyzes questions and provides targeted answers based on job requirements and candidate strengths
- **Question Theme Analysis:** Advanced AI categorization of user inquiries (Frontend experience, Backend skills, Leadership, etc.)

### **Advanced Features**

- **Dynamic Favicon & Title Updates:** Automatically updates browser tab with company branding when viewing job-specific pages
- **Responsive Material-UI Design:** Modern, professional interface with smooth animations and intuitive user experience
- **Data Persistence:** All questions and interactions are automatically logged to Google Sheets for analytics
- **Multi-API Integration:** Seamlessly connects to resume generation APIs, job posting APIs, and spreadsheet services
- **Client-Side Routing:** Smooth navigation between different job-specific resume versions
- **TypeScript Type Safety:** Comprehensive type definitions with Zod schema validation

## 🏗️ Architecture Overview

### **System Design**

This application follows a sophisticated multi-layered architecture:

1. **Frontend Layer** - React/TypeScript SPA with Material-UI components
2. **AI Processing Layer** - Google Gemini AI with dual-agent system
3. **API Integration Layer** - Custom resume and job matching APIs
4. **Data Persistence Layer** - Google Sheets integration for analytics
5. **Content Delivery Layer** - Docker containerization with Nginx

### **Key Design Patterns**

- **Service-Oriented Architecture:** Modular services for AI, job fetching, resume management, and data persistence
- **Component Composition:** Reusable React components with clear separation of concerns
- **Type-Safe Development:** Comprehensive TypeScript types with runtime validation via Zod schemas
- **Responsive Design:** Mobile-first approach with Material-UI's responsive grid system

### **AI Agent Architecture**

The application employs a sophisticated dual-AI-agent system:

1. **Theme Analyzer Agent:** Categorizes user questions into themes (Frontend, Backend, Leadership, etc.)
2. **Resume Agent:** Generates persuasive, contextual responses based on:
   - Job description requirements
   - Candidate's tailored resume
   - 15+ authentic colleague testimonials
   - Strategic positioning for hiring success

## 🤖 AI Integration & Intelligence

### **Gemini AI Implementation**

- **Model:** Google Gemini 2.5 Flash for optimal performance and cost efficiency
- **Structured Output:** JSON schema validation ensures reliable AI responses
- **System Instructions:** Carefully crafted prompts for consistent, professional output
- **Error Handling:** Robust Zod validation with fallback mechanisms

### **Intelligent Question Processing**

```typescript
// Example: Theme Analysis
"What is the engineer's experience with React?" → "Frontend experience"
"How does the engineer handle difficult situations?" → "Interpersonal skills"
"Is the engineer qualified for the job?" → "Qualification"
```

### **Strategic Response Generation**

The AI is programmed to:

- Maintain apparent impartiality while subtly promoting the candidate
- Reference specific achievements from colleague feedback
- Align responses with job description requirements
- Suggest follow-up questions to highlight additional strengths
- Quote directly from resume when providing factual information

## 🛠️ Technologies Used

### **Frontend Stack**

- **React 19.0.0:** Latest React features with improved performance and concurrent rendering
- **TypeScript 5.7:** Advanced type safety with latest language features
- **Vite 6.1:** Ultra-fast build tool with HMR and optimized bundling
- **Material-UI (@mui/material 7.3.4):** Professional React components with modern design system
- **Emotion:** CSS-in-JS for styled components with theme support
- **React Router DOM 7.2:** Client-side routing with nested route support

### **AI & Backend Integration**

- **Google Gemini AI:** Advanced LLM integration via @google/generative-ai
- **Zod 4.1.12:** Runtime type validation and schema definition
- **Axios 1.12.2:** HTTP client for API communication
- **Custom APIs:** Resume generation, job matching, and data persistence services

### **Development & Testing**

- **ESLint 9.19:** Advanced linting with TypeScript-specific rules
- **Vitest 3.0.5:** Fast unit testing framework with ES modules support
- **Jest 29.7:** Testing utilities and DOM testing library
- **TypeScript-ESLint:** Enhanced TypeScript linting and code quality

### **DevOps & Deployment**

- **Docker:** Containerization with multi-stage builds
- **Nginx:** Production web server with SPA routing support
- **Google Cloud Run:** Serverless container deployment platform
- **GitHub Actions:** CI/CD pipeline (inferred from deployment scripts)

### **Data & Analytics**

- **Google Sheets API:** Real-time data persistence and analytics
- **Google Cloud APIs:** Authentication and service integration
- **UUID:** Unique identifier generation for user sessions

## 📋 Prerequisites

### **System Requirements**

- **Node.js:** (>=20.0.0) [Download here](https://nodejs.org/)
- **npm:** (Comes with Node.js)
- **Docker:** [Download here](https://www.docker.com/)
- **Google Cloud SDK (gcloud):** [Installation guide](https://cloud.google.com/sdk/docs/install)

### **API Keys & Services Required**

- **Google Gemini AI API Key:** For AI conversation functionality
- **Google Sheets API Key:** For data persistence and analytics
- **Google Sheets ID:** Target spreadsheet for question logging
- **Resume API Server:** Custom API endpoint for resume/job data
- **OpenAI Key:** (Optional) For additional AI features

### **Knowledge Prerequisites**

- Basic understanding of React and TypeScript
- Familiarity with Material-UI component library
- Basic Docker and container deployment concepts
- Google Cloud Platform fundamentals

## ⚙️ Installation

### **1. Clone the Repository**

```bash
git clone <repository_url>
cd interactive-resume
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Verify Installation**

```bash
npm run lint  # Check code quality
npm test      # Run test suite
```

## 🔧 Configuration

### **Environment Variables Setup**

Create a `.env.local` file in the root directory with the following configuration:

```env
# AI Configuration
VITE_GEMINI_API_KEY=<your_gemini_api_key>
OPENAI_KEY=<your_openai_key>

# Google Services
VITE_SHEETS_API_KEY=<your_sheets_api_key>
VITE_SHEETS_ID=<your_sheets_id>

# Backend Services
VITE_SERVER_URL=<your_server_url>

# Resume Data (JSON String)
VITE_RESUME=<your_resume_data_as_json_string>
```

### **Detailed Configuration Explanations**

#### **AI Service Configuration**

- **`VITE_GEMINI_API_KEY`:** Your Google Gemini AI API key for conversation functionality
  - Obtain from [Google AI Studio](https://aistudio.google.com)
  - Required for all AI-powered features
- **`OPENAI_KEY`:** Optional OpenAI API key for additional AI capabilities
  - Used for backup AI services or enhanced processing

#### **Data Persistence**

- **`VITE_SHEETS_API_KEY`:** Google Sheets API key for logging user interactions
  - Enable Google Sheets API in Google Cloud Console
  - Create service account with Sheets access
- **`VITE_SHEETS_ID`:** Target Google Sheets document ID
  - Extract from the Google Sheets URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
  - Ensure the sheet has appropriate column headers for question logging

#### **Backend Integration**

- **`VITE_SERVER_URL`:** URL of the resume/job data API server
  - Default: `https://resume.adriens-apis.io`
  - Must support endpoints for jobs and resumes

#### **Resume Data**

- **`VITE_RESUME`:** Stringified JSON object containing base resume data
  - **Critical:** Must be a valid JSON string, not a JavaScript object
  - Used as fallback when job-specific resumes aren't available

### **Example Configuration**

```env
VITE_GEMINI_API_KEY=AIzaSy...
VITE_SHEETS_API_KEY=AIzaSy...
VITE_SHEETS_ID=1ABC2DEF3GHI4JKL5MNO6PQR7STU8VWX9YZ0
OPENAI_KEY=sk-proj-...
VITE_SERVER_URL=https://resume.adriens-apis.io
VITE_RESUME={"skills":["React","TypeScript"],"experience":[{"jobTitle":"Software Engineer","company":"TechCorp"}]}
```

### **Nginx Configuration**

The application includes production-ready Nginx configuration in `nginx.conf`:

```nginx
server {
    listen 8080;
    root /usr/share/nginx/html;
    index index.html index.htm;

    # SPA routing support
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Error page handling
    error_page 404 /index.html;
    location = /index.html {
        # Prevent caching of index.html
    }
}
```

**Key Features:**

- **SPA Support:** Handles client-side routing by serving `index.html` for all routes
- **404 Fallback:** Ensures React Router handles unknown routes
- **Production Optimized:** Efficient static file serving

## 🚀 Running the Application

### **Development Mode**

```bash
npm run dev
# or
npm start
```

- Starts Vite development server with HMR
- Application available at `http://localhost:8080`
- Features hot module replacement for instant updates

### **Production Build**

```bash
npm run build
```

- Creates optimized production build in `dist/` folder
- TypeScript compilation followed by Vite bundling
- Minified and optimized for deployment

### **Preview Production Build**

```bash
npm run preview
```

- Serves the production build locally for testing
- Useful for verifying production optimizations

### **URL Structure**

- **Base URL:** `http://localhost:8080/` - General resume experience
- **Job-Specific:** `http://localhost:8080/{job-id}` - Tailored for specific job posting
  - Dynamically updates page title and favicon
  - Provides job-context-aware AI responses

## ☁️ Deployment

### **Automated Deployment Pipeline**

The project includes a comprehensive deployment script that automates the entire deployment process:

```bash
npm run deploy
```

### **Deployment Process Breakdown**

1. **Docker Image Build**

   ```bash
   docker build --no-cache -t latest .
   ```

   - Multi-stage Docker build for optimized production image
   - Nginx-based serving for optimal performance

2. **Image Tagging & Registry Push**

   ```bash
   docker tag latest ventugoladrien/chat-resume:latest
   docker push ventugoladrien/chat-resume:latest
   ```

   - Tags image with consistent versioning
   - Pushes to Docker Hub public registry

3. **Google Cloud Configuration**

   ```bash
   gcloud config configurations activate interactive-resume
   ```

   - Activates specific GCP configuration profile
   - Ensures deployment to correct project/region

4. **Cloud Run Deployment**
   ```bash
   gcloud run deploy interactive-resume --image docker.io/ventugoladrien/chat-resume:latest
   ```
   - Serverless container deployment
   - Automatic scaling and load balancing
   - HTTPS termination included

### **Manual Deployment Steps**

If you prefer manual deployment control:

1. **Configure Google Cloud SDK**

   ```bash
   gcloud auth login
   gcloud config set project <your_google_cloud_project_id>
   gcloud config configurations create interactive-resume
   gcloud config configurations activate interactive-resume
   ```

2. **Build and Deploy**
   ```bash
   docker build -t your-registry/interactive-resume:latest .
   docker push your-registry/interactive-resume:latest
   gcloud run deploy interactive-resume \
     --image your-registry/interactive-resume:latest \
     --region europe-west1 \
     --allow-unauthenticated
   ```

### **Docker Configuration**

The application uses a multi-stage Dockerfile for optimal production deployment:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

**Benefits:**

- **Minimal Image Size:** Multi-stage build removes development dependencies
- **Security:** Alpine Linux base with minimal attack surface
- **Performance:** Nginx for optimized static file serving
- **Scalability:** Container-ready for orchestration platforms

## 📜 Scripts

### **Development Scripts**

```json
{
  "start": "vite", // Start development server
  "dev": "vite", // Alternative development command
  "build": "tsc -b && vite build", // TypeScript compilation + production build
  "preview": "vite preview" // Preview production build locally
}
```

### **Quality Assurance**

```json
{
  "lint": "eslint .", // Run ESLint across all files
  "test": "npx vitest run" // Execute test suite with Vitest
}
```

### **Deployment**

```json
{
  "deploy": "docker build --no-cache -t latest . && docker tag latest ventugoladrien/chat-resume:latest && docker push ventugoladrien/chat-resume:latest && gcloud config configurations activate interactive-resume && gcloud run deploy interactive-resume --image docker.io/ventugoladrien/chat-resume:latest"
}
```

**Deploy Script Breakdown:**

1. **`docker build --no-cache -t latest .`** - Fresh Docker image build
2. **`docker tag latest ventugoladrien/chat-resume:latest`** - Tag for registry
3. **`docker push ventugoladrien/chat-resume:latest`** - Push to Docker Hub
4. **`gcloud config configurations activate interactive-resume`** - Switch GCP config
5. **`gcloud run deploy...`** - Deploy to Cloud Run

## 🎨 UI/UX Components

### **Core Components Architecture**

#### **ChatCard Component (`src/components/ChatCard.tsx`)**

The heart of user interaction, featuring:

- **Material-UI Integration:** Professional styling with `Card`, `TextField`, and `Button` components
- **Responsive Design:** Flexible layout adapting to different screen sizes
- **Real-time Interaction:** Immediate feedback with loading states
- **Enhanced Styling:** Custom border radius, shadows, and spacing for modern aesthetics

```typescript
// Key features:
- Animated text responses with typewriter effect
- Form validation and submission handling
- Integration with AI services via askCoworkers function
- Material-UI theming with custom CSS overrides
```

#### **AnimatedText Component (`src/components/AnimatedText.tsx`)**

- **Typewriter Effect:** Character-by-character text animation
- **Cursor Animation:** Blinking cursor for authentic typing feel
- **Scrollable Content:** Overflow handling for long responses
- **Preserved Formatting:** Maintains whitespace and line breaks

#### **Resume Component (`src/components/Resume.tsx`)**

- **Contextual Content:** Adapts presentation based on job information
- **Dynamic Messaging:** Job-specific introductions and calls-to-action
- **Professional Layout:** Structured information hierarchy
- **Disclaimer Integration:** Legal compliance for data usage

#### **JobFetcher Component (`src/components/JobFetcher.tsx`)**

- **Route Parameter Handling:** Extracts job IDs from URL
- **Dynamic Branding:** Updates favicon and page title based on company
- **Memoization:** Performance optimization with React.memo
- **Error Boundaries:** Graceful handling of API failures

### **Styling System**

#### **Custom CSS (`src/components/styles.css`)**

```css
/* Key styling features: */
.animated-text {
  /* Typewriter effect styling */
  white-space: pre-wrap;
  overflow-y: scroll;
  scrollbar-width: none;
}

.card {
  /* Professional card design */
  border-radius: 1.5em;
  box-shadow: #000 2px 2px 8px;
  background: #ffffff;
}

.placeholder {
  /* Elegant placeholder text */
  color: #888888;
  font-style: italic;
}
```

#### **Material-UI Theme Integration**

- **Typography:** Consistent heading and body text scaling
- **Component Overrides:** Custom styling for TextField and Button components
- **Responsive Breakpoints:** Mobile-first design approach
- **Color Palette:** Professional color scheme with accessibility compliance

### **Advanced UI Features**

#### **Dynamic Favicon System**

```typescript
const setFavicon = useCallback((faviconUrl: string | undefined) => {
  const link: HTMLLinkElement | null = document.querySelector(
    'link[rel="icon"][type="image/svg+xml"][href="/vite.svg"]'
  );
  link && faviconUrl ? (link.href = faviconUrl) : null;
}, []);
```

#### **Custom Vite Plugin**

The application includes a custom Vite plugin (`vite-plugin-remove-default-tags.ts`) that removes default HTML title tags, allowing for dynamic title management:

```typescript
export default function removeDefaultTags(): Plugin {
  return {
    name: "remove-default-tags",
    transformIndexHtml(html) {
      return html.replace(/<title>.*<\/title>/i, "");
    },
  };
}
```

## 📊 Data Management

### **Type-Safe Data Layer**

#### **Comprehensive TypeScript Definitions (`src/types.ts`)**

The application features an extensive type system with over 20 interfaces and schemas:

- **`Job` Interface:** Complete job posting structure with company info, requirements, and linked resumes
- **`Resume` Interface:** Structured resume data with technologies, skills, experience, and projects
- **`Question` Schema:** User interaction tracking with theme analysis and timestamps
- **`Feedback` Interface:** Colleague testimonial structure with dates and categorization

#### **Runtime Validation with Zod**

```typescript
export const JobSchema = z.object({
  id: z.string(),
  company: z.string(),
  favicon: z.string().url(),
  title: z.string(),
  link: z.string().url(),
  description: z.string(),
  resume: z.optional(z.string()),
  keywords: KeywordsSchema,
});
```

### **API Integration Layer**

#### **Resume Service (`src/services/resumes.ts`)**

- **RESTful Integration:** Fetches structured resume data from custom API
- **Type Validation:** Ensures data integrity with TypeScript interfaces
- **Error Handling:** Graceful degradation for API failures

#### **Job Service (`src/services/jobs.ts`)**

- **Dynamic Job Fetching:** Retrieves job-specific information and requirements
- **Resume Linking:** Connects jobs to tailored resume versions
- **Parameterized Queries:** Supports filtering and search functionality

#### **Spreadsheet Service (`src/services/spreadsheet.ts`)**

- **Google Sheets Integration:** Real-time logging of user interactions
- **Analytics Support:** Structured data for recruitment insights
- **Question Tracking:** Comprehensive logging of themes, timestamps, and responses

### **AI Model Service (`src/services/model.ts`)**

#### **Gemini AI Integration**

```typescript
export const createModel = (
  systemInstructions: string,
  schema?: ResponseSchema
) => {
  const model = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const modelParams: ModelParams = schema
    ? {
        model: "gemini-2.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
        systemInstruction: systemInstructions,
      }
    : { model: "gemini-2.5-flash", systemInstruction: systemInstructions };
  return model.getGenerativeModel({ ...modelParams });
};
```

**Key Features:**

- **Flexible Model Creation:** Supports both structured and unstructured AI responses
- **Schema Validation:** Ensures AI output matches expected formats
- **System Instructions:** Customizable AI behavior for different use cases
- **Error Handling:** Comprehensive validation with Zod schemas

### **Authentic Feedback Database (`src/assets/Feedback.ts`)**

The application incorporates 15+ authentic workplace testimonials spanning over 2 years:

- **Comprehensive Coverage:** Feedback from colleagues across different teams and time periods
- **Diverse Perspectives:** Technical writers, developers, managers, and cross-functional partners
- **Specific Examples:** Concrete achievements and project contributions
- **Professional Validation:** Real workplace recognition and awards

**Sample Feedback Categories:**

- Technical Excellence and Problem-Solving
- Leadership and Mentorship Capabilities
- Cross-Cultural Communication Skills
- Project Management and Delivery
- Innovation and ML/AI Contributions

## 🔧 Development Tools

### **ESLint Configuration**

The project uses a modern, comprehensive ESLint setup with TypeScript support:

```javascript
// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
```

**Key Features:**

- **Modern ESLint 9.19:** Latest linting capabilities with flat config
- **TypeScript Integration:** Full TypeScript-ESLint support with recommended rules
- **React-Specific Rules:** Hook validation and component refresh optimization
- **Browser Globals:** Proper environment configuration for web development

### **Testing Framework**

#### **Vitest Configuration**

- **Fast Execution:** ES modules support with native TypeScript compilation
- **Jest Compatibility:** Familiar API with modern performance improvements
- **DOM Testing:** Integrated JSDOM for component testing
- **Type Safety:** Full TypeScript support in test files

#### **Testing Libraries**

```json
{
  "vitest": "^3.0.5", // Modern test runner
  "jest": "^29.7.0", // Additional testing utilities
  "@testing-library/react": "^16.2.0", // React component testing
  "jsdom": "^26.0.0" // DOM simulation
}
```

### **TypeScript Configuration**

#### **Multiple TypeScript Configs**

The project uses a sophisticated TypeScript setup with multiple configuration files:

1. **`tsconfig.json`** - Main TypeScript configuration
2. **`tsconfig.app.json`** - Application-specific settings
3. **`tsconfig.node.json`** - Node.js environment configuration

**Benefits:**

- **Optimized Compilation:** Different settings for different environments
- **Build Performance:** Separate configs for app and tooling
- **Type Checking:** Comprehensive type validation across the entire project

### **Build System**

#### **Vite Configuration (`vite.config.ts`)**

```typescript
export default defineConfig({
  plugins: [react(), removeDefaultTags()],
  build: {
    minify: true,
  },
  server: {
    allowedHosts: [
      "interactive-resume-963898814835.europe-west1.run.app",
      "localhost",
    ],
    host: "0.0.0.0",
    port: 8080,
  },
});
```

**Advanced Features:**

- **Custom Plugin Integration:** `removeDefaultTags()` for dynamic title management
- **Production Optimization:** Minification and tree-shaking enabled
- **Development Server:** Configured for both local and cloud development
- **Host Configuration:** Docker-friendly networking setup

### **Custom Development Tools**

#### **Vite Plugin: Remove Default Tags**

```typescript
// vite-plugin-remove-default-tags.ts
export default function removeDefaultTags(): Plugin {
  return {
    name: "remove-default-tags",
    transformIndexHtml(html) {
      return html.replace(/<title>.*<\/title>/i, "");
    },
  };
}
```

**Purpose:** Enables dynamic title management by removing static HTML titles during build, allowing the React application to control page titles based on job context.

## 📁 Directory Structure

```
interactive-resume/
├── 📄 Configuration Files
│   ├── .env.local                    # Environment variables (create locally)
│   ├── dockerfile                    # Multi-stage container build
│   ├── nginx.conf                    # Production web server config
│   ├── package.json                  # Dependencies and scripts
│   ├── tsconfig.json                 # Main TypeScript configuration
│   ├── tsconfig.app.json             # Application TypeScript config
│   ├── tsconfig.node.json            # Node.js TypeScript config
│   ├── vite.config.ts                # Vite build configuration
│   ├── vitest.config.ts              # Test configuration
│   ├── eslint.config.js              # ESLint linting rules
│   └── vite-plugin-remove-default-tags.ts  # Custom Vite plugin
│
├── 📁 public/                        # Static assets
│   └── vite.svg                      # Default favicon (dynamically replaced)
│
├── 📁 src/                           # Application source code
│   ├── 📄 App.tsx                    # Main application component
│   ├── 📄 App.css                    # Global application styles
│   ├── 📄 main.tsx                   # React application entry point
│   ├── 📄 index.css                  # Global CSS styles
│   ├── 📄 types.ts                   # TypeScript type definitions
│   ├── 📄 vite-env.d.ts              # Vite environment types
│   ├── 📄 setupTests.ts              # Test environment setup
│   │
│   ├── 📁 assets/                    # Static assets and data
│   │   └── 📄 Feedback.ts            # Colleague testimonials database
│   │
│   ├── 📁 components/                # React components
│   │   ├── 📄 AnimatedText.tsx       # Typewriter effect component
│   │   ├── 📄 ChatCard.tsx           # Main interaction interface
│   │   ├── 📄 JobFetcher.tsx         # Job data fetching component
│   │   ├── 📄 Resume.tsx             # Resume presentation component
│   │   └── 📄 styles.css             # Component-specific styles
│   │
│   ├── 📁 services/                  # API and external service integration
│   │   ├── 📄 askCoworkers.ts        # AI conversation orchestration
│   │   ├── 📄 jobs.ts                # Job data API integration
│   │   ├── 📄 model.ts               # Google Gemini AI service
│   │   ├── 📄 resumes.ts             # Resume data API integration
│   │   └── 📄 spreadsheet.ts         # Google Sheets integration
│   │
│   └── 📁 utils/                     # Utility functions
│       ├── 📄 generateSchema.ts      # Schema generation utilities
│       └── 📄 generateSchema.test.ts # Schema utility tests
│
├── 📄 README.md                      # Project documentation
└── 📄 LICENSE                       # Project license
```

### **Key Directory Insights**

#### **`/src/components/`** - UI Component Layer

- **Modular Design:** Each component has a single responsibility
- **Material-UI Integration:** Professional styling with custom overrides
- **Performance Optimization:** Memoization and efficient re-rendering
- **Accessibility:** ARIA compliance and keyboard navigation support

#### **`/src/services/`** - Business Logic Layer

- **Service-Oriented Architecture:** Separated concerns for different API integrations
- **Error Handling:** Comprehensive error boundaries and fallback mechanisms
- **Type Safety:** Full TypeScript integration with runtime validation
- **Caching Strategy:** Optimized API calls with intelligent caching

#### **`/src/assets/`** - Static Data Layer

- **Authentic Data:** Real colleague feedback spanning 2+ years
- **Structured Format:** Both CSV and JSON formats for flexibility
- **Performance:** Pre-processed data for fast AI processing

#### **Configuration Layer** - Root Level Files

- **Multi-Environment Support:** Different configs for development, testing, and production
- **Container-Ready:** Docker and Nginx configuration for cloud deployment
- **Development Tools:** ESLint, TypeScript, and Vite optimizations

## 🤝 Contributing

### **Development Workflow**

We welcome contributions to improve the Interactive Resume platform! Here's how to get started:

#### **1. Fork & Clone**

```bash
git clone https://github.com/ventugol-adrien/interactive-resume.git
cd interactive-resume
npm install
```

#### **2. Development Guidelines**

- **Code Style:** Follow the established ESLint configuration
- **TypeScript:** Maintain strict type safety throughout
- **Testing:** Add tests for new features using Vitest
- **Documentation:** Update README for significant changes

#### **3. Contribution Areas**

**🤖 AI Enhancements**

- Improve conversation flow and response quality
- Add support for additional AI models
- Enhance theme analysis accuracy

**🎨 UI/UX Improvements**

- Mobile responsiveness optimizations
- Accessibility enhancements
- Animation and interaction improvements

**🔧 Technical Optimizations**

- Performance improvements
- Security enhancements
- API integration optimizations

**📊 Analytics & Features**

- Enhanced question analytics
- Response quality metrics
- A/B testing capabilities

#### **4. Submission Process**

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes with comprehensive testing
3. Ensure all lints pass: `npm run lint`
4. Run the test suite: `npm test`
5. Submit a pull request with detailed description

### **Code Standards**

- **TypeScript:** Use strict typing with Zod validation
- **React:** Follow hooks best practices and component composition
- **Styling:** Maintain consistency with Material-UI theme
- **Testing:** Achieve >80% code coverage for new features

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**

- ✅ **Commercial Use:** Use in commercial projects
- ✅ **Modification:** Modify and create derivatives
- ✅ **Distribution:** Distribute copies and modifications
- ✅ **Private Use:** Use privately without restrictions
- ❗ **Attribution Required:** Include original license and copyright

### **Third-Party Acknowledgments**

This project incorporates several open-source libraries and services:

- **React & TypeScript:** Core application framework
- **Material-UI:** Professional UI component library
- **Google Gemini AI:** Conversational AI capabilities
- **Vite:** Modern build tool and development server
- **ESLint:** Code quality and consistency tools

---

## 🚀 **Getting Started Quick Reference**

```bash
# 1. Clone and install
git clone <repository_url>
cd interactive-resume
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local with your API keys

# 3. Start development
npm run dev

# 4. Open browser
# Navigate to http://localhost:8080
```

---

## 🔗 **Key Resources**

- **Live Demo:** [interactive-resume-963898814835.europe-west1.run.app](https://interactive-resume-963898814835.europe-west1.run.app)
- **API Documentation:** Custom resume/job APIs at `https://resume.adriens-apis.io`
- **Google Gemini AI:** [Google AI Studio](https://aistudio.google.com)
- **Google Cloud Run:** [Cloud Run Documentation](https://cloud.google.com/run/docs)

---

**Built with ❤️ by Adrien Ventugol** | _Revolutionizing the resume experience through AI-powered conversations_
