export const languages = [
    {
        label : "cpp",
        monacoLanguage: "cpp",
        judge0Id: 105,
        boilerplate: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    return 0;
}`,
    },
    {
        label : "c",
        monacoLanguage: "c",
        judge0Id: 103,
        boilerplate: `#include <stdio.h>

int main() {
    return 0;
}`,
    },
    {
        label : "python",
        monacoLanguage: "python",
        judge0Id: 92,
        boilerplate: `print("Hello, World!")`,
    },
    {
        label : "java",
        monacoLanguage: "java",
        judge0Id: 91,
        boilerplate: `public class Main {
    public static void main(String[] args) {
    }
}`,
    },
] as const;

export type languageModel = typeof languages[number]["label"]

export function getLanguageBoilerplate(language: languageModel) {
    return languages.find((item) => item.label === language)?.boilerplate ?? "";
}