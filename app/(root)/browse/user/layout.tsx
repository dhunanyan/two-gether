import { BottomPadding } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BottomPadding />
    </>
  );
}
