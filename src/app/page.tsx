import Image from "next/image";
import ExecuteCommand from "./components/execute_command";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <ExecuteCommand/>
    </div>
  );
}
