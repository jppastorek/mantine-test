import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ItemDisplay } from '@/components/ItemDisplay';
import { SearchBar } from '@/components/SearchBar';
import { Button, Group, Box } from '@mantine/core';

let isLoggedIn = true;
const items = [
  {
    image: '',
    name: 'Eric',
    price: 20,
    rating: 5,
    description: "he's so gosh darn ____",
    num_of_ratings: 243,
    restaurant: "Eric's Big Sausage Palladium",
  },
  {
    image: '',
    name: 'JP',
    price: 5,
    rating: 1,
    description: "he's so gosh darn ____",
    num_of_ratings: 107,
    restaurant: "JP's Tiny Sausage Shack",
  },
  {
    image: '',
    name: 'Goshen',
    price: 5000,
    rating: 5,
    description: "he's so gosh darn ____",
    num_of_ratings: 196,
    restaurant: "Sushi Barn",
  },
];

export function HomePage() {
  if (isLoggedIn) {
    return (
      <>
        <SearchBar />
        <ItemDisplay items={items} />
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
