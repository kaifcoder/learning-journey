import React from "react";
import Link from "next/link";
import SigninButton from "./SigninButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ModeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  //   console.log(session);
  return (
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-10 h-fit border-b border-zinc-200 py-2">
      <div className="flex items-center justify-center h-full px-8 gap-2 mx-auto sm:justify-between max-w-7xl ">
        <Link href="/gallery" className="items-center hidden gap-2 sm:flex">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white ">
            Learning Journey
          </p>
        </Link>
        <div className="flex items-center">
          <Link href="/gallery" className="mr-3">
            Gallery
          </Link>

          {session?.user && (
            <>
              <Link href="/create" className="mr-3">
                Create Course
              </Link>
              <Link href="/settings" className="mr-3">
                Settings
              </Link>
            </>
          )}
          <div className="mr-3">
            <ModeToggle />
          </div>
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SigninButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
