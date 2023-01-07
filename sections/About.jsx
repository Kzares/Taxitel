'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section  className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre TaxiTel" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Somos {' '} <span className="font-extrabold text-white">TaxiTel</span> 🚖 una agencia de taxi creada con el objetivo de proporcionarle un servicio de taxi 🚕 eficiente al mayor número de personas posible , {' '}
        <span className="font-extrabold text-white">
          siempre
        </span>{' '}
        manteniendo la profesionalidad y el buen trato entre todos. <br />Para contratar nuestros servicios solo debes de unirte a cualquiera de los grupos de WhatsApp y con solo decir “taxi” seguidamente un administrador lo atenderá 
        </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
