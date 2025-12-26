import { ResponseSchema, SchemaType } from "@google/generative-ai";
import { z } from "zod";

export interface Feedbacks {
  feedback_date: string;
  employee_name: string;
  feedback: string;
}

export const QuestionSchema = z.object({
  question: z.string(),
  time: z.string(),
  asker: z.union([z.uuidv4(), z.literal("")]),
  resume: z.optional(z.union([z.uuidv4(), z.literal("")])),
});

export type Question = z.infer<typeof QuestionSchema>;

export const KeywordsSchema = z.object({
  technologies: z.array(z.string()).max(20),
  tech_skills: z.array(z.string()).max(30),
  soft_skills: z.array(z.string()).max(25),
  qualities: z.array(z.string()).max(25),
});
export type Keywords = z.infer<typeof KeywordsSchema>;

export const isKeywords = (data: unknown): data is Keywords =>
  KeywordsSchema.safeParse(data).success;

// Pydantic: KeywordCategory
export const KeywordCategorySchema = z.enum([
  "technologies",
  "tech_skills",
  "soft_skills",
  "qualities",
]);
export type KeywordCategory = z.infer<typeof KeywordCategorySchema>;

// Pydantic: Job
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
export type Job = z.infer<typeof JobSchema>;

export const TechnologyCategorySchema = z.enum([
  "frontend",
  "backend",
  "database",
  "testing",
  "cicd",
  "cloud",
]);
export type TechnologyCategory = z.infer<typeof TechnologyCategorySchema>;

// Pydantic: Technologies
export const TechnologiesSchema = z.object({
  frontend: z
    .array(z.enum(["React", "Typescript", "Javascript", "Vue"]))
    .min(2)
    .default(["React", "Typescript", "Javascript", "Vue"])
    .describe(
      "Known front end technologies relevant to this job posting. Default to all technologies if relevant ones can't be identified."
    ),
  backend: z
    .array(
      z.enum(["Java", "Spring Boot", "Node", "Express", "Python", "Django"])
    )
    .min(2)
    .default(["Java", "Spring Boot", "Node", "Express", "Python", "Django"]),
  database: z
    .array(z.enum(["SQL", "NoSQL", "MongoDB"]))
    .min(2)
    .default(["SQL", "NoSQL", "MongoDB"]),
  testing: z
    .array(z.enum(["JUnit", "Jest", "Cypress", "Pytest"]))
    .min(2)
    .default(["JUnit", "Jest", "Cypress", "Pytest"]),
  cicd: z
    .array(z.enum(["Git", "Docker", "Jenkins", "SonarQube"]))
    .min(3)
    .default(["Git", "Docker", "Jenkins", "SonarQube"]),
  cloud: z
    .array(z.enum(["GCP", "AWS"]))
    .min(1)
    .default(["GCP", "AWS"]),
});
export type Technologies = z.infer<typeof TechnologiesSchema> & {
  [key: string]: string[];
};

// Pydantic: Skills
export const SkillsSchema = z
  .array(z.array(z.string()))
  .describe(
    "A model to represent up to 10 engineering and tech related skills arranged in up to 5 arrays of two skills. Only methodologies, soft skills and ways of working should be listed."
  );
export type Skills = z.infer<typeof SkillsSchema>;

// Pydantic: Contribution
export const ContributionSchema = z.object({
  headline: z.string(),
  details: z
    .array(z.string())
    .default([""])
    .describe("A list of specific details about the contribution."),
});
export type Contribution = z.infer<typeof ContributionSchema>;

// Pydantic: Position
export const PositionSchema = z.object({
  index: z.number().int(),
  company: z.string(),
  location: z.string(),
  title: z.string(),
  dates: z.string(),
  responsibilities: z.string(),
  contributions: z.array(ContributionSchema),
});
export type Position = z.infer<typeof PositionSchema>;

// Pydantic: Award
export const AwardSchema = z.array(z.string());
export type Award = z.infer<typeof AwardSchema>;

// Pydantic: Education
export const EducationSchema = z.object({
  qualification: z.string(),
  institution: z.string(),
  location: z.string(),
  date: z.string(),
});
export type Education = z.infer<typeof EducationSchema>;

// Pydantic: Language
export const LanguageSchema = z.object({
  language: z.string(),
  level: z.tuple([z.string(), z.string()]),
});
export type Language = z.infer<typeof LanguageSchema>;

// Pydantic: Project (inherits from Contribution)
export const ProjectSchema = ContributionSchema.extend({
  link: z.string(),
});
export type Project = z.infer<typeof ProjectSchema>;

// Pydantic: Contact
export const ContactSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  linkedin: z.string().url(),
  github: z.string().url(),
});
export type Contact = z.infer<typeof ContactSchema>;

// Pydantic: Checklist
export const ChecklistSchema = z.array(z.string());
export type Checklist = z.infer<typeof ChecklistSchema>;

// Pydantic: Usage
export const UsageSchema = z.object({
  id: z.string(),
  entry_date: z.string().datetime(),
  object_type: z.enum(["resume", "job"]),
});
export type Usage = z.infer<typeof UsageSchema>;

// Pydantic: Metadata
export const MetadataSchema = z.object({
  id: z.string(),
  entry_date: z.string().datetime(),
  modified_date: z.string().datetime(),
});
export type Metadata = z.infer<typeof MetadataSchema>;

// Pydantic: ResumeMetadata (inherits from Metadata)
export const ResumeMetadataSchema = MetadataSchema.extend({
  success: z.boolean().optional(),
  job: z.string(),
  basisForResumes: z.array(UsageSchema).optional(),
});
export type ResumeMetadata = z.infer<typeof ResumeMetadataSchema>;

// Pydantic: Resume
export const ResumeSchema = z.object({
  technologies: TechnologiesSchema,
  skills: SkillsSchema,
  responsibilities: z.string(),
  positions: z.array(PositionSchema),
  checklist: ChecklistSchema,
  education: EducationSchema,
  languages: z.array(LanguageSchema),
  awards: z.array(AwardSchema),
  projects: z.array(ProjectSchema),
  contact: ContactSchema,
});
export type Resume = z.infer<typeof ResumeSchema>;

// Pydantic: ResumeDocument (combines Metadata and Resume)
export const ResumeDocumentSchema = ResumeMetadataSchema.extend(
  ResumeSchema.shape
);
export type ResumeDocument = z.infer<typeof ResumeDocumentSchema>;

// Pydantic: KeywordCollection (inherits from Metadata)
export const KeywordCollectionSchema = MetadataSchema.extend({
  jobs: z.array(UsageSchema),
  keywords: z.array(z.record(z.string(), z.array(z.string()))),
});

export const themeAnalyzerSchema: ResponseSchema = {
  description: "Theme of the question",
  type: SchemaType.OBJECT,
  properties: {
    theme: {
      type: SchemaType.STRING,
      description: "Theme of the question",
      nullable: false,
    },
  },
  required: ["theme"],
  nullable: false,
};

export const historyRetrieverSchema: ResponseSchema = {
  description: "Containing Object",
  type: SchemaType.OBJECT,
  properties: {
    indices: {
      description: "Array containing the most relevant chat history",
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.INTEGER,
        description:
          "integer representing the index of a relevant question/answer pair.",
        nullable: false,
      },
    },
  },
};
export const HighlightCardSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export type HighlightCard = z.infer<typeof HighlightCardSchema>;
export const AnswerSchema = z.object({
  answer: z.string(),
  highlightCards: z.optional(z.array(HighlightCardSchema).max(4)),
});

export type Answer = z.infer<typeof AnswerSchema>;
