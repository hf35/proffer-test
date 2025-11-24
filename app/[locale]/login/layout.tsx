// app/[locale]/protected/layout.tsx
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }: any) {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <>{children}</>;
}
