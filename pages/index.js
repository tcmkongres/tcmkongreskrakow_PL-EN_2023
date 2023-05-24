import { Inter } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";
//components
import LanguageSwitcher from "@/com/LanguageSwitcher";
import MyComponent from "@/com/MyComponent";
import Header from "@/components/Header";
import Speakers from "@/components/Speakers";
import { Schedule } from "@/components/Schedule";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Organizers from "@/components/Organizers";
import Faqs from "@/components/Faqs";
import Hotel from "@/components/Hotel";
import Koszyk from "@/components/Koszyk";
import Timeline from "@/components/Timeline";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
  {/*<LanguageSwitcher></LanguageSwitcher>*/}
        <div className="bg-white">

          <Header></Header>
          <main>

            {/*<About></About>*/}
                    <LanguageSwitcher></LanguageSwitcher>
            <Speakers></Speakers>
            <Schedule></Schedule>
            <Hotel></Hotel>
            <Timeline></Timeline>
            <Koszyk></Koszyk>
            <Faqs></Faqs>
            <Organizers></Organizers>
            <Contact></Contact>
          </main>
          <Footer></Footer>
        </div>
</div>
  )
}



export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
          // 'dwa'
      ])),
      // Will be passed to the page component as props
    },
  }
}
