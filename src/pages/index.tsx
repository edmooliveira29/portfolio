import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from './Home';
import Experiences from './Experiences';
import AcademicFormation from './ AcademicFormation';
import Contact from './Contact';
import Knowledge from './Knowledge';
import Projects from './Projects';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <><main
      className={`grow ${inter.className}`}
    >
        <Header />
        <div className='bg-gray-900 lg:px-20' id="home" style={{ scrollMarginTop: '80px' }}>
          <Home />
        </div>
        <div className='bg-black lg:px-20 mt-5 block' id="conhecimentos" style={{ scrollMarginTop: '72px' }}>
          <Knowledge />
        </div>
        <div className='bg-gray-900 lg:px-20 mt-5 block' id="projetos" style={{ scrollMarginTop: '72px' }}>
          <Projects />
        </div>
        <div className='bg-black lg:px-20 mt-5 block' id="experiencias" style={{ scrollMarginTop: '72px' }}>
          <Experiences />
        </div>
        <div className='bg-gray-900 lg:px-20 mt-5 block' id="formacao-academica" style={{ scrollMarginTop: '72px' }}>
          <AcademicFormation />
        </div>
        <div className='bg-black lg:px-20 mt-5' id="contato" style={{ scrollMarginTop: '72px' }}>
          <Contact />
        </div>
        <Footer />
      </main></>
  );
}
