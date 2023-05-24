import Link from "next/link";
import Image from "next/image";
import Brejecka from "images/Brejecka.png";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('brejecka');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Brejecka}
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
                Joanna Brejecka-Pamungkas
                   {t('opis')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Dyplomowany naturopata ze Stanów Zjednoczonych (ND –
                  naturopatic doctor), dietetyk holistyczny, terapeutka medycyny
                  chińskiej, terapeutka Tuiny pediatrycznej, ekspert w
                  programach w TV, autor artykułów w tematyce zdrowia
                  naturalnego, autorka książki „Naturalnie Zdrowe Dziecko”,
                  szkoleniowiec, autorka pierwszego w Polsce kursu Tuina online
                  dla dzieci
                </p>
                <p className="mt-6">
                  Moje własne problemy zdrowotne stały się początkiem drogi
                  wsparcia moich pacjentów.
                </p>
                <p className="mt-6">
                  Od 2009 roku prowadzę gabinet Natural Healing, gdzie
                  kompleksowo zajmuję się wsparciem zdrowia całych rodzin.
                  Pracując z pacjentami posługuje się naukowymi metodami z
                  zakresu medycyny naturalnej, ziołolecznictwa oraz dietetyki wg
                  medycyny chińskiej.
                </p>
                <p className="mt-6">
                  Bardzo ważnym aspektem mojej pracy jest edukacja, poszerzanie
                  świadomości moich pacjentów, co przekłada się nie tylko na ich
                  życie, ale również na życie ich rodzin i osób dla nich
                  bliskich. Stąd też w coraz szerszym zakresie wykładam na
                  warsztatach i szkoleniach z tematyką prozdrowotną oraz
                  żywieniową tj. Tuina pediatryczna, Zdrowe dziecko, Jak żyć z
                  Hashimoto itp. Prowadzę również szkolenia nanaturoterapeutów,
                  dzieląc się swoim doświadczeniem klinicznym.
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

