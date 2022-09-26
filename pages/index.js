import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>HOME PAGE</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/about">about</Link>
        <Link href="/profile">profile</Link>
        <Link href="/blog">blog</Link>
        <Link href="/product">product</Link>
        <button onClick={handleClick}>Place Order</button>
      </div>
    </div>
  );
}
