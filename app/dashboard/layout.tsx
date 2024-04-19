'use client'

import Button from "../ui/button";
import Navlinks from "../ui/navlinks";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

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
      </div>
      <div className="w-full xl:mx-32">{children}</div>
    </div>
  </>
  );
}
