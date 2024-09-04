import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";
import Profile from "./_components/Profile";
import Footer from "@/components/Footer";
import { getProviders } from "next-auth/react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth");
  }
  const locale = await getLocale();
  const t = await getTranslations("ProfilePage");
  const providers = await getProviders();
  console.log(providers);
  //   console.log(session);
  return (
    <div>
      <Profile locale={locale} t={t} />
      <Footer />
    </div>
  );
}
