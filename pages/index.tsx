import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <hr />
      <Link href="/about">About</Link>
      <br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/movies">Movies</Link>
    </div>
  );
}