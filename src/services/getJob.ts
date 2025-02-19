import { Job } from "../types"

export const getJob = async (id:string):Promise<Job> => {
    const serverURL = import.meta.env.VITE_SERVER_URL
    try {
        const url = `${serverURL}/job?id=${id}`
        console.log("Attempting to get job at the following URL:",url, )
        const response = await fetch(`${serverURL}/job?id=${id}`)
        console.log("Obtained the following data from the server:", response)
        return response.json()

    } catch (error){
        throw new Error("Error fetching job from server")
    }
}