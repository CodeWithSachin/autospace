import { add } from "@autospace/sample-lib";
import Image from "next/image";

export default function Home() {
  return <main>Hello {add(333, 44)}</main>;
}
