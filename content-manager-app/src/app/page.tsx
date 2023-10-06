import Image from "next/image";

export default function Home() {
  const message: string = "Hello World";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{message}</h1>
    </main>
  );
}
