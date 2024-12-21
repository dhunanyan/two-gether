import { BottomPadding } from "@/components";

export type LayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutPropsType>) {
  return (
    <>
      {children}
      <BottomPadding />
    </>
  );
}
