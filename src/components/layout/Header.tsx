import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';

import MobileMenu from '@/components/MobileMenu';
import MobileSearch from '@/components/MobileSearch';

import Logo from '~/svg/logo.svg';
import MobileLogo from '~/svg/mobile-logo.svg';
import OpenMenu from '~/svg/open-menu.svg';
import Search from '~/svg/search.svg';

interface Position {
  x: string;
  y: string;
  width: string;
  height: string;
  rotate: number;
  opacity: number;
}
interface stagePositions {
  logo: Position;
  line: Position;
  menu: Position;
  blue: Position;
  yellow: Position;
  green: Position;
  pink: Position;
}
interface shapeProps {
  positions: stagePositions;
  initialPositions: stagePositions;
  brightHeader?: boolean;
  landingMode?: boolean;
  handleLogoClick: () => void;
}

export default function Header({
  positions,
  initialPositions,
  brightHeader,
  landingMode,
  handleLogoClick,
}: shapeProps) {
  const router = useRouter();
  const currentPage = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSearchOpen(false);
  };
  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className='pointer-events-none absolute left-0 top-0 hidden h-fit w-full items-center justify-start gap-24 p-28 md:flex'>
        <motion.div
          className='pointer-events-auto absolute'
          key='logo'
          initial={initialPositions.logo}
          animate={positions.logo}
          transition={{
            ease: 'easeInOut',
            duration: 1.5,
            // delay: .5,
          }}
          onClick={handleLogoClick}
        >
          <Logo
            className={` h-full w-full cursor-pointer
                        ${brightHeader ? 'bright-logo' : ''}`}
          />
        </motion.div>

        <motion.div
          className=' pointer-events-auto flex items-center justify-center '
          key='line'
          initial={{ ...initialPositions.line, marginLeft: '28rem' }}
          animate={{
            ...positions.line,
            marginLeft: landingMode ? '0rem' : '28rem',
          }}
          transition={{
            ease: 'easeInOut',
            duration: 1.5,
            // delay: .5,
          }}
        >
          <div
            className={` h-full w-[1px]
              ${brightHeader ? 'bg-white' : 'bg-gray-400'}
            `}
          />
        </motion.div>

        <motion.ul
          className={` pointer-events-auto flex h-full w-full items-center justify-between text-4xl font-thin
                      ${brightHeader ? 'text-white' : 'text-customGray'}`}
          key='menu'
          initial={initialPositions.menu}
          animate={positions.menu}
          transition={{
            ease: 'easeInOut',
            duration: 1.5,
            // delay: .5,
          }}
        >
          <motion.li
            key='projects'
            initial=''
            animate={
              currentPage == '/projects'
                ? { fontWeight: 600 }
                : { fontWeight: 150 }
            }
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <Link href='/projects'>Projects</Link>
          </motion.li>
          <motion.li
            key='about'
            initial=''
            animate={
              currentPage == '/about'
                ? { fontWeight: 600 }
                : { fontWeight: 150 }
            }
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <Link href='/about'>About</Link>
          </motion.li>
          <motion.li
            key='contact'
            initial=''
            animate={
              currentPage == '/contact'
                ? { fontWeight: 600 }
                : { fontWeight: 150 }
            }
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <Link href='/contact'>Contact</Link>
          </motion.li>
        </motion.ul>
      </header>

      {/* Mobile Header */}
      <header
        className='pointer-events-none absolute left-0 top-0 flex h-fit w-full items-center justify-between gap-24 p-56 md:hidden'
        key='mobile-header'
      >
        <Search
          onClick={handleSearchClick}
          className={` pointer-events-auto h-40 w-40 cursor-pointer
                      ${brightHeader ? 'bright-logo' : ''}`}
        />
        <MobileLogo
          onClick={handleLogoClick}
          className={` pointer-events-auto h-40 w-80 cursor-pointer
                      ${brightHeader ? 'bright-logo' : ''}`}
        />
        <OpenMenu
          onClick={handleMenuClick}
          className={` pointer-events-auto h-40 w-40 cursor-pointer
                      ${brightHeader ? 'bright-logo' : ''}`}
        />
      </header>

      {/* Mobile Menu */}
      <AnimatePresence mode='wait'>
        {isMenuOpen && (
          <MobileMenu
            key='mobile-menu'
            handleMenuClick={handleMenuClick}
            handleLogoClick={handleLogoClick}
            handleSearchClick={handleSearchClick}
          />
        )}

        {isSearchOpen && (
          <MobileSearch
            key='mobile-search'
            handleSearchClick={handleSearchClick}
            handleLogoClick={handleLogoClick}
            handleMenuClick={handleMenuClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}
