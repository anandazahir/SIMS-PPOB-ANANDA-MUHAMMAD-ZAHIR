"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItemProps {
  className: string;
}

const NavItem: React.FC<NavItemProps> = ({ className }) => {
  return (
    <nav className={`${className}`}>
      <Link
        href="/topup"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Top Up
      </Link>
      <Link
        href="/transaksi"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Transaction
      </Link>
      <Link
        href="/akun"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Akun
      </Link>
    </nav>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-14">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-red-500"
          >
            <Image
              src="/Website Assets/Logo.png"
              alt="logo"
              width={32}
              height={32}
            />
            SIMS PPOB
          </Link>
        </div>
        <NavItem className="hidden gap-6 md:flex" />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <NavItem className="flex flex-col gap-4" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
