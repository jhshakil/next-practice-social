import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container mx-w-7xl h-full mx-auto flex item-center justify-between gap-2">
        {/* logo  */}
        <Link href={"/"} className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 items-center" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>
      </div>
    </div>
  );
}
