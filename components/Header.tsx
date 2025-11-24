
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LogoutButton } from "./LogoutButton";
import { getTranslations } from "next-intl/server";
import MobileMenu from "./MobileMenu";

export default async function Header() {
    const session = await getServerSession(authOptions);
    const t = await getTranslations("Header");
    const email = session?.user?.email;

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0">
                        <Link href="/">
                            <h1>APP</h1>

                        </Link>
                    </div>
                    <nav className="hidden md:flex  space-x-4 gap-2 items-baseline">

                        <Link href="/" className="text-gray-700 hover:text-blue-500 font-medium">
                            {t("root")}
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-500 font-medium">
                            {t("about")}
                        </Link>

                        <LanguageSwitcher />


                        {session ? (
                            <>
                                <span>{email}</span>
                                <LogoutButton />
                            </>
                        ) : (
                            <Link href="/login" className="text-gray-700 hover:text-blue-500 font-medium">
                                {t("login")}
                            </Link>
                        )}
                    </nav>


                    {/* Mobile / small screen */}
                    <div className="flex md:hidden items-center gap-2">
                        <LanguageSwitcher />
                        <span>{email}</span>
                        <MobileMenu email={email} />
                    </div>
                </div>
            </div>
        </header>
    );
}

