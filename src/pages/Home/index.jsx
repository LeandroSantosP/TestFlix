import React from 'react'
import { RowLoop } from '../../components/RowLoop'
import category from '../../api'

import styles from './Home.module.css'

export const Home = () => {

  return (
    <main className={styles.container}>
      {category.map((cate, index ) => (
        <div key={index}>
          <h1>{cate.title}</h1>
          <RowLoop cateInfo={cate} />
        </div>
      ))}
    </main>
  )
}
