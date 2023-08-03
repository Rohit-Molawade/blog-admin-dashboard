"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { links } from "../utils/links.js";

export default function SidebarLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-8 flex-col">
      {links.map((link) => {
        return (
          <Link href={link.path} key={link.name}>
            <div
              className={`${
                pathname === link.path ? `opacity-100` : `opacity-60`
              } flex gap-4 hover:opacity-100 `}
            >
              <Image src={link.image} alt={link.name} width={20} height={20} />
              <span>{link.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
