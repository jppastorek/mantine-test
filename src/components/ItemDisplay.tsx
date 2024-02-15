import { SimpleGrid } from '@mantine/core';
import { Item } from './Item';

export function ItemDisplay(props: any) {
  const { items } = props;
  if (items.length) {
    return (
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 5 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {items.map((item: any) => {
          return (
            <Item
              key={item.item_id}
              name={item.name}
              price={item.price}
              rating={item.avg_rating}
              num_of_ratings={item.num_of_ratings}
              description={item.description}
              restaurant={item.restaurant}
            />
          );
        })}
      </SimpleGrid>
    );
  }
}
