import React from "react";
import Background from "./Landing-Background";
interface HomeLayoutProps {
  children: React.ReactNode;
}
export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Background />
      <main className="absolute z-1 h-screen w-screen overflow-x-hidden">
        {children}
      </main>
    </>
  );
}
