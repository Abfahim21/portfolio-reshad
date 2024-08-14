"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/componenets/Navigation";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="dark bg-background text-foreground max-w-screen font-sans">
        <Navigation />
      </main>
    </NextUIProvider>
  );
}
