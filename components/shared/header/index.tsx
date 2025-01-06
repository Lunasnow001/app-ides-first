import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import data from "@/lib/data";
import Search from "./search";

export default function index() {
  return (
    <header className="bg-black text-white">
      <div className="px-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center m-1 font-extrabold text-2xl header-button"
            >
              <Image
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>
          <div className="md:block flex-1 hidden max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="block md:hidden py-2">
          <Search />
        </div>
      </div>
      <div className="flex items-center bg-gray-800 mb-[1px] px-3">
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-base [&_svg]:size-6 header-button"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex flex-wrap items-center gap-3 max-h-[42px] overflow-hidden">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="!p-2 header-button"
            >
              {"Header." + menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
