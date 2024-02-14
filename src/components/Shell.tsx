import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Title, Text } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
// import { } from '@tabler/icons-react';

export default function Shell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Text size='xl' fw={900} variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
          Menu Ratings
        </Text>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Nav
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>
        Main
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
