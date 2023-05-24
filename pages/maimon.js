import Link from "next/link";
import Image from "next/image";
import Maimon from "images/Maimon.png";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('maimon');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Maimon}
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
                Yair Maimon
                   {t('opis')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Yair Maimon jest rozpoznawanym na całym świecie specjalistą w
                  dziedzinie medycyny integracyjnej i chińskiej, z ponad
                  30-letnim doświadczeniem klinicznym, akademickim i badawczym,
                  zdobywanym w Stanach Zjednoczonych, Europie, Chinach i
                  Izraelu.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jest prezesem ETCMA – European TCM Association, stowarzyszenia
                  reprezentującego rozsiane w 24. krajach zgrupowania TMC.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Dr Maimon przez ponad 15 lat był dyrektorem oddziału medycyny
                  komplementarnej w Centrum Medycznym w Tel Awiwie oraz kierował
                  ośrodkiem badań nad integracyjną onkologią w Centrum Medycznym
                  Sheba w Izraelu. Jest założycielem TCM Academy of integrative
                  medicine (TCM.AC), gdzie był głównym wykładowcą. Prowadzi
                  również podyplomowe seminaria szkoleniowe na wielu
                  międzynarodowych konferencjach poświęconych medycynie
                  integracyjnej i chińskiej.
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

