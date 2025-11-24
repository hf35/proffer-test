import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('AboutPage');
  return <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-20">
    <h1 className="mb-2">{t('title')}</h1>
    <p className="mb-2">{t('p1')}</p>
    <p className="mb-2">{t('p2')}</p>
    <Image
      src="/DSC03149_min.jpeg" 
      alt="Описание картинки"
      width={492} 
      height={328} 
      className="br-2"
    />
  </div>;
}