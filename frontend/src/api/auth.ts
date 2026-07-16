import { api } from "./axios"

type SignupData = {
    username: string,
    email: string,
    password: string
}

type SigninData = {
    keyword: string,
    password: string
}

type meData = {
    userId: string
}
export async function signup( data : SignupData ) {
    const response = await api.post("/signup" , data)
    return response.data;
}

export async function signin( data : SigninData ) {
    const response = await api.post("/signin" , data)
    return response.data
}

export async function me() {
    const response = await api.get("/me")
    return response.data
}