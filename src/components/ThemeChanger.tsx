import { Select, Flex, Text } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { Half2Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function ThemeChanger() {
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
}
