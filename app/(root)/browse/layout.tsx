import { Navbar } from "@/components";

import "./layout.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="main">{children}</main>
      <Navbar />
    </>
  );
}
