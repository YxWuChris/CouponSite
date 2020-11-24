import Head from 'next/head'
import ProductList from '../components/ProductList'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import MainBody from '../components/MainBody'
import { itemApi } from '../Data/Api.js'
import { bannerApi } from '../Data/Api.js'
import { articleApi } from '../Data/Api.js'

export default function Other(props) {

    // console.log(props.discountItem.filter(item => {
    //         return item.tag === "fashion";
    //     }))

    // console.log(props.discountItem.filter(item => {
    //     return item.id === `2` && item.label === `2017-04-01`;
    // }))

  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JMJPSC1S9B" >
        </script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments)}
            gtag("js", new Date());
            gtag("config", "G-JMJPSC1S9B");
          `}
        }>
        </script>

        <title>Cocopons.com@最新・人気商品の割引きクーポン情報サイト！アメリカでお得にショッピング</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="cocopons.com はアメリカで最新最大の割引き・販促コード・クーポン付きの商品を日本語で紹介するオンラインショッピングウェブサイトです。メイク用品・レディース/メンズ ファッション・キッズ/ベビー用品・アクセサリー・バッグなど多々ご紹介中。" />
        <meta name="keywords" content="ココポンズ,ショッピング,割引クーポン,最新情報,激安,アメリカ,送料無料,人気ブランド,トレンド" />
        <meta name="robots" content="index,follow" class="next-head" />
        <meta name="googlebot" content="index,follow" class="next-head" />
      </Head>

      <Title />
      <NavBar />
      <MainBody articleItem={props.ArticleItem} bannerItem={props.bannerItem} discountItem={props.discountItem.filter(item => {
            return item.tag === "other";
        })} />

    </div>
  )

}

export async function getServerSideProps() {
  const disRes = await fetch(itemApi);
  const discountData = await disRes.json();

  const banRes = await fetch(bannerApi);
  const bannerData = await banRes.json();

  const artRes = await fetch(articleApi);
  const artData = await artRes.json();

  return {
    props: {
      discountItem: discountData,
      bannerItem: bannerData,
      ArticleItem: artData
    }
  };
}

