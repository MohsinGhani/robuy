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

{
  /* <head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="theme-color" content="#000000"/>
<meta name="title" content="Robuy | Купить Робуксы (1₽ = 4R$)"/>
<meta name="keywords" content="Купить робуксы, робуксы, купить, робуксы, робаксы, роблакс, робукс, робакс"><meta itemprop="name" content="Robuy | Купить Робуксы (1₽ = 4R$)"/><meta itemprop="description" content="Robuy - магазин для покупки робуксов по самой выгодной цене (1₽ = 4R$). Самый проверенный и известный  способ купить робуксы дёшево, быстро и безопасно. Бесплатный бонус 100 робуксов на первую покупку, покупай робуксы с нами!">
<meta itemprop="image" content="https://robuy.gg/static/media/robuy_icon.b6538075f9512e4d0cac8135497decc8.svg"/>
<meta property="og:title" content="Robuy | Купить Робуксы (1₽ = 4R$)"/><meta property="og:site_name" content="Robuy.gg"/><meta property="og:url" content="https://robuy.gg/"/>
<meta property="og:description" content="Robuy - магазин для покупки робуксов по самой выгодной цене (1₽ = 4R$). Самый проверенный и известный  способ купить робуксы дёшево, быстро и безопасно. Бесплатный бонус 100 робуксов на первую покупку, покупай робуксы с нами!"/>
<meta property="og:type" content="website"/>
<meta property="og:image" content="https://robuy.gg/static/media/robuy_icon.b6538075f9512e4d0cac8135497decc8.svg"/>
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://robuy.gg/"/>
<meta property="twitter:title" content="Robuy | Купить Робуксы (1₽ = 4R$)"/>
<meta property="twitter:description" content="Robuy - магазин для покупки робуксов по самой выгодной цене (1₽ = 4R$). Самый проверенный и известный  способ купить робуксы дёшево, быстро и безопасно. Бесплатный бонус 100 робуксов на первую покупку, покупай робуксы с нами!"/><meta property="twitter:image" content=""/>
<meta name="yandex-verification" content="6b0ac5e9ef76c802"/>
<meta name="copyrighted-site-verification" content="b8c3718aab404177"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest">
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin"/>
        <link rel="preload" href="/set-price-guide/index.html" as="document"/>
        <title>Robuy | Купить Робуксы (1₽ = 4R$)</title>
        <script defer="defer" src="https://static.copyrighted.com/badges/helper.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QNSTBPB9W5"></script>
        <script>function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-QNSTBPB9W5")</script>
        <script type="text/javascript">!function(e,t,c,n,r,a,m){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date;for(var s=0;s<document.scripts.length;s++)if(document.scripts[s].src===n)return;a=t.createElement(c),m=t.getElementsByTagName(c)[0],a.async=1,a.src=n,m.parentNode.insertBefore(a,m)}(window,document,"script","https://mc.yandex.ru/metrika/tag.js"),ym(91392168,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})</script>
        <noscript><div><img src="https://mc.yandex.ru/watch/91392168" style="position:absolute;left:-9999px" alt=""/></div>
        </noscript><script defer="defer" src="/static/js/main.8db73b21.js"></script>
        <link href="/static/css/main.8e18b4d0.css" rel="stylesheet"></head>
        <body><noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v52afc6f149f6479b8c77fa569edb01181681764108816" integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw==" data-cf-beacon='{"rayId":"7d2685c17e00de47","version":"2023.4.0","r":1,"token":"f91754ae349c46aaa9dcdb83c5b0a735","si":100}' crossorigin="anonymous"></script>
</body> */
}
