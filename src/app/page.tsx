import ProductCards from "../components/productCards";
// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCards />
    </main>
  );
}
