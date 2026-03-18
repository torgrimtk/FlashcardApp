export type Flashcard = {
    id: number
    category: string
    frontQuestion: string
    backAnswer: string
}

export type Stack = {
    name: string
    cards: Flashcard[]
}

