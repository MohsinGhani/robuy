import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Robuy from "../component/robuy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const canonicalUrl =
    typeof window !== "undefined" ? window.location.href : "";
  return (
    <>
      <Head>
        <title>Robuy | Купить Робуксы (1₽ = 4R$)</title>
        <meta
          name="description"
          content="Robuy - магазин для покупки робуксов по самой выгодной цене (1₽ = 4R$). Самый проверенный и известный  способ купить робуксы дёшево, быстро и безопасно. Бесплатный бонус 100 робуксов на первую покупку, покупай робуксы с нами!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          itemprop="image"
          content="https://robuy.gg/static/media/robuy_icon.b6538075f9512e4d0cac8135497decc8.svg"
        />
        <meta property="og:title" content="Robuy | Купить Робуксы (1₽ = 4R$)" />
        <meta property="og:site_name" content="Robuy.gg" />
        <meta
          property="og:description"
          content="Robuy - магазин для покупки робуксов по самой выгодной цене (1₽ = 4R$). Самый проверенный и известный  способ купить робуксы дёшево, быстро и безопасно. Бесплатный бонус 100 робуксов на первую покупку, покупай робуксы с нами!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://robuy.gg/static/media/robuy_icon.b6538075f9512e4d0cac8135497decc8.svg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://robuy.gg/" />
        <meta
          property="twitter:title"
          content="Robuy | Купить Робуксы (1₽ = 4R$)"
        />
        <meta
          property="twitter:description"
          content="Robuy - магазин для покупки робуксов по самой выгодной цене (1₽ = 4R$). Самый проверенный и известный  способ купить робуксы дёшево, быстро и безопасно. Бесплатный бонус 100 робуксов на первую покупку, покупай робуксы с нами!"
        />
        {/* <link rel="canonical" href={window?.location?.href} /> */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Robuy />
      </main>
    </>
  );
}
