// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import Header from "../../components/Layout/Header";
import styles from "../styles/Home.module.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contacts/Contact";
import Footer from "../../components/Layout/Footer";
import Layout from "../../components/Layout/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>SuperShmidko</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="../../public/img/logo.svg"
        />
      </Head>
      {/* <Layout children={undefined} /> */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        {/* <Layout children={undefined} /> */}
      </main>
      <div className={styles.container}>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>
      </div>
    </>
  );
}
