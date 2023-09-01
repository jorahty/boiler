import { Flex } from '@radix-ui/themes';
import { useState } from 'react';

import MessageCard from './card';

export default function MessageList() {
  const [messages, setMessages] = useState([0, 0]);

  return (
    <Flex direction="column" gap="2">
      {messages.map((message) => (
        <MessageCard message={message} />
      ))}
    </Flex>
  );
}
