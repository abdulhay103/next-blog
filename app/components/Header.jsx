import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed py-3">
      <nav className=" container mx-auto flex justify-between">
        <div>Logo</div>
        <ul className="flex gap-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
