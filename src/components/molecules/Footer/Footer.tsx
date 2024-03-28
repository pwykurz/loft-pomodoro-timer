import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className='z-100 absolute bottom-0 text-[10px] lg:bottom-2 lg:text-[12px]'>
      © 2023 Created by{' '}
      <Link className={styles.link} href='https://epic-it.pl/' target='_blank'>
        EPIC-IT PAWEŁ WYKURZ
      </Link>
    </footer>
  )
}

export default Footer
