import { create } from "zustand";

import { type QuestionStore } from "./app.types";

export const useQuestionStore = create<QuestionStore>()((set) => ({
  title: "",
  questions: [{ title: "", type: "text" }],
  addQuestion: () =>
    set((state) => ({
      questions: [...state.questions, { title: "", type: "text" }],
    })),
  addQuestionOption: (index) =>
    set((state) => {
      const questions = [...state.questions];
      const question = questions[index];

      if (!question) return state;
      if (typeof question.options === "undefined") question.options = [];
      question.options = [...question.options, ""];

      return { questions };
    }),
  removeQuestion: (index) =>
    set((state) => ({
      questions: [...state.questions.filter((_, i) => i !== index)],
    })),
  removeQuestionOption: ({ qIndex, oIndex }) =>
    set((state) => {
      const questions = [...state.questions];
      const question = questions[qIndex];

      if (!question || !question.options) return state;

      if (question.options.length !== 1)
        question.options = [...question.options.filter((_, i) => i !== oIndex)];

      return {
        questions,
      };
    }),
  setTitle: (title) => set({ title }),
  setQuestionType: ({ index, type }) =>
    set((state) => {
      const questions = [...state.questions];
      const question = questions[index];

      if (!question) return state;

      question.type = type;
      if (type !== "text") {
        question.options = [""];
      } else {
        delete question.options;
      }

      return { questions };
    }),
  setQuestionTitle: ({ index, title }) =>
    set((state) => {
      const questions = [...state.questions];
      const question = questions[index];

      if (!question) return state;

      question.title = title;

      return {
        questions,
      };
    }),
  setQuestionOption: ({ qIndex, oIndex, option }) =>
    set((state) => {
      const questions = [...state.questions];
      const question = questions[qIndex];

      if (!question || !question.options) return state;

      question.options[oIndex] = option;

      return {
        questions,
      };
    }),
}));
