import { create } from "zustand";

interface Question {
    question: string;
    options: string[]
    correctAnswer: number
}

interface QuizStore {
    currentQuestion: string
    answers: (number | null)[]
    score: number
    showScore: boolean
    question: Question[]
    selectAnswer: (optionIndex: number) => void
    nextQuestion: () => void
    prevQuestion: () => void
    resetQuiz: () => void
}

const useQuizStore = create<QuizStore>((set) => ({
    currentQuestion: 0,
    answers: Array(3).fill(null),
    score: 0,
    showScore: false,
     



}))