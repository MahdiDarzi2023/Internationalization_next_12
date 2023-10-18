import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("test");

  return (
    <>
      <h1>{t("HELLO_WORLD")}</h1>
     <div>
     <Link style={{marginRight:'200px'}} href="/" locale={"it"}>
        <a>{`it\n`}</a>
      </Link>

      <Link style={{marginRight:'200px'}} href="/" locale={"en"}>
        <a>en</a>
      </Link>
      
      <Link style={{marginRight:'200px'}} href="/" locale={"es"}>
        <a>es</a>
      </Link>

     </div>
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
