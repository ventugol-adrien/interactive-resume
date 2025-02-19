import { Job } from "../types"

export const getJob = async (id:string):Promise<Job> => {
    const serverURL = import.meta.env.VITE_SERVER_URL
    try {
        const url = `${serverURL}/job?id=${id}`
        const response = await fetch(url)
        return response.json()

    } catch (error){
        throw new Error("Error fetching job from server")
    }
}