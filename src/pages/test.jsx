import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Test() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("HELLO_WORLD2")}</h1>
      <h1>{t("HELLO_WORLD11111")}</h1>
    </>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
