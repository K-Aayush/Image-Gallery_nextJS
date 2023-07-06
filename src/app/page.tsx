import Image from 'next/image'
import styles from './page.module.css'
import SearchPage from './(CSR)/search/searchPage'

export default function Home() {
  return (
    <div>
      <SearchPage />
    </div>
  )
}
