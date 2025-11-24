"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { LogoutMenuItem } from "./LogoutButton";
import { useTranslations } from "next-intl";

interface Props {
    email: string | null | undefined;
}

export default function MobileMenu({ email }: Props) {
    const t = useTranslations("Header")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem className="p-0">
                    <Link href="/" className="w-full h-full hover:bg-blue-100 px-2 py-1">{t("root")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                    <Link href="/about" className="w-full h-full hover:bg-blue-100  px-2 py-1">{t("about")}</Link>
                </DropdownMenuItem>

                {email ? (
                    <LogoutMenuItem />
                ) : (
                    <DropdownMenuItem className="p-0">
                        <Link href="/login" className="w-full h-full hover:bg-blue-100  px-2 py-1">{t("login")}</Link>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
