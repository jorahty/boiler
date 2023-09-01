import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';

import { Message } from './list';

interface Props {
  message: Message;
}

export default function MessageCard({ message }: Props) {
  return (
    <Card>
      <Flex gap="3" align="center">
        <Avatar fallback={message.name[0]} />
        <Box>
          <Text as="div" size="2" weight="bold">
            {message.name}
          </Text>
          <Text as="div" size="2" color="gray">
            {message.content}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
