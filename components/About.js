import Image from "next/image";
import kongres from "images/kongres.jpg";
export default function About() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Polska i TCM
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Praktyka i edukacja TCM w Polsce w ostatniej dekadzie rozwijają
              się szybko. Szkoły TCM, które prowadzą wykłady z podstawowej i
              zaawansowanej akupunktury oraz ziołolecznictwa, istnieją w wielu
              głównych miastach: Krakowie, Katowicach, Wrocławiu, Poznaniu,
              Gdańsku, Bydgoszczy, Warszawie. Kliniki i ośrodki medycyny
              chińskiej są dostępne w większości regionów Polski i cieszą się
              coraz większym zainteresowaniem tą formą medycyny.
            </p>

            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
              Wycieczki
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Dla osób zainteresowanych zwiedzaniem średniowiecznego Krakowa lub
              jego okolic, pomożemy w organizacji wycieczek po Krakowie i
              Małopolsce, które są wpisane na listę Światowego Dziedzictwa
              UNESCO - takie jak Kopalnia Soli w Wieliczce, Ojcowski Park
              Narodowy, Pieniny, Zakopane czy Tatry.
            </p>
            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
              Główne tematy
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Cykle życia. Wspieranie procesu przychodzenia i odchodzenia.
              Immunologia i patogeny. Akupunktura klasyczna. Oczyszczanie ciała.
            </p>
          </div>
        </div>
      </div>
      <Image
        className="h-full w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src={kongres}
        alt=""
      />
    </div>
  );
}
