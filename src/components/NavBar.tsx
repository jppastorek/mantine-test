import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconStars, IconLogout, IconChevronRight, IconUser, IconChefHat, IconUserEdit, IconStar } from '@tabler/icons-react';

export function NavBar() {
  return (
    <>
      <NavLink href="/" label="Home" leftSection={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        href="/restaurants"
        label="Restaurants"
        leftSection={<IconChefHat size="1rem" stroke={1.5} />}
      />
      <NavLink
        href="/favorites"
        label="My Favorites"
        leftSection={<IconStar size="1rem" stroke={1.5} />}
      />
      <NavLink
        href="/account"
        label="Account"
        leftSection={<IconUser size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        childrenOffset={28}
      >
        <NavLink label="Settings" href="#required-for-focus" leftSection={<IconUserEdit size="1rem" stroke={1.5} />} />
        <NavLink label="Sign Out" href="#required-for-focus" leftSection={<IconLogout size="1rem" stroke={1.5} />} />
      </NavLink>
    </>
  );
}
