import {create} from "zustand"
import { type languageModel } from "./languages"

type outputType = {
    status : string,
    output: string | null,
    executionTime: string | null,
    memory: string | null,
    compiler_output: string | null,
    message: string | null,
}

type CompilerStore = {
    language: languageModel,
    setLanguage: (newLanguage : languageModel) => void

    content: string,
    setContent: (newContent : string ) => void

    input: string,
    setInput: (newInput: string ) => void

    submissionId: number,
    setSubmissionId: (newId : number) => void

    executionResult: outputType | null,
    setExecutionResult: (newExecutionResult: outputType | null ) => void

    username: string,
    setUsername: (newUsername: string) => void
}

export const useCompilerStore = create<CompilerStore>((set) => ({
    language: "cpp",
    setLanguage: (newLanguage) => set({ language : newLanguage }),

    content: "//Hello User",
    setContent: (newContent) => set({content : newContent}),

    input: "",
    setInput: (newInput) => set({input : newInput}),

    submissionId: -1,
    setSubmissionId: (newId) => set({submissionId: newId}),

    executionResult: null,
    setExecutionResult: (newExecutionResult) => set({executionResult: newExecutionResult}),

    username: "",
    setUsername: (newUsername) => set({username: newUsername})
}))