"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
}
