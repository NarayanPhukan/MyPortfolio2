import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDark}) => {
  return (
    <footer className='mt-20'>
      
      {/* Top Section */}
      <div className='text-center'>
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt='Narayan Logo'
          className='w-36 mx-auto mb-4 dark:text-white'
        />

        <div className='flex items-center justify-center gap-2 text-gray-700'>
          <Image
            src={isDark ? assets.mail_icon_dark : assets.mail_icon}
            alt='Mail Icon'
            className='w-5 dark:text-white'
          />
          <span className='hover:text-black transition dark:text-white'>
            narayanphukan30@gmail.com
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6 text-sm text-gray-600 dark:text-white'>
        
        <p>© 2026 Narayan Phukan. All rights reserved.</p>

        <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/NarayanPhukan'
              className='hover:text-black transition dark:text-white'
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/narayn.phukan/'
              className='hover:text-black transition dark:text-white'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer