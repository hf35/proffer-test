"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function LogoutButton() {
    const t = useTranslations("Header");

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <Button variant="outline" onClick={handleLogout}>
            {t("logout")}
        </Button>
    );
}

export function LogoutMenuItem() {
    const t = useTranslations("Header");

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (

        <DropdownMenuItem className="p-0">
            <Link href="#" onClick={handleLogout} className="w-full h-full hover:bg-blue-100  px-2 py-1">
                {t("logout")}
            </Link>
        </DropdownMenuItem>
    );
}
