import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/events/all">All Events</Link>
    </header>
  );
}

export default Header;
