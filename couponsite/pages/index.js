import Head from 'next/head'
import ProductList from '../components/ProductList'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'
import MainBody from '../components/MainBody'

export default function Home() {

  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="KtSzy0oZ8Ku-OKt5-HuhQv5qID5DHlVcMKtuKI8JF64" />
        <title>COCOPONSココポンズ 最新・人気商品の割引きクーポン情報サイト！アメリカでお得にショッピング</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      {/* <NavBar /> */}
      <MainBody />

    </div>
  )
}
