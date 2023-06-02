import { ActionIcon, Box, Divider, Group, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import QuestionBuilder from "src/components/QuestionBuilder";
import { useQuestionStore } from "src/store";

const Questionnaire = () => {
  const title = useQuestionStore((state) => state.title);
  const questions = useQuestionStore((state) => state.questions);
  const setTitle = useQuestionStore((state) => state.setTitle);
  const addNewQuestion = useQuestionStore((state) => state.addQuestion);

  return (
    <Box>
      <TextInput
        mb="lg"
        placeholder="Enter the questionnaire title"
        size="xl"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />

      {questions.map((_, index) => (
        <Box key={index}>
          {" "}
          <QuestionBuilder key={index} index={index}></QuestionBuilder>
          <Divider mt="lg" mb="lg" color="gray" size="sm" opacity={0.2} />{" "}
        </Box>
      ))}

      <Group position="center">
        <ActionIcon
          variant="outline"
          color="gray"
          opacity={0.5}
          onClick={() => addNewQuestion()}
        >
          <IconPlus />
        </ActionIcon>
      </Group>
    </Box>
  );
};

export default Questionnaire;
