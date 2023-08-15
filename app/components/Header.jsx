"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "/public/blog-logo.png";

const Header = () => {
  const [isToggle, setIsToggole] = useState();

  const clickHandler = () => {
    setIsToggole(!isToggle);
  };
  return (
    <header className="w-full bg-white fixed py-3 shadow px-5 lg:px-0">
      <div className="container mx-auto">
        <nav className=" flex justify-between">
          <div className=" w-16">
            <Image src={logo} alt="logo image" />
          </div>
          <div className=" lg:hidden">
            <button onClick={clickHandler}>
              {isToggle ? "Hide Menu" : "Show Menu"}
            </button>
          </div>
          <div className=" hidden lg:flex gap-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/post"}>Post</Link>
          </div>
        </nav>
        <div
          className={
            isToggle ? "flex flex-col lg:hidden gap-4 container pt-3" : "hidden"
          }
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/post"}>Post</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
