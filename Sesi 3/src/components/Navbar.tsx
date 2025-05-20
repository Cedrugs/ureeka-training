"use client";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.div 
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        initial={{
            opacity: 0,
            y: -30,
        }}
        animate={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.5
        }}
    >
      <Menu setActive={setActive}>
        <h2 className="text-white">Samuel Cedric</h2>
        <div className="flex flex-row gap-8">
            <Link href={"/"} className="text-white hover:text-zinc-400 transition-colors ease-in-out duration-300">Home</Link>
            <Link href={"/about"} className="text-white hover:text-zinc-400 transition-colors ease-in-out duration-300">About</Link>
            <Link href={"/contact"} className="text-white hover:text-zinc-400 transition-colors ease-in-out duration-300">Contact</Link>
        </div>
      </Menu>
    </motion.div>
  );
}
