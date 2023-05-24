import Link from "next/link";
import Image from "next/image";
import Baik from "images/Baik.jpg";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('baik');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Baik}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 mb-6 text-indigo-600">
                <Link
                  href="/"
                  className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Powrót do strony głównej
                </Link>
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Jong Kook Baik
                   {t('opis')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Jong Kook Baik pochodzi z Korei Południowej, obecnie mieszka w
                  Anglii. Jest wielokrotnie nagradzanym międzynarodowym
                  wykładowcą specjalizującym się w systemach mikroakupunktury, w
                  szczególności Koreańskiej Terapii Ręki (KHT).
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jong studiował KHT na początku lat 90-tych w Korei
                  Południowej, gdzie uzyskał dyplom w tym zakresie. Następnie
                  przez cztery lata studiował w Northern College of Acupuncture
                  w Yorku, w Wielkiej Brytanii, gdzie uzyskał dyplom z
                  akupunktury. Studia magisterskie z akupunktury odbył na
                  Uniwersytecie Walijskim, a doktorat z tradycyjnej medycyny
                  chińskiej (Huangdi Neijing) na Uniwersytecie Walijskim w
                  Lampeter. Doktorat ukończył pod kierunkiem renomowanego
                  profesora Bao Zhao Ju na Liaoning University of Traditional
                  Chinese Medicine, Shenyang,w Chinach.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  W 2016 roku otrzymał tytuł Doctor of Acupuncture nadany przez
                  World Federation of Acupuncture and Moxibustion Societies
                  (WFAS), Beijing, China. Następnie, w 2018 r., uzyskał tytuł
                  Clinical Specialist in Acupuncture od Liaoning University of
                  Traditional Chinese Medicine.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jong przez 14 lat pracował jako część zespołu opieki
                  paliatywnej w hospicjum w Darlington, a obecnie jest
                  profesorem wizytującym w Southern California University School
                  of Oriental Medicine and Acupuncture. Napisał kilka książek z
                  zakresu tradycyjnej medycyny wschodnioazjatyckiej i
                  współpracował z wieloma czasopismami.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Od 2005 roku Jong założył własną akademię, Jong Baik
                  Education, z siedzibą w Darlington w Wielkiej Brytanii. Swój
                  czas dzieli również na prowadzenie prężnie działającej kliniki
                  w Darlington i wygłaszanie wykładów z wielu dziedzin na całym
                  świecie.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl>
            <div className="mt-10 flex">
              <Link
                href="/download"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Wykłady <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'pokrywka',
        'olszowska',
        'lapa',
        'brejecka',
        'chmielnicki',
        'maimon',
        'ayal',
        'teixeira',
        'jie',
        'montakab',
        'baik',
        'mietka',
        'wojniusz',
        'kalmus',
      ])),
    },
  }
}
