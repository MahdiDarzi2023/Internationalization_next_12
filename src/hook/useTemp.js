/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';

const useTemp = () => {
  const [test, setTest] = useState();
  const { t, ready ,i18n} = useTranslation()

  useEffect(() => {
    setTest(<>{t(t)}</>);
  }, [t]);

  return { test };
};

export default useTemp;
