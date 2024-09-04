import AuthLoginForm from "./_components/AuthLoginForm";
import { useTranslations } from "next-intl";

export default function auth() {
  const t = useTranslations("Auth");
  const translation = {
    heading: t("authHeading"),
    authGoogle=t("authGoogle"),
  }
  return (
    <AuthLoginForm   authGithub ={t("authGithub")} title={t("title")}/>
  );
}
