import { Job } from "../types"
const serverURL = import.meta.env.VITE_SERVER_URL

export const getJob = async (id:string):Promise<Job> => {
    try {
        const url = `${serverURL}/job?id=${id}`
        const response = await fetch(url)
        return response.json()

    } catch (error){
        throw new Error("Error fetching job from server")
    }
}

export const getCompany = async (id:string):Promise<{company:string,favicon?:string}> => {
    
    try {
        const url = `${serverURL}/company?id=${id}`
        const response = await fetch(url)
        return response.json()

    } catch (error){
        throw new Error("Error fetching company name from server")
    }
}