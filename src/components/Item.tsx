import { Card, Image, Text, Badge, Button, Group, Anchor } from '@mantine/core';
import {
  IconArrowRight,
  IconGripHorizontal,
  IconHeart,
  IconHeartFilled,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { Rating } from '@mantine/core';

export function Item(props: any) {
  const { image, name, price, rating, description, num_of_ratings, restaurant } = props;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt={name} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="lg">
          <Group gap={10}>
            {name}{' '}
            <Rating
              emptySymbol={<IconHeart size="1rem" />}
              fullSymbol={<IconHeartFilled size="1rem" />}
              value={0}
              color="pink"
              count={1}
            />
          </Group>
          <Group gap={5}>
            {<Rating size="xs" value={rating} fractions={4} readOnly />}{' '}
            <Anchor size="xs" href="/" underline="hover" c="dimmed">
              ({num_of_ratings})
            </Anchor>
          </Group>
        </Text>
        <Badge color="pink" size="lg" radius="lg">
          ${price}
        </Badge>
      </Group>

      <Text fs="italic" size="md" c="dimmed">
        {description}
      </Text>

      <Button
        variant="gradient"
        gradient={{ from: 'pink', to: 'orange', deg: 135 }}
        fullWidth
        mt="md"
        radius="sm"
        rightSection={<IconArrowRight size={14} />}
      >
        {restaurant}
      </Button>
    </Card>
  );
}
