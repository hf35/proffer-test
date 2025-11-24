// app/[locale]/protected/layout.tsx

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";


export default async function ProtectedLayout({ children }: any) {
  const session = await getServerSession(authOptions);
  const locale = await getLocale()
  if (!session) redirect(`/${locale}/login`);

  return <>{children}</>;
}
