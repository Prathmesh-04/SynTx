import {create} from "zustand"
import { type languageModel } from "./languages"

type CompilerStore = {
    language: languageModel,
    setLanguage: (newLanguage : languageModel) => void

    content: string,
    setContent: (newContent : string ) => void
}

export const useCompilerStore = create<CompilerStore>((set) => ({
    language: "cpp",
    setLanguage: (newLanguage) => set({ language : newLanguage }),

    content: "//Hello User",
    setContent: (newContent) => set({content : newContent})
}))