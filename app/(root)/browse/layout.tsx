import { Navbar } from "@/components";

import "./layout.scss";

export type LayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutPropsType>) {
  return (
    <>
      <main className="main">{children}</main>
      <Navbar />
    </>
  );
}
