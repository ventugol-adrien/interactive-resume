export interface Feedbacks {
    feedback_date: string,
    employee_name: string,
    feedback: string
}

export interface Job {
    company: string,
    title: string,
    link:string,
    description: string,
}

export interface Resume {
    skills: string[]
    experience:{
        jobTitle:string,
        company:string,
        tenure: {length:number,time: "months" | "years"}
        responsibilities:string[],
        achievements:string[],
    }[],
    education: {
        degree:string,
        institution:string
    }
    awards?:{
        name:string,
        authority: string,
        description: string
    }[],
    projects?: {
        higlights:string[]
        link?: string
    }[]
}