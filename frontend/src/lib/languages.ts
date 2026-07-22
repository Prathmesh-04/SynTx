export const languages = [
    {
        label : "cpp",
        monacoLanguage: "cpp",
        judge0Id: 105,
    },
    {
        label : "c",
        monacoLanguage: "c",
        judge0Id: 103,
    },
    {
        label : "python",
        monacoLanguage: "python",
        judge0Id: 92,
    },
    {
        label : "java",
        monacoLanguage: "java",
        judge0Id: 91,
    },
] as const;

export type languageModel = typeof languages[number]["label"]