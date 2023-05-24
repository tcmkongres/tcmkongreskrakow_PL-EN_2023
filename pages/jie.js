import Link from "next/link";
import Image from "next/image";
import Jie from "images/Jie.png";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('jie');
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Jie}
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
                Prof. Li Jie
                   {t('opis')}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Od 30 lat praktykuje tradycyjną medycynę chińską w Europie.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Przez ostatnie dekady był zaangażowany w rozwój
                  międzynarodowej edukacji i praktyki klasycznej medycyny
                  chińskiej (CCM) w takich krajach, jak Holandia, Niemcy,
                  Szwecja, Szwajcaria, Austria, Polska, Rumunia, Czechy, Dania i
                  Chiny.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jest jednym z założycieli Akademii Qing-Bai TCM w Holandii,
                  Klasycznego Instytutu Badawczego TMC oraz Szkoły TMC TOMO w
                  Polsce.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Co roku jest mówcą na kongresie TMC w Rothenburgu (Niemcy).
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jest członkiem zarządu komisji egzaminacyjnej World Federation
                  of Chinese Medicine Societies (WFCMS).
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  W 2003 r. został mianowany profesorem wizytującym w Shandong
                  TCM University Jinan China.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jest również dyrektorem holdingowym europejskiego oddziału
                  &quot;Inheritance of Traditional Chinese Medicine China
                  National Qi Lu School of Miscellaneous Diseases&quot;.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Od 2005 r. skupia się na tworzeniu wykładów w oparciu o
                  analizę klasycznych dzieł z zakresu medycyny chińskiej, takich
                  jak Huang Di Nei Jing, Shang Han Lun i Jin Gui Yao Lüe, Nan
                  Jing, Zhen Jiu Jia Yi Jing, Zhen Jiu Da Cheng itd.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Od ponad 10 lat prowadzi rubrykę &quot;Odpowiedzi na trudne
                  pytania z zakresu TMC poprzez objaśnianie tekstów klasycznej
                  medycyny chińskiej&quot; dla Journal Huang Ti, Holandia.
                </p>{" "}
                <p className="mt-6">
                  {" "}
                  Jest doktorem fizjologii Uniwersytetu w Nijmegen w Holandii.
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
