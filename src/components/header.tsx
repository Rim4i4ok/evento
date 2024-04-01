import Link from "next/link";
import Logo from "./logo";

function Header() {
  return (
    <header>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/events/all">All Events</Link>
    </header>
  );
}

export default Header;
