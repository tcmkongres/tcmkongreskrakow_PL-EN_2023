import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');

  return (
    <p>{t('greeting')}</p>
  );
};

export default MyComponent;
