import React from 'react'
import styles from './CunstomInput.module.css'

export const CunstomInput = ({ type, placeholder, label }) => {
   const [value, setValue] = React.useState('');

   return (
      <>
      <div>
         <label className={styles.lab} htmlFor="value">{label}</label>
         <input
            className={styles.input}
            type={type}
            name='user'
            id="value"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            placeholder={placeholder} />
         </div>
      </>
   )
}
