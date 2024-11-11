"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHidden = [
    "/login",
    "/register",
    "/forgot-password",
    "/addproduct",
    "/addcategory",
    "/addproducer",
  ].includes(pathname) || /^\/dashboard(\/|$)/.test(pathname); // Matches any path starting with "/dashboard/"

  return (
    <>
      {!isHidden && <Header />}
      {children}
      {!isHidden && <Footer />}
    </>
  );
}
