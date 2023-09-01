import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Flex, TextField, Tooltip, IconButton } from '@radix-ui/themes';

export default function MessageInput() {
  return (
    <Flex gap="2">
      <TextField.Root style={{ flexGrow: 1 }}>
        <TextField.Input placeholder="Aa" />
      </TextField.Root>
      <Tooltip content="Send message">
        <IconButton>
          <PaperPlaneIcon />
        </IconButton>
      </Tooltip>
    </Flex>
  );
}
