'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { FaTaxi } from 'react-icons/fa';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Viaja con nosotros
        </h4>
        <a href='#groups' className="flex items-center h-fit py-4 px-6 bg-[yellow]/60 rounded-[32px] gap-[12px]">
        <FaTaxi className='text-[30px]  text-white'/>
          <a href='#stephs' className="font-normal text-[16px] text-white">
            Unete a nuestros grupos
          </a>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            TaxiTel
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 TaxiTel. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            <p className='cursor-pointer text-white font-semibold'>+53 52890260</p>
            {socials.map((social) => (
              <a href={social.url}>
                <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
