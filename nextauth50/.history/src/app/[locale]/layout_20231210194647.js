import { notFound } from "next/navigation";
import { Providers } from "@/app/providers";
import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const locales = ["vi", "en"];

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
