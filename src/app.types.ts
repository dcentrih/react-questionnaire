export type Type = "text" | "select" | "multi" | "radio";

export type Question = {
  title: string;
  type: Type;
  options?: string[];
};

export type SelectType = {
  value: Type;
  label: string;
}[];

export type QuestionStore = {
  title: string;
  questions: Question[];
  addQuestion: () => void;
  addQuestionOption: (index: number) => void;
  removeQuestion: (index: number) => void;
  removeQuestionOption: ({
    qIndex,
    oIndex,
  }: {
    qIndex: number;
    oIndex: number;
  }) => void;
  setTitle: (title: string) => void;
  setQuestionType: ({
    index,
    type,
  }: {
    index: number;
    type: Question["type"];
  }) => void;
  setQuestionTitle: ({
    index,
    title,
  }: {
    index: number;
    title: Question["title"];
  }) => void;
  setQuestionOption: ({
    qIndex,
    oIndex,
    option,
  }: {
    qIndex: number;
    oIndex: number;
    option: string;
  }) => void;
};
