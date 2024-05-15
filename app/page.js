import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding: 10}}>
        <Link href="/auth/login">login</Link>
        <div>
            介绍页
        </div>
    </main>
  );
}
