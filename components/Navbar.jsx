'use client';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      
      <div className="flex items-center gap-5 z-10">
      {socials.map((social) => (
              <a href={social.src}>
                <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
              </a>
            ))}
      </div>
        <h2 className="font-extrabold text-[30px] leading-[30.24px] text-white">
        TaxiTel
      </h2>
        <h2 className='font-semibold text-white'>+53 52890260</h2>
       
    </div>
  </motion.nav>
);

export default Navbar;
