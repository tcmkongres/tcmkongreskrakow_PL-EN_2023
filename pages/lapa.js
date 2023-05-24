import Link from "next/link";
import Image from "next/image";
import Lapa from "images/Lapa.png";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('lapa');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Lapa}
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
                Dorota Łapa
                   {t('opis')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Terapeutka Medycyny chinskiej, dietetyczka i akupunkturzystka.
                </p>
                <p className="mt-6">
                  Współzałożycielka Centrum oraz Szkoły Naturalnego Odżywiania i
                  Terapii Orkiszowe Pola w Poznaniu. Absolwentka pielęgniarstwa
                  i dietetyki klasycznej, od 2007 roku kształci się̨ w medycynie
                  chińskiej, podstawach ziołolecznictwa i medycynie św.
                  Hildegardy, Od 2018 roku do pracy terapeutycznej włączyła
                  zabiegi akupunktury wg klasycznego systemu.
                </p>
                <p className="mt-6">
                  Na co dzień rozwiązuje problemy zdrowotne swoich pacjentów
                  przy pomocy odżywiania, ziół i zabiegów, poszukując głęboko
                  przyczyny choroby, zajmując się psychologicznymi ich
                  uwarunkowaniami.Wydala 2 książki: Wy_dobrze_jecie czyli 150
                  przepisów kuchni naturalnej i Wy-zdrowie_jecie czyli jak
                  bezpiecznie i skutecznie przeprowadzić proces oczyszczania.
                  Aktywna promocja zdrowia i zdrowego stylu życia poprzez
                  działania edukacyjne przyświeca każdemu działaniu wykładowemu.
                  od 12 tat wraz z Iwoną Kotowską prowadzi warsztaty
                  oczyszczania dla osób, które pragną poprzez działania
                  dietetyczne przywrócić́ równowagę̨ w swoim organizmie. Efektami
                  tego wieloletniego doświadczenia w działaniach prozdrowtnych
                  za pomocą Oczyszczania i wpływania na zdrowie Wątroby, pragnie
                  się z Wami podzielić podczas zajęć na naszym Kongresie 2023.
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
