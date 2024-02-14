import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ItemDisplay } from '@/components/ItemDisplay';
import { SearchBar } from '@/components/SearchBar';
import { Button, Group, Box } from '@mantine/core';

let isLoggedIn = false;

export function HomePage() {
  if (isLoggedIn) {
    return (
      <>
        <SearchBar />
        <ItemDisplay />
      </>
    );
  }
  return (
    <>
      <Welcome />
      <Group justify="center">
        <Box bg="none" my="xl" component="a" href="/login">
          <Button variant="outline" color="white" size="lg" radius="md">
            Log In
          </Button>
        </Box>
        <Box bg="none" my="xl" component="a" href="/signup">
          <Button
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
            size="lg"
            radius="md"
          >
            Sign Up
          </Button>
        </Box>
      </Group>
    </>
  );
}
