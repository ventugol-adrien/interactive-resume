import { Resume } from "../types";

export const resume: Resume = {
    skills: [
        "Typescript / React",
        "Jest/cypress",
        "Jira / Scrum",
        "Technical Leadership",
        "Python/Node.js",
        "AI Implementation",
        "Cross-Functional Collaboration",
        "Delivery Planning",
        "CI/CD/Jenkins",
        "Feature Design",
        "Cross-Team planning",
        "Mentorship",
        "French (Native)",
        "English (Bilingual)",
        "German (A2)",
        "API Design / REST",
        "Java",
        "Applied ML",
        "Pandas",
        "Scipy",
        "Spring",
    ],
    experience: [
        {
            jobTitle: "Software Application Engineer",
            company: "Workday",
            tenure: { length: 3.5, time: "years" }, // More recent tenure
            responsibilities: [
                "Provide technical expertise and leadership.",
                "Understand customer business challenges and domain.",
                "Synthetize and translate technical requirements and concepts cross-functionally to foster deep, team-level understanding of solutions.",
                "Design, architect, and develop new features.",
                "Scope project work thoroughly and in detail.",
                "Create proof of concepts and experiment iteratively to achieve the most effective solution.",
                "Foster key decisions, resolve blockers and manage dependencies to drive project success project completion.",
                "Provide technical guidance and leadership.",
                "Design, review, implement and deliver new features.",
                "Participate in technical research and scoping efforts for Development.",
                "Run meetings, drive key decisions, resolve blockers and manage dependencies for timely release.",
                "Produce Technical Documentation."
            ],
            achievements: [
                "Leveraged state of the art Front End technology (React, Typescript) and designed REST APIs to create a dashboard centralizing payroll data from many sources.",
                "Initiated, coordinated and delivered improvements to Workday's AI recommendations system, increasing customer adoption by ~70% and improving customer experience.",
                "Worked on customer-facing features with domains.",
                "Collaborated closely with Customers and subject matter experts in English, French and German to deliver new features and capabilities.",
                "Advised internal teams on their own uptake of AI Recommendations.",
                "Designed APIs leveraging a JVM-based backend to centralize Payroll Data from various sources into a singular, unified hub using state of the art Front End Technology (React, Typescript)",
                "Coordinated Senior Developers in the US, UK, France, Australia and Germany to deliver the first AI Recommendations for Payroll fields.",
                "Worked with US teams to enable the transport of complex Payroll configurations data from sandbox to production environments, simplifying Payroll implementation for customers.",
                "Worked on high volume, high visibility items such as Workday's UK Payslip re-design (BIRT), Implemented Automated Testing including Unit and End to End (Jest, Cypress)."
            ],
        },
    ],
    projects: [
        {
            higlights: [
                "Created an image processing pipeline to convert graphical data into numerical data.",
                "Used numpy, pandas and PIL for image transformation/feature extraction.",
                "Sklearn for normalization, training and testing.",
                "Achieved close to 85% recall on the covid-positive class.",
                "Wrote a research paper detailing the approach and results.",
            ],
            link:`https://drive.google.com/file/d/1DFN0UCwW47UxV1oheYF8EygMnX4I1jFQ/view?usp=sharing`
        },
        {
            higlights:["Created interactive resume full stack AI app using React + Typescript as a Frontend, and express + typescript as a backend",
                "Integrated state of the art LLM technology, powered by feedback and resume data to source and expose all the relevant information",
                "Integrated with Google Sheets API to track which questions were asked, and used LLM to assign a general theme to those",
                "Implemented unique links feature allowing interested parties to get information and judge fit for a specific jobs",
                "Deployed app on Google Cloud Platform, with the frontend being deployed using Docker.",
                
            ],
            link:"https://interactive-resume-963898814835.europe-west1.run.app"
        },
    ],
    education: {
        degree: "BSc in Computer Science",
        institution: "New York University",
    },
    awards: [
        {
            name: "Outstanding Contributor Award",
            authority: "Workday",
            description: "Received for the implementation of Workday's first Payroll AI Recommendations."
        },
        {
            name: "Al Hackathon Runner-up",
            authority: "Workday",
            description:
                "Recruited and led a team of engineers in the creation of a Payroll Language Assistant Tool, PLATO, capable of explaining complex Payroll concepts and calculations in great details to both domain experts and average users.",
        },
    ],
}