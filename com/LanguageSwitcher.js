import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleLanguageChange = (language) => {
    const currentPath = router.asPath;
    const currentLocale = router.locale;

    const newPath = currentPath.replace(`/${currentLocale}`, `/${language}`);

    router.push(newPath, newPath, { locale: language });
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>
        {t('English')}
      </button>
        <br/>
      <button onClick={() => handleLanguageChange('pl')}>
        {t('Polski')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
