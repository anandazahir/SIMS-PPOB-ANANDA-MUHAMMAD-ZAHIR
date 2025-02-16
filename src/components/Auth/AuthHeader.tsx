import Link from "next/link";
import Image from "next/image";

export function AuthHeader() {
  return (
    <Link
      className="flex items-center justify-center space-x-2 cursor-pointer"
      href="/"
    >
      <Image
        src="/Website Assets/logo.png"
        alt="SIMS PPOB Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <h1 className="text-xl font-bold">SIMS PPOB</h1>
    </Link>
  );
}
