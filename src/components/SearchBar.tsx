import { TextInput, Button, Group } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from './SearchBar.module.css';

export function SearchBar(props: any) {
  const { input, handleChangeInput, search } = props;
  return (
    <Group gap="xs">
      <TextInput  variant="default" size="md" radius="md" placeholder="restaurants, dishes, ingredients"/>
      <Button variant="gradient" size="md" radius="md" gradient={{ from: 'red', to: 'orange', deg: 135 }}>
        {<IconSearch size={14} />}
      </Button>
    </Group>
  );
};

// classNames={{input: classes.blahfornow}}
