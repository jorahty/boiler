import '@radix-ui/themes/styles.css';
import {
  Theme,
  Flex,
  Button,
  Text,
  Card,
  Avatar,
  Box,
  Select,
} from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

export default function () {
  return (
    <ThemeProvider attribute="class">
      <Theme>
        <Flex direction="column" gap="2">
          <Flex justify="end">
            <ThemeChanger />
          </Flex>
          <Button>Hey 👋</Button>
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
          <Card>
            <Flex gap="3" align="center">
              <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              />
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
        </Flex>
      </Theme>
    </ThemeProvider>
  );
}

import { useTheme } from 'next-themes';
import { Half2Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <Select.Root defaultValue="system" onValueChange={setTheme}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Theme</Select.Label>
          <Select.Item value="system">
            <Flex gap="2" align="center">
              <Half2Icon />
              <Text>System</Text>
            </Flex>
          </Select.Item>
          <Select.Item value="light">
            <Flex gap="2" align="center">
              <SunIcon />
              <Text>Light</Text>
            </Flex>
          </Select.Item>
          <Select.Item value="dark">
            <Flex gap="2" align="center">
              <MoonIcon />
              <Text>Dark</Text>
            </Flex>
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
