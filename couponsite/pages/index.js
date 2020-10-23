import Head from 'next/head'
import ProductList from '../components/ProductList'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Discount website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <NavBar />
      <ProductList />

    </div>
  )
}
