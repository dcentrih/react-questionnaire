import { Anchor, AppShell, Container, Flex, Header, Text } from "@mantine/core";
import Link from "next/link";
import { type ReactNode } from "react";

const MyHeader = () => {
  return (
    <Header
      height={{ base: 50, md: 70 }}
      p="md"
      sx={(_theme) => ({ backgroundColor: "transparent" })}
    >
      <Container
        size="xl"
        p="md"
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[0],
          borderRadius: theme.fn.radius("md"),
          boxShadow: theme.shadows.sm,
        })}
      >
        <Flex>
          <Anchor component={Link} href="/">
            <Text weight={500} size="lg">
              Questionnaire
            </Text>
          </Anchor>
        </Flex>
      </Container>
    </Header>
  );
};

const MyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      header={<MyHeader />}
      styles={(theme) => ({ body: { backgroundColor: theme.colors.blue[1] } })}
    >
      <Container size="md" p="md" mt={{ base: "lg", md: "md" }}>
        {children}
      </Container>
    </AppShell>
  );
};

export default MyLayout;
