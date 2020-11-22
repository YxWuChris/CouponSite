import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import Article from '../../components/Article';
import NavBar from '../../components/NavBar';
import Head from 'next/head';

const Shipping1 = () =>{


    const [itemData, setItemData] = useState(null);

    useEffect(() => {

        async function fetchData() {
            const result = await axios('https://raw.githubusercontent.com/YxWuChris/CPArticle/master/shipping1.html');
            setItemData(result.data)
        }
        fetchData();
    }, []);

    return(
        <>
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
        <title>米国の納税申告書が届くまでにどのくらいかかるの？連邦税と州税の払い戻しに関して詳しく教えてください</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="アメリカの郵送ガイド USPS・USP・FedEx アメリカから最も安く、早く、信頼できる郵送方法を教えます。アメリカから日本に郵送する方法 アメリカ 郵送方法" />
        <meta name="keywords" content="ココポンズ,アメリカ 米国 日本 郵送方法 配達 格安 安く 速達 郵送 cocopons.com cocopons" />
        <meta name="robots" content="index,follow" class="next-head" />
        <meta name="googlebot" content="index,follow" class="next-head" />
        </Head>
         <Title />
        <NavBar />
        {itemData? (
            <Article articleData={itemData} />
        ):(
            <div> </div>
        )
        }

        </>
    )

}

export default Shipping1;