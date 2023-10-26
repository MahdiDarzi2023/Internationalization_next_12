
import useTemp from "../hook/useTemp";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

// getServerSideProps and getStaticProps are not used (no serverSideTranslations method)
const Test = (props) => {
  console.log('pageProps',props);
  const { t ,i18n} = useTranslation('common')
  const { t:t2} = useTranslation('test')
  const router = useRouter();
const {test}=useTemp('common')
  const handleClickLang = () => {
    let locale='es'
    i18n.changeLanguage(locale);
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale,
      scroll: false,
      shallow: true,
    });
  };
  // const [test,setTest]=useState()
  // useEffect(()=>{
  //   setTest(<>{t('HELLO_WORLD')}</>)
  // },[t])
  return (
    <>
    {test?t('HELLO_WORLD'):false}
    <>===================</>
    {test?t2('HELLO_WORLD'):false}
{/* {     ready===true? t('HELLO_WORLD'):false
}  */}
{/* {test} */}
     <div onClick={handleClickLang}>Click me</div>
      <>
     <div>
     <Link style={{marginRight:'200px'}} href="/test" locale={"it"}>
        <a>{`it\n`}</a>
      </Link>

      <Link style={{marginRight:'200px'}} href="/test" locale={"en"}>
        <a>en</a>
      </Link>
      
      <Link style={{marginRight:'200px'}} href="/test" locale={"es"}>
        <a>es</a>
      </Link>

     </div>
    </>
    </>
  )
}

export default Test