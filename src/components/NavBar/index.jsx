import React from 'react'

import styles from './NavBar.module.css'

export const Navbar = () => {

   return (
      <header className={styles.container}>
         <div className={styles.logo}>
            <img src='' alt="" />
            <input type="text" />
         </div>
         <div className={styles.details}>
            <ul>
               <li>info 1</li>
               <li>info 2</li>
               <li>info 3</li>
               <li>info 4</li>
            </ul>
         </div>
      </header>
   )
}
