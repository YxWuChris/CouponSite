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
        <title>COCOPONSココポンズ  最新・人気商品の割引きクーポン情報サイト！アメリカでお得にショッピング</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="最新・人気商品の割引きクーポン情報サイト！アメリカでお得にショッピング"/>
        <meta name="keywords" content="ココポンズ,ショッピング,割引クーポン,最新情報,激安,アメリカ,送料無料,人気ブランド,トレンド"/>
      </Head>

      <Title />
      {/* <NavBar /> */}
      <MainBody />

    </div>
  )
}
