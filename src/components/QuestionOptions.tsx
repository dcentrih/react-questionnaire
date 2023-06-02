import { Box, Button, Flex, TextInput } from "@mantine/core";
import { useQuestionStore } from "src/store";

const QuestionOptions = ({ index }: { index: number }) => {
  const options = useQuestionStore((state) => state.questions[index]?.options);
  const addOption = useQuestionStore((state) => state.addQuestionOption);
  const removeOption = useQuestionStore((state) => state.removeQuestionOption);
  const setOption = useQuestionStore((state) => state.setQuestionOption);

  return (
    <Box mt="md">
      {options?.map((value, i) => (
        <Flex gap="sm" mb="sm" key={i}>
          <TextInput
            sx={{ flexGrow: 1 }}
            placeholder="Enter your option answer"
            value={value}
            onChange={(e) =>
              setOption({
                qIndex: index,
                oIndex: i,
                option: e.currentTarget.value,
              })
            }
          />
          <Button
            color="red.4"
            variant="subtle"
            disabled={i === 0}
            onClick={() =>
              removeOption({
                qIndex: index,
                oIndex: i,
              })
            }
          >
            Remove
          </Button>
        </Flex>
      ))}
      <Button mt="sm" onClick={() => addOption(index)}>
        Add option
      </Button>
    </Box>
  );
};

export default QuestionOptions;
