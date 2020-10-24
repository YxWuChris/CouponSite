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
        <title>アメリカ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <NavBar />
      <MainBody />

    </div>
  )
}
