'use client'

import Button from "../ui/button";
import Navlinks from "../ui/navlinks";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(true)

  const router = useRouter();

  const { data: session } = useSession();

  // not consistent
  // if (!user) {
  //   router.push("/login");
  // }

  //console.log(user)

  return (<>
    {showMobileNav && <div id="mobile-nav" className="absolute lg:relative block lg:hidden bg-white h-full">
      {/* Logis Projects Logo */}
      <Button className="" onClick={() => { return setShowMobileNav(false) }}>Close</Button>
      <Navlinks />
    </div>}

    <div className="lg:flex lg:flex-row">
      <Button className="block lg:hidden mt-0" onClick={() => { return setShowMobileNav(true) }}>Nav</Button>

      <div className="hidden lg:block bg-white">
        {/* Logis Projects Logo */}
        <Navlinks />
        <Button onClick={() => {
          signOut()
        }}>Log Out {session?.user?.email}</Button>
      </div>
      <div className="">{children}</div>
    </div>
  </>
  );
}
