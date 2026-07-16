export const languages = [
    {
        label : "cpp",
        monacoLanguage: "cpp"
    },
    {
        label : "c",
        monacoLanguage: "c"
    },
    {
        label : "python",
        monacoLanguage: "python"
    },
    {
        label : "java",
        monacoLanguage: "java"
    }   
] as const;

export type languageModel = typeof languages[number]["label"]