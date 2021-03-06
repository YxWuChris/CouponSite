import Head from 'next/head'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import MainBody from '../components/MainBody'
import { itemApi } from '../Data/Api.js'
import { bannerApi } from '../Data/Api.js'
import { articleApi } from '../Data/Api.js'

export default function Beauty(props) {

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

        <title>Cocopons.com@Beauty 最新人気化粧品の割引きクーポン情報サイト！アメリカでお得にショッピング</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="cocopons.com はアメリカで最新最大の割引き・販促コード・クーポン付きの商品を日本語で紹介するオンラインショッピングウェブサイトです。メイク用品・レディース/メンズ アクセサリー・バッグなど多々ご紹介中。makeup, 化粧品,スキンケア" />
        <meta name="keywords" content="ココポンズ,割引クーポン,最新情報,cocopons,化粧品,スキンケア,makeup" />
        <meta name="robots" content="index,follow" class="next-head" />
        <meta name="googlebot" content="index,follow" class="next-head" />
      </Head>

      <Title />
      <NavBar />
      <MainBody articleItem={props.ArticleItem} bannerItem={props.bannerItem} discountItem={props.discountItem.filter(item => {
            return item.tag === "makeup";
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

