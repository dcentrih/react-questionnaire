import { ActionIcon, Card, Flex, Select, Text, TextInput } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

import { type SelectType, type Type } from "src/app.types";
import { useQuestionStore } from "src/store";
import QuestionOptions from "./QuestionOptions";

const questionTypes: SelectType = [
  { value: "text", label: "Text" },
  { value: "select", label: "Select" },
  { value: "multi", label: "Multiple" },
  { value: "radio", label: "Radio" },
];

/**
 * Main Component
 */
const QuestionBuilder = ({ index }: { index: number }) => {
  const question = useQuestionStore((state) => state.questions[index]);
  const setQuestionTitle = useQuestionStore((state) => state.setQuestionTitle);
  const setQuestionType = useQuestionStore((state) => state.setQuestionType);
  const removeQuestion = useQuestionStore((state) => state.removeQuestion);

  return (
    <Card shadow="sm" mb="lg" sx={{ overflow: "inherit" }}>
      <Text
        pos="absolute"
        left="-3.5rem"
        top="0.5rem"
        size="2rem"
        weight="bold"
        color="gray"
      >{`#${index + 1}`}</Text>
      <ActionIcon
        variant="transparent"
        pos="absolute"
        right="-2rem"
        top="1.25rem"
        color="red.4"
        onClick={() => removeQuestion(index)}
      >
        <IconTrash />
      </ActionIcon>
      <Flex gap="md">
        <TextInput
          variant="filled"
          placeholder="Enter your question"
          sx={{ flexGrow: 1 }}
          value={question?.title}
          onChange={(e) =>
            setQuestionTitle({ index, title: e.currentTarget.value })
          }
        />
        <Select
          withinPortal
          clearable
          placeholder="Select question type"
          data={questionTypes}
          value={question?.type}
          onChange={(val) => setQuestionType({ index, type: val as Type })}
        ></Select>
      </Flex>
      {question?.type && question?.type !== "text" && (
        <QuestionOptions index={index} />
      )}
    </Card>
  );
};

export default QuestionBuilder;
