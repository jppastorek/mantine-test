import { Button, Group, Box } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ItemDisplay } from '@/components/ItemDisplay';
import { SearchBar } from '@/components/SearchBar';

let isLoggedIn = true;
const items = [
  {
    image: '',
    name: 'Sauteed Salmon and Vegetables',
    price: 20,
    rating: 5,
    description: 'Fresh salmon caught from Alaska cooked on a bed of grass.',
    num_of_ratings: 243,
    restaurant: "Eric's Big Sausage Palladium",
  },
  {
    image: '',
    name: 'Meatballs and Spaghetti',
    price: 5,
    rating: 1,
    description: 'Two large meatballs on top of a bed of noodles.',
    num_of_ratings: 107,
    restaurant: "JP's Tiny Sausage Shack",
  },
  {
    image: '',
    name: 'Fried Eggplant Parmesan',
    price: 5000,
    rating: 5,
    description: 'Fresh heirloom eggplants deep fried topped with marinara and mozzarella.',
    num_of_ratings: 196,
    restaurant: 'Sushi Barn',
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
