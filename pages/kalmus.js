import Link from "next/link";
import Image from "next/image";
import Kalmus from "images/Kalmus.jpg";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('kalmus');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Kalmus}
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
                Dr Marek Kalmus
                   {t('opis')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Dr Marek Kalmus z Krakowa, założyciel i dyrektor Instytutu
                  Medycyny Chińskiej i Profilaktyki Zdrowia, honorowy prezes
                  Polskiego Towarzystwa Tradycyjnej Medycyny Chińskiej oraz
                  dyrektor zarządzający Centrum Medycyny Chińskiej w Krakowie
                </p>{" "}
                <p className="mt-6">
                  Prowadzi kurs „Wielkie systemy medyczne Wschodu” oraz blok
                  kursów: „Prowadzenie praktyki i relacje z pacjentem”, „BHP w
                  praktyce TMC”, Studiuje medycynę chińską od 1986 roku. Na
                  podstawie wykładów Claude Diolosy (z lat 80.) wydał książkę
                  Chiny, kuchnia… tajemnice medycyny. Autor książek o Tybecie
                  (m.in. Tybet – legenda i rzeczywistość, Świadomość zwyczajna,
                  świadomość przebudzona).
                </p>{" "}
                <p className="mt-6">
                  Popularyzator medycyny chińskiej (Radio Kraków, TVP info, TVN,
                  publikacje prasowe, wykłady publiczne) Od 1989 roku organizuje
                  kursy medycyny chińskiej. Wykładowca akademicki UJ (Studia
                  Dalekiego Wschodu, Studia Porównawcze Cywilizacji, pojedyncze
                  wykłady w Coll. Medicum UJ, Wydz. Farmakologii). Wykładał
                  również gościnnie w Chinach na Guanxi Chinese Medicine
                  University w Nanningu (marzec 2019) oraz Shanghai University
                  of Traditional Medicine Paźziernik (2018).
                </p>{" "}
                <p className="mt-6">
                  Trener międzykulturowy. Od 1992 roku prowadzi firmę Marek
                  Kalmus Consulting (www.kalmus.com.pl) zajmującą się m.in.
                  szkoleniami, doradztwem turystycznym (Azja) i doradztwem
                  międzykulturowym (treningi, mentoring, coaching). Od 2013 jest
                  współzałożycielem i dyrektorem zarządzającym Centrum Medycyny
                  Chińskiej w Krakowie, ul. Warszawska 1. Od grudnia 2017 do
                  listopada 2022 był członkiem Komitetu Wykonawczego, a od
                  listopada 2022 roku jest wiceprezesem World Federation of
                  Acupuncture and Moxibution Society (WFAS) z siedzibą w
                  Pekinie.
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

