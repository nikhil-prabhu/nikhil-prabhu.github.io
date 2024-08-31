import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Navbar() {
  // TODO: handle mobile screens
  return (
    <NextUINavbar className="z-10 fixed top-0">
      <NavbarBrand>
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" color="foreground" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>
        <Link href="#" color="foreground">
          Contact
        </Link>
      </NavbarItem>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            THEME
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
