// pages/second.js
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const SecondPage = () => {
  const { t } = useTranslation('dwa');

  return (
    <div>
      <h1>{t('secondPageTitle')}</h1>
      <Link href="/">{t('goBack')}</Link>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        // 'common',
          'dwa'
      ])),
      // Will be passed to the page component as props
    },
  }
}


export default SecondPage;
