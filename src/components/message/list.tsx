import { Flex } from '@radix-ui/themes';
import { useState } from 'react';

import MessageCard from './card';

export interface Message {
  name: string;
  content: string;
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([
    {
      name: 'Teodros Girmay',
      content: 'Engineering',
    },
    {
      name: 'Jorah Ty',
      content: 'Someone Must Extinguish Thy Flame',
    },
  ]);

  return (
    <Flex direction="column" gap="2">
      {messages.map((message, index) => (
        <MessageCard key={index} message={message} />
      ))}
    </Flex>
  );
}
