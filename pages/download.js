"use client";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Pokrywka from "@/images/Pokrywka.jpeg";
import Olszowska from "@/images/Olszowska.jpeg";
import Lapa from "@/images/Lapa.png";
import Brejecka from "@/images/Brejecka.png";
import Chmielnicki from "@/images/Chmielnicki.png";
import Maimon from "@/images/Maimon.png";
import Ayal from "@/images/Ayal.png";
import Teixeira from "@/images/Teixeira.png";
import Jie from "@/images/Jie.png";
import Montakab from "@/images/Montakab.jpeg";
import Baik from "@/images/Baik.jpg";
import Mietka from "@/images/Mietka.png";
import Wojniusz from "@/images/Wojniusz.jpg";
import Kalmus from "@/images/Kalmus.jpg";

const comments = [
  {
    id: 1,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    date: "13-10-2013",
    title: "Spojrzenie długodystansowe: ewolucja Shen na przestrzeni czasu",
    description:
      "              Zgodnie z teorią ewolucji, różne emocje wykształcały się w różnym\n" +
      "              czasie. Zatem niniejsza prezentacja ma na celu przedstawienie\n" +
      "              perspektywy tradycyjnej medycyny chińskiej (TMC) na ewolucję\n" +
      "              emocji w różnych okresach, a zmieniały się one często (czasem\n" +
      "              bardzo dramatycznie) w odpowiedzi na nowe oczekiwania i idee\n" +
      "              kulturowe. Może to przynieść wiele pytań... Czy to my zmieniamy\n" +
      "              nasze emocje? Czy ludzkie emocje stają się różne na przestrzeni\n" +
      "              różnych pokoleń?... Mówić o emocjach to mówić o Shen. Niełatwo\n" +
      "              jest ująć w słowa, to, co oznacza ‘Shen’ – w prostych słowach jest\n" +
      "              naszą reakcją na wszelkie bodźce zewnętrzne i wewnętrzne, i\n" +
      "              reprezentuje wszystkie nasze emocje i unikalne cechy. Shen to\n" +
      "              funkcje słuchania, czucia, smakowania, widzenia... krótko mówiąc,\n" +
      "              funkcje, które ujawniają pojmowanie odnoszące się do otoczenia i\n" +
      "              do nas samych. Funkcje, które są świadome, dla których świadkiem\n" +
      '              jest aktywne "ja". Jest to energia współczucia, wglądu i empatii.\n' +
      "              Shen jest energią, która nas łączy, tworzy relacje i pozwala nam\n" +
      "              realizować nasz najwyższy potencjał. Zrozumienie dynamiki ludzkich\n" +
      "              emocji może pomóc nam w byciu lepszymi terapeutami i tworzyć\n" +
      "              lepsze wytyczne leczenia.",
  },
  {
    id: 2,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    date: "14-10-2013",
    title: "Kreatywne Hun. W jaki sposób Hun wpływa na nasze życie",
    description:
      "„Kreatywność to inteligencja, która dobrze się bawi”.\n" +
      "Albert Einstein\n" +
      ".\n" +
      "Zgodnie z neuronauką, kreatywność jest związana z naszą zdolnością do widzenia przyszłości... zaś\n" +
      "medycyna chińska postrzega kreatywność jako proces przypisany przemianie Drzewa. Jest ona związana\n" +
      "z Wątrobą, która z kolei jest narządem powiązanym z planowaniem i podejmowaniem decyzji. Przemiana\n" +
      'Drzewna ma związek z ideą "widzenia przyszłości" – bycia zdolnym do myślenia naprzód i planowania\n' +
      "przyszłości. Jest też związana z umiejętnością generowania nowych pomysłów, czynienia planów na\n" +
      'przyszłość i podejmowania działań. Przemiana Drzewa jest również związana z ideą "widzenia lasu dla\n' +
      'drzew" – umiejętności łączenia kropek w większy obraz i widzenia w szerszym kontekście.\n' +
      "Hun rządzi impulsami życiowymi i ich ruchami, pozwala na komunikację, wyrażanie pragnień,\n" +
      "pomysłów i kreatywności oraz aktywuje naszą zdolność do odnoszenia się do siebie. Jest obecne na\n" +
      "wszystkich etapach życia. To Hun daje nam emocjonalne konotacje do fizycznych doświadczeń. Hun jest\n" +
      "niezbędne dla przepływu życia i zdolności do poruszania się przez nie z łatwością. Jest to ważna część\n" +
      "naszego życia, którą można pielęgnować i rozwijać, co może pomóc nam osiągać cele i nawigować\n" +
      "naszym życiem.\n" +
      "Hun nadaje ruch umysłowi, który łączy myślenie z intuicją, jest połączony z podświadomością,\n" +
      "marzeniami, pragnieniami, wszystkimi naszymi przeszłymi doświadczeniami oraz kolejnymi zmianami,\n" +
      "jakie zachodzą w naszym życiu. Hun ma zdolność przychodzenia i odchodzenia, dzięki czemu możliwa\n" +
      "jest projekcja, a także otrzymywanie projekcji od innych. Ruch ten zapewnia relacje, w których skupiamy\n" +
      "się na innych i na sobie.\n" +
      "Podczas wykładu zajmiemy się wpływem, jaki Hun ma na wszystkie składowe naszego życia, jego relacją\n" +
      "z innymi Jing Shen, czyli aspektami ducha, takimi jak Shen, Zhi, Po i Yi. Omówimy też patologie\n" +
      "związane z brakiem równowagi Hun oraz punkty akupunkturowe wpływające na Hun.",
  },

  {
    id: 3,
    name: "RANI AYAL",
    imageUrl: Ayal,
    date: "14-10-2013",
    title: "Pieśń Jadeitowego Smoka: 12 magicznych punktów",
    description:
      "Dwanaście punktów, „lśniących jasno niczym gwieździste niebo i będących w stanie leczyć wiele\n" +
      "chorób” (Ma Dan-yang, Jin dynasty).\n" +
      "Pieśń Jadeitowego Smoka to wiersz przypisywany słynnemu taoistycznemu kapłanowi i\n" +
      "akupunkturzyście, Ma Dan-yangowi:\n" +
      "„360 punktów nie wykracza poza zakres 12\n" +
      "w leczeniu chorób,\n" +
      "rezultaty niczym magia – jak gdyby rozprysnąć gorącą wodę\n" +
      "ponad śniegiem\n" +
      "iedy Wielki Wóz się obniża, pojawia się pomyślny moment; zamki\n" +
      'wszystkich drzwi są otwarte".\n' +
      "Na wykładzie omówimy dwanaście magicznych punktów:\n" +
      "– Co czyni je tak wyjątkowymi?\n" +
      "– Dlaczego czas jest ważnym czynnikiem w akupunkturze?\n" +
      "– Jak prawidłowo zlokalizować i nakłuć punkty?\n" +
      "– Jakie jest ich znaczenie kliniczne w naszym współczesnym świecie?",
  },
  {
    id: 4,
    name: "YAIR MAIMON",
    imageUrl: Maimon,
    date: "14-10-2013",
    title: "Regulowanie układu odpornościowego w TMC",
    description:
      "Układ odpornościowy jest najbardziej złożonym spośród układów w organizmie, i odgrywa ważną rolę w\n" +
      "zapobieganiu chorobom, ich przebiegu i powrocie do zdrowia.\n" +
      "Podczas wykładu dr Yair Maimon wykorzysta swoje ogromne doświadczenie z zakresu leczenia\n" +
      "pacjentów chorych na raka, z obniżoną odpornością, a wiedzę związaną z układem odpornościowym u\n" +
      "osób zdrowych.\n" +
      "Wykład pomoże wypełnić lukę w sposobie, w jaki pojmujemy odporność w medycynie zachodniej, a\n" +
      "także dotknie koncepcji witalności. Będzie zawierał kilka praktycznych wskazówek z zakresu\n" +
      "akupunktury i ziołolecznictwa.\n" +
      "Nauczysz się: Podstaw leczenia akupunkturą dla układu odpornościowego w oparciu o badania i dowody\n" +
      "skuteczności, przykładowych ziół i formuł ziołowych dla odporności, opisywania koncepcji Wei Qi, Jing\n" +
      "Qi, Shen Qi, Shen Qi – na przykładzie leczenia lęku i depresji, a także odnośnej koncepcji odporności.",
  },
  {
    id: 5,
    name: "YAIR MAIMON",
    imageUrl: Maimon,
    date: "14-10-2013",
    title: "Regulowanie układu odpornościowego w TMC",
    description:
      "Układ odpornościowy jest najbardziej złożonym spośród układów w organizmie, i odgrywa ważną rolę w\n" +
      "zapobieganiu chorobom, ich przebiegu i powrocie do zdrowia.\n" +
      "Podczas wykładu dr Yair Maimon wykorzysta swoje ogromne doświadczenie z zakresu leczenia\n" +
      "pacjentów chorych na raka, z obniżoną odpornością, a wiedzę związaną z układem odpornościowym u\n" +
      "osób zdrowych.\n" +
      "Wykład pomoże wypełnić lukę w sposobie, w jaki pojmujemy odporność w medycynie zachodniej, a\n" +
      "także dotknie koncepcji witalności. Będzie zawierał kilka praktycznych wskazówek z zakresu\n" +
      "akupunktury i ziołolecznictwa.\n" +
      "Nauczysz się: Podstaw leczenia akupunkturą dla układu odpornościowego w oparciu o badania i dowody\n" +
      "skuteczności, przykładowych ziół i formuł ziołowych dla odporności, opisywania koncepcji Wei Qi, Jing\n" +
      "Qi, Shen Qi, Shen Qi – na przykładzie leczenia lęku i depresji, a także odnośnej koncepcji odporności.",
  },
  {
    id: 6,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: "14-10-2013",
    title:
      "Postępowanie w alergiach sezonowych i przewlekłych w praktyce klinicznej",
    description:
      "Alergie, a w szczególności katar sienny, należą do najszybciej rozwijających się stanów patologicznych\n" +
      'na świecie. Dziedziczone "atopowe" schorzenia dotykają dzieci we wczesnym wieku i w niektórych\n' +
      "przypadkach mogą okazać się nawet znacząco upośledzające jakość życia.\n" +
      "Medycyna chińska, a w szczególności akupunktura, są bardzo skuteczne w zwalczaniu nie tylko objawów\n" +
      "w fazie ostrej, ale także w leczeniu głębszych korzeni tych dolegliwości.\n" +
      "Prezentowany warsztat obejmuje:\n" +
      "– Energetykę głowy z uwzględnieniem portali sensorycznych, ucha, nosa, gardła i oczu\n" +
      "– Fizjopatologię, zasady diagnostyczne i terapeutyczne\n" +
      "– Praktyczne strategie: alergiczny nieżyt nosa; astma alergiczna.",
  },
  {
    id: 7,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: "14-10-2013",
    title: "Sztuka starzenia się z wdziękiem i umierania w łasce",
    description:
      "Cykle życia a osiem naczyń nadzwyczajnych\n" +
      "\n" +
      "Osiem naczyń nadzwyczajnych obejmuje i reguluje rozmaite stadia naszego rozwoju na poziomach\n" +
      "fizycznym, psychicznym i mentalnym.\n" +
      "Podobnie do pór roku w naturze, każde stadium życia ma przypisany własny, specyficzny cel.\n" +
      'Zgodnie z założeniami daoistycznymi, każda jednostka ma z góry ustalone „Ming", inaczej życiowy\n' +
      "mandat/program nauczania do wypełnienia.\n" +
      "Brak świadomości owego Ming jest źródłem trudności, jakich większość osób doświadcza w związku z\n" +
      "procesem starzenia się i umierania. Naczynia nadzwyczajne pomagają koordynować ludzką psychikę z\n" +
      "naturalnym fizjologicznym słabnięciem. Ich zastosowanie można zalecić w celu radzenia sobie z brakiem\n" +
      "akceptacji i strachem przed starzeniem się.\n" +
      "Sekretem starzenia się z wdziękiem jest odkrycie znaczenia jesieni i zimy w cyklach życia oraz\n" +
      "uświadomienie sobie i przyjęcie naszego duchowego wymiaru.\n" +
      "Spis zagadnień:\n" +
      "Cztery sezony życia\n" +
      "Mandat życiowy: Ming\n" +
      "Cykle Jing i Shen\n" +
      "Naczynia nadzwyczajne w powiązaniu z różnymi stadiami i transformacjami w ciągu życia\n" +
      "Trudności związane ze starzeniem się: brak akceptacji dla zmiany; trudności z odpuszczaniem przeszłości\n" +
      "i wybaczaniem; niedokończone sprawy; osłabienie na poziomach fizycznym i mentalnym\n" +
      "Strach przed śmiercią\n" +
      "Sekret starzenia się z wdziękiem i umierania w łasce: inteligencja duchowa\n" +
      "Wybrane strategie akupunkturowe.",
  },
  {
    id: 8,
    name: "DR LI JIE",
    imageUrl: Jie,
    date: "14-10-2013",
    title: "Akupunktura Ling Shu Jing. Co i dlaczego?",
    description:
      "„Czy za pomocą akupunktury można leczyć wszystkie złożone i trudne choroby współczesne?” To\n" +
      "pytanie może często pojawiać się u wielu z nas, po studiowaniu lub praktykowaniu akupunktury przez\n" +
      "jakiś czas. Co nam umknęło i czego musimy się jeszcze nauczyć? Autentycznej, oryginalnej akupunktury\n" +
      "klasycznej.\n" +
      "Czym jest klasyczna akupunktura Ling Shu Jing? Dlaczego musimy ją dziś studiować i praktykować? W\n" +
      "odpowiedzi na te pytania zostaną omówione następujące zagadnienia:\n" +
      'Akupunktura Ling Shu Jing nie jest „An Acupuncture (akupunkturą anatomiczną)", ale "I Acupuncture\n' +
      '(akupunkturą informacji życia)". - Ling Shu Jing Rozdział 1.\n' +
      "Jak pierwotnie wytworzyły się meridiany?\n" +
      "Znaczenie natury meridianów i akupunktury, a nie ich funkcji i działania.\n" +
      "Akupunktura jest potężną terapią w leczeniu chorób Zang Fu. A jak dokonać kombinacji punktów\n" +
      "akupunktury według meridianów i mechanizmów patologicznych?\n" +
      "Diagnoza pulsu jest wytyczną dla leczenia chorób Zang Fu za pomocą akupunktury, służy też ocenie\n" +
      "leczenia w praktyce klinicznej.\n" +
      "Zastosowanie teorii Yin Yang Wu Xing w klinice.\n" +
      "Wprowadzenie klasycznych metod Jie Jing (powiązań meridianów) i Ling Shu Jing – Geometrycznej\n" +
      "Akupunktury.\n" +
      "Metody nakłuwania – Ling Shu Jing Bu (tonizujące) i Xie (redukujące): Co to tak naprawdę znaczy? ‘Bu’\n" +
      "co? ‘Xie’ co?\n" +
      "Jak stosować zasady akupunktury Ling Shu Jing: ‘Dla chorób w górnym aspekcie ciała, użyj punktów\n" +
      "dolnych; dla chorób w dolnym aspekcie ciała, użyj punktów górnych; dla chorób po lewej, użyj punktów\n" +
      "po prawej; dla chorób po prawej, użyj punktów po lewej; dla chorób wewnętrznych, użyj czterech\n" +
      "punktów bocznych'.",
  },
  {
    id: 9,
    name: "JONG BAIK",
    imageUrl: Baik,
    date: "14-10-2013",
    title:
      "Koreańska Terapia Dłoni (KHT) dla problemów ginekologicznych,\n" +
      "niepłodności i wspomaganego zachodzenia w ciążę",
    description:
      "Problemy ginekologiczne i niepłodność z perspektywy tradycyjnej medycyny Azji Wschodniej (TEAM)\n" +
      "Jing reprodukcyjne a niepłodność\n" +
      "Wprowadzenie do koreańskiej akupunktury, akupresury i moksowania dłoni (KHT)\n" +
      "Trzy główne teorie\n" +
      "Możliwe mechanizmy leżące u podstaw KHT\n" +
      "Techniki leczenia\n" +
      "Badania nad KHT i zaburzeniami ginekologicznymi\n" +
      "Ważne punkty KHT i zalecane protokoły\n" +
      "Tradycyjna Medycyna Azji Wschodniej (TEAM) ma długą historię leczenia problemów ginekologicznych\n" +
      "i niepłodności. Istnieje wiele informacji na temat patologii chorób i leczenia zdrowia kobiet. Jednak\n" +
      "perspektywa TEAM różni się zasadniczo od medycyny zachodniej.\n" +
      "Koreańska Terapia Ręki jest wszechstronnym i dynamicznym systemem mikroakupunktury, który jest\n" +
      "prosty do nauczenia się i łatwy do włączenia w praktykę kliniczną. Stanowi praktyczną i wygodną opcja\n" +
      "leczenia, ponieważ łatwo jest stosować ją w autoterapii.\n" +
      "Szereg badań nad KHT koncentruje się na zaburzeniach ginekologicznych. Wyniki kilku z nich sugerują,\n" +
      "że KHT może być korzystna w łagodzeniu zespołu napięcia przedmiesiączkowego, objawów\n" +
      "towarzyszących miesiączce czy menopauzie. Większość z tych badań była prowadzona przy użyciu\n" +
      "nieinwazyjnych technik leczenia, takich jak moksowanie i krążki akupresurowe. Dlatego KHT wydaje się\n" +
      "być rozsądną opcją do rozważenia dla kobiet i osób, które mają obawy przed bardziej inwazyjną terapią.\n" +
      "Niniejsza prezentacja bada problemy ginekologiczne i niepłodność z perspektywy tradycyjnej medycyny\n" +
      "Azji Wschodniej. Przedstawia możliwości i zalety KHT jako opcji leczenia i podkreśla jej\n" +
      "wszechstronność i dobrze zdefiniowane teorie. Zawierać będzie ważne punkty KHT i zalecane protokoły.",
  },
  {
    id: 10,
    name: "JONG BAIK",
    imageUrl: Baik,
    date: "14-10-2013",
    title: "Wprowadzenie do Trzech Skarbów",
    description:
      "(10-minutowa prezentacja)\n" +
      "Jing 精, Qi 氣 i Shen 神 to zasadnicze pojęcia leżące u podstaw dwóch najważniejszych koncepcji\n" +
      "filozoficznych tradycyjnej medycyny Azji Wschodniej (TEAM), podejścia holistycznego oraz syntezy\n" +
      "ciała i umysłu. Mają one swoje cechy wyróżniające, ale nie można ich całkowicie rozdzielić. Jing, Qi i\n" +
      "Shen, leżące u podstaw życia, muszą być chronione i pielęgnowane, jeśli chcemy osiągnąć i utrzymać\n" +
      "zdrowie oraz długowieczność.\n" +
      "Wartość Trzech Skarbów jest nie do przecenienia w zapobieganiu, diagnozowaniu, rarządzaniu i leczeniu\n" +
      "chorób. Głębsze zrozumienie Trzech Skarbów doprowadzi również do dalszego udoskonalenia\n" +
      "istniejących systemów teoretycznych TEAM i przyczyni się do pogłębienia naszego zrozumienia\n" +
      "fizjologii i patologii istot ludzkich.",
  },
  {
    id: 11,
    name: "Dorota łapa",
    imageUrl: Lapa,
    date: "14-10-2013",
    title:
      "Jak oczyszczać dietą osoby z niedoborami?\n" +
      "Oczyszczanie z wykorzystaniem podstaw wzmacniania Qi i Krwi wg medycyny chińskiej.",
    description:
      "Zapraszam Was na wykład podczas którego podzielę się z Wami wieloletnimi doświadczeniami z prowadzenia procesów oczyszczania dietą.\n" +
      "Kiedy 12 lat temu rozpoczynałam korzystanie z oczyszczania prowadzonego dietą warzywną wg wskazań i książki dr Renaty Collier,tak jak większość z nas korzystających z wiedzy medycyny chińskiej, wiedziałam przede wszystkim, że ten pomysł pozwala nam zabezpieczyć Qi śledziony. Lata organizowania wyjazdowych warsztatów przeprowadziło mnie przez doświadczenia, które zainspirowały mnie do doskonalenia i wprowadzania  różnych dodatkowych elementów do tego procesu, tak by jeszcze lepiej i świadomiej radzić sobie w sytuacjach, gdy post powinny przeprowadzać Osoby niedoborowe, z Niedoborami, Yang, Qi i Xue.\n" +
      "Przedstawię proste, gotowe procedury, które wypracowałam  prawdopodobnie na znanych Wam metodach, a osobiście gotując i badając Pacjentów podczas każdego procesu, mogłam przekonać się o efektywności i uzdrawiających właściwościach, które wsparły samych Pacjentów i nauczyły Ich zdrowszego stylu życia.\n" +
      "\n" +
      "Moje doświadczenie dziś myślę, że może juz opiewać na około 800 oczyszczonych bezpiecznie Osób. \n" +
      "\n" +
      "Dlatego zapraszam do wysłuchania i dyskusji podczas naszego Kongresu.",
  },
  {
    id: 12,
    name: "Bożena Olszowska",
    imageUrl: Olszowska,
    date: "14-10-2013",
    title: "CHIŃSKA SZTUKA CZYTANIA Z TWARZY- przejrzeć wszystko na wylot",
    description:
      "W Kiang Xiang( chińska sztuka odczytywania rysów twarzy) odnajdujemy koncepcję Yin Yang, Pięciu Elementów,  5 Gór, podziału na Trzy( Niebo, Człowiek, Ziemia), 12 Pałaców itd. \n" +
      "\n" +
      "Starożytni Mędrcy Chińscy podzielili twarz na oszałamiającą liczbę sekcji. Możemy w nich odnaleźć ponad 130 indywidualnych cech fizycznych, uwarunkowań psychicznych, emocjonalnych i duchowych.\n" +
      "\n" +
      "Każda twarz ma własną historie, a chińska sztuka czytania z twarzy uczy jak interpretować poszczególne cechy, linie , zmarszczki i pomaga odkryć nieznane wcześniej cechy osobowości.",
  },
];

comments.sort((a, b) =>
  a.name.localeCompare(b.name, "pl", { sensitivity: "base" })
);
function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {comments.map((comment) => (
        <li key={comment.id} className="flex gap-x-4 py-5">
          <Image
            className="h-16 w-16 flex-none rounded-full  object-cover bg-gray-50"
            src={comment.imageUrl}
            alt=""
          />
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {comment.name}
              </p>
              <p className="flex-none text-xs text-gray-600">
                <time dateTime={comment.dateTime}>{comment.date}</time>
              </p>
            </div>
            <p className="mt-1 text leading-6 text-gray-900">{comment.title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {comment.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <Script
        id="my-script"
        src="https://app.easycart.pl/login.js?type=block&id=prod_NuFmJjdJesuRQe"
      />
      {/*<Script id="my-script2">*/}
      {/*    {`*/}
      {/*     !window._EC_HASH_a241b13b7a35f21e7582b7c341a6f514 && (location.href = "https://app.easycart.pl/r/prod_NuFmJjdJesuRQe");*/}
      {/*  `}*/}
      {/*</Script>*/}
      <noscript>
        <meta
          http-equiv="refresh"
          content="0;url=https://app.easycart.pl/r/prod_NuFmJjdJesuRQe"
        />
      </noscript>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto  max-w-3xl min-h-full text-base leading-7 text-gray-700">
          <div data-free="true" className="px-4 sm:px-0">
            <p
              // data-free="true"
              className="text-base font-semibold leading-7 mb-4 text-indigo-600"
            >
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Powrót do strony głównej
              </Link>
            </p>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Pliki do pobrania
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Na tej stronie znajdziesz wszystkie pliki do pobrania związane z
              naszymi wydarzeniami.
            </p>
          </div>
          {/*<div data-paid="true" className="mt-6 border-t border-gray-100">*/}
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Pliki z poprzedniego kongresu.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            TCM_Kongres_Krakow_PL.pdf vol.2019
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            10.6 mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="https://tcm-kongres.pl/download/TCM_Kongres_Krakow_PL.pdf"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div data-free="true" className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Wykładowcy
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Lista informacyjna o wykladach
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <Example />
          </div>
        </div>
      </div>
    </>
  );
}
