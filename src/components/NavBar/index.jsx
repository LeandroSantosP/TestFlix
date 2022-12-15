import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../CustomInput/Button/'
import styles from './NavBar.module.css'

export const Navbar = ({ showBackButton = false } ) => {

const learnFlix = ["L", "E", "A", "R", "N", "F", "L", "I", "X"];
const navegation = useNavigate();

function handleClick() {
   navegation("/")
};

   return (
      <header className={styles.container}>
         <div className={styles.details}>
            <ul>
               {learnFlix.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
         </div>
         <div className={styles.infos}>
               <Button text="Login" />
               <Button text="Sair" />
               {showBackButton && <Button onClick={handleClick} type="button" text='voltar'/>}
         </div>
      </header>
   )
}
