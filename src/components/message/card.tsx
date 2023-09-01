import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';

interface Props {
  message: any;
}

export default function MessageCard({ message }: Props) {
  return (
    <Card>
      <Flex gap="3" align="center">
        <Avatar fallback="T" />
        <Box>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="2" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
