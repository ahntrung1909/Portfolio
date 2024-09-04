import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";
import Profile from "./_components/Profile";
import Footer from "@/components/Footer";
import { getProviders } from "next-auth/react";

export default async function page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth");
  }
  const providers = await getProviders();
  console.log(providers);
  //   console.log(session);
  return (
    <div>
      <Profile />
      <Footer />
    </div>
  );
}
