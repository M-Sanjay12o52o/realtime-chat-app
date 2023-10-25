import { db } from "@/lib/db";

export default async function Home() {
  await db.set("hello", "hello");

  return (
    <div className="text-red-500">
      <h1>Hello World!</h1>
    </div>
  );
}
