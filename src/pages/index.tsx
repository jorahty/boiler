import '@radix-ui/themes/styles.css';
import { Container, Flex } from '@radix-ui/themes';

import ThemeChanger from '@/components/ThemeChanger';
import MessageList from '@/components/message/list';
import MessageInput from '@/components/message/input';

export default function Home() {
  return (
    <Container size="1">
      <Flex direction="column" gap="2">
        <Flex justify="end">
          <ThemeChanger />
        </Flex>
        <MessageInput />
        <MessageList />
      </Flex>
    </Container>
  );
}
