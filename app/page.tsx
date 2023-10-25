import Button from "./components/ui/Button";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Button>
        <Link href="/login">Login</Link>
      </Button>
      <Button variant={"ghost"}>Hello</Button>;
    </div>
  );
}
