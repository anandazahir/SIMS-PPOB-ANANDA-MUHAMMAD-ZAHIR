import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "../ui/container";

interface LoginPageProps {
  textTitle: string;
  textLink: string;
  href: string;
  children: ReactNode;
}

export function AuthLayout({
  textTitle,
  textLink,
  href,
  children,
}: LoginPageProps) {
  return (
    <Container>
      <h2 className="text-3xl font-bold text-center">{textTitle}</h2>
      {children}
      <p className="text-center text-sm">
        {textLink}{" "}
        <Link href={href} className="text-red-500 hover:underline">
          di sini
        </Link>
      </p>
    </Container>
  );
}
