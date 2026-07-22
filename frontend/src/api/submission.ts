import { api } from "./axios"

type submissionData = {
    sourceCode : string,
    input: string,
    language: string,
}

export async function submitting(data : submissionData){
    const response = await api.post("/submission",data)
    return response.data
}

export async function outputRequest(data : number){
    try{
        const response = await api.get(`/submission/${data}`)
        return response.data
    } catch(error){
        console.log(error)
    }
}
