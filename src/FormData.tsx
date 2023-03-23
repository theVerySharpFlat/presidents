export interface FormData {
    name: String,
    inOfficeData: String,
    outOfficeData: String,
    party: String
}

export interface FormDataMistake {
    correct: FormData,
    userInput: FormData
}
