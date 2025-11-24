"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useCallback } from "react";


export function LogoutButton() {
    const locale = useLocale()

    const t = useTranslations("Header");

    const handleLogout = useCallback(async () => {
        await signOut({ callbackUrl: `/${locale}` });
    }, [locale]);

    return (
        <Button variant="outline" onClick={handleLogout}>
            {t("logout")}
        </Button>
    );
}

export function LogoutMenuItem() {
    const locale = useLocale()
    const t = useTranslations("Header");

    const handleLogout = useCallback(async () => {
        await signOut({ callbackUrl: `/${locale}` });
    }, [locale]);

    return (

        <DropdownMenuItem className="p-0">
            <Link href="#" onClick={handleLogout} className="w-full h-full hover:bg-blue-100  px-2 py-1">
                {t("logout")}
            </Link>
        </DropdownMenuItem>
    );
}
