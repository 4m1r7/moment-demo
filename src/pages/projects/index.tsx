import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import client from '@/lib/apolloClient';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { usePosition } from '@/PositionContext';
import { GET_PAGE_DATA, GET_PROJECTS } from '@/queries/projectsQueries';

import CloseFilters from '~/svg/close-filters.svg';
import OpenFilters from '~/svg/open-filters.svg';

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
interface ProjectNode {
  node: {
    id: string;
    title: string;
    uri: string;
    projectFields: {
      coverInfo: string;
      type: string;
    };
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  };
}
interface ProjectsData {
  projects: {
    edges: ProjectNode[];
  };
}
interface PageData {
  pageBy: {
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
  };
}

const initialPositions: stagePositions = {
  logo: {
    x: '2vw',
    y: '-10vh',
    width: '18vw',
    height: '15rem',
    opacity: 0,
    rotate: 0,
  },
  line: {
    x: '3vw',
    y: '-10vh',
    width: '17vw',
    height: '3.5rem',
    opacity: 0,
    rotate: 0,
  },
  menu: {
    x: '3vw',
    y: '-10vh',
    width: '42vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  blue: {
    x: 'calc( -50vw + 9.2rem )',
    y: 'calc( -60vh + 8.2rem )',
    width: '2.5vw',
    height: '2.5vw',
    opacity: 0,
    rotate: -360,
  },
  yellow: {
    x: 'calc( -50vw + 8rem )',
    y: 'calc( -60vh + 8rem )',
    width: '2vw',
    height: '2vw',
    opacity: 0,
    rotate: -340,
  },
  green: {
    x: 'calc( -50vw + 9.2rem )',
    y: 'calc( -60vh + 9.3rem )',
    width: '2.3vw',
    height: '2.3vw',
    opacity: 0,
    rotate: -80,
  },
  pink: {
    x: 'calc( -50vw + 7.8rem )',
    y: 'calc( -60vh + 8.8rem )',
    width: '2.3vw',
    height: '2.3vw',
    opacity: 0,
    rotate: 410,
  },
};
const stagePositions: { [key: string]: stagePositions } = {
  firstPositions: {
    logo: {
      x: '2vw',
      y: '0vh',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '3vw',
      y: '0vh',
      width: '17vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '3vw',
      y: '0vh',
      width: '42vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: 'calc( -50vw + 9.2rem )',
      y: 'calc( -50vh + 8.2rem )',
      width: '2.5vw',
      height: '2.5vw',
      opacity: 0,
      rotate: -360,
    },
    yellow: {
      x: 'calc( -50vw + 8rem )',
      y: 'calc( -50vh + 8rem )',
      width: '2vw',
      height: '2vw',
      opacity: 0,
      rotate: -340,
    },
    green: {
      x: 'calc( -50vw + 9.2rem )',
      y: 'calc( -50vh + 9.3rem )',
      width: '2.3vw',
      height: '2.3vw',
      opacity: 0,
      rotate: -80,
    },
    pink: {
      x: 'calc( -50vw + 7.8rem )',
      y: 'calc( -50vh + 8.8rem )',
      width: '2.3vw',
      height: '2.3vw',
      opacity: 0,
      rotate: 410,
    },
  },
  blue: {
    logo: {
      x: '0vw',
      y: 'calc(75vh - 15.8rem)',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '-9vw',
      y: 'calc(75vh - 20rem)',
      width: '1vw',
      height: '35rem',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '-28.4vw',
      y: 'calc(75vh - 23.5rem)',
      width: '28.2vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '14vw',
      y: '8vh',
      width: '58vw',
      height: '58vw',
      opacity: 1,
      rotate: -130,
    },
    yellow: {
      x: '-38vw',
      y: '-30vh',
      width: '12.5vw',
      height: '12.5vw',
      opacity: 1,
      rotate: 0,
    },
    green: {
      x: '-24vw',
      y: '-23vh',
      width: '23vw',
      height: '23vw',
      opacity: 1,
      rotate: 0,
    },
    pink: {
      x: '-23vw',
      y: '-3vh',
      width: '30.5vw',
      height: '30.5vw',
      opacity: 1,
      rotate: -75,
    },
  },
  yellow: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '1vw',
      height: '3rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '52vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '39vw',
      y: '-25vh',
      width: '12vw',
      height: '12vw',
      opacity: 1,
      rotate: 150,
    },
    yellow: {
      x: '-23vw',
      y: '5vh',
      width: '43vw',
      height: '43vw',
      opacity: 1,
      rotate: -20,
    },
    green: {
      x: '34vw',
      y: '-9vh',
      width: '18vw',
      height: '18vw',
      opacity: 1,
      rotate: 180,
    },
    pink: {
      x: '25vw',
      y: '-20vh',
      width: '21vw',
      height: '21vw',
      opacity: 1,
      rotate: -60,
    },
  },
  green: {
    logo: {
      x: '0vw',
      y: '-15.8rem',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '-9vw',
      y: '-11.4rem',
      width: '1vw',
      height: '35rem',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '-28.4vw',
      y: '-8rem',
      width: '28.2vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '38vw',
      y: '-20vh',
      width: '12vw',
      height: '12vw',
      opacity: 1,
      rotate: 185,
    },
    yellow: {
      x: '38vw',
      y: '26vh',
      width: '13vw',
      height: '13vw',
      opacity: 1,
      rotate: -10,
    },
    green: {
      x: '15vw',
      y: '3vh',
      width: '51vw',
      height: '51vw',
      opacity: 1,
      rotate: 55,
    },
    pink: {
      x: '-14vw',
      y: '8vh',
      width: '21vw',
      height: '21vw',
      opacity: 1,
      rotate: -20,
    },
  },
  pink: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '.1vw',
      height: '3rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '25vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '32vw',
      y: '16vh',
      width: '15vw',
      height: '15vw',
      opacity: 1,
      rotate: 45,
    },
    yellow: {
      x: '-36vw',
      y: '-20vh',
      width: '11.5vw',
      height: '11.5vw',
      opacity: 1,
      rotate: 30,
    },
    green: {
      x: '19vw',
      y: '27vh',
      width: '12vw',
      height: '12vw',
      opacity: 1,
      rotate: 160,
    },
    pink: {
      x: '10vw',
      y: '-2vh',
      width: '59vw',
      height: '59vw',
      opacity: 1,
      rotate: -70,
    },
  },
};
const heroComponent = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.6 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeIn', duration: 0.3 },
  },
};
const filterComponent = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeIn', duration: 0.15 },
  },
};
const mainComponent = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: 'easeOut', duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: 100,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.25 },
  },
};

interface projectsProps {
  AllProjects: ProjectsData;
  pageData: PageData;
}

export default function Projects({ AllProjects, pageData }: projectsProps) {
  const { lastPosition, setLastPosition } = usePosition();
  const { setHomeMode } = usePosition();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] =
    useState<boolean>(false);

  const uniqueProjectTypes = Array.from(
    new Set(
      AllProjects.projects.edges.map(
        (project: ProjectNode) => project.node.projectFields.type
      )
    )
  );

  const dynamicInitials = lastPosition ? lastPosition : initialPositions;

  const [positions] = useState<stagePositions>(
    stagePositions['firstPositions']
  );

  useEffect(() => {
    setLastPosition(positions);
  }, [positions, setLastPosition]);

  const handleShapeClick = () => {
    setHomeMode('goDefault');
    router.push('/');
  };

  const handleLogoClick = () => {
    setHomeMode('goLanding');
    router.push('/');
  };

  return (
    <Layout
      positions={positions}
      initialPositions={dynamicInitials}
      brightHeader
      handleShapeClick={handleShapeClick}
      handleLogoClick={handleLogoClick}
    >
      <Seo templateTitle='Projects' />

      <main>
        <section className=' pointer-events-none relative flex min-h-screen w-full flex-col items-center justify-start bg-transparent text-center'>
          {/* Hero Image */}
          <motion.div
            className='pointer-events-auto relative flex h-[80vh] w-full flex-col gap-28 bg-stone-400 px-64 pb-28 md:h-[40vw] '
            key='hero'
            variants={heroComponent}
            initial='hidden'
            animate='enter'
            exit='exit'
          >
            {/* Hero Image */}
            {pageData.pageBy.featuredImage.node.mediaItemUrl && (
              <Image
                src={pageData.pageBy.featuredImage.node.mediaItemUrl}
                fill
                sizes='100vw'
                quality={98}
                alt='Hero Image'
                style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
              />
            )}

            {/* Mobile Projects Type Filters */}
            <div className='relative z-10 mt-[20vh] w-full text-8xl md:hidden'>
              {/* Active Filter */}
              <p
                className='cursor-pointer rounded-full border border-white p-24 font-semibold text-white'
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                {activeFilter ? activeFilter : 'All Categories'}
              </p>

              {/* Filters List */}
              <AnimatePresence mode='wait'>
                {isMobileFiltersOpen && (
                  <motion.ul
                    className='absolute top-0 flex max-h-[55vh] w-full flex-col items-center overflow-scroll rounded-[8rem] bg-white'
                    key={`mobile-filter-list-${isMobileFiltersOpen}`}
                    variants={filterComponent}
                    initial='hidden'
                    animate='enter'
                    exit='exit'
                  >
                    {/* All Filter */}
                    <li
                      key='-1'
                      onClick={() => {
                        setActiveFilter(null);
                        setIsMobileFiltersOpen(false);
                      }}
                      className={`text-customGray w-2/3 cursor-pointer py-24
                                    ${activeFilter == null ? 'font-bold' : ''}`}
                    >
                      All
                    </li>

                    {/* Project Type Filters */}
                    {uniqueProjectTypes.map((type, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setActiveFilter(type);
                          setIsMobileFiltersOpen(false);
                        }}
                        className={`text-customGray w-2/3 cursor-pointer border-t py-24
                                    ${activeFilter == type ? 'font-bold' : ''}`}
                      >
                        {type}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              {isMobileFiltersOpen ? (
                <CloseFilters
                  className='absolute right-36 top-24 h-28 w-28'
                  onClick={() => setIsMobileFiltersOpen(false)}
                />
              ) : (
                <OpenFilters
                  className='h-22 w-22 absolute right-36 top-28'
                  onClick={() => setIsMobileFiltersOpen(true)}
                />
              )}
            </div>
          </motion.div>

          {/* Desktop Projects Type Filters */}
          <motion.div
            className='pointer-events-auto relative hidden h-fit w-full flex-col gap-28 md:flex'
            style={{}}
            key='filters'
            variants={mainComponent}
            initial='hidden'
            animate='enter'
            exit='exit'
          >
            <ul className='flex justify-center overflow-scroll px-32 py-14 pr-20'>
              {/* All Filter */}
              <li
                key='-1'
                onClick={() => setActiveFilter(null)}
                className={`text-customGray cursor-pointer pr-32 text-3xl
                              ${activeFilter == null ? 'font-bold' : ''}`}
              >
                All
              </li>

              {/* Project Type Filters */}
              {uniqueProjectTypes.map((type, index) => (
                <li
                  key={index}
                  onClick={() => setActiveFilter(type)}
                  className={`text-customGray cursor-pointer pr-32 text-3xl
                              ${activeFilter == type ? 'font-bold' : ''}`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects Index */}
          <motion.div
            className='pointer-events-auto grid w-full grid-cols-2 gap-8 bg-transparent px-32 pb-28 pt-32 md:grid-cols-4 md:pt-0 '
            style={{}}
            key='projects'
            variants={mainComponent}
            initial='hidden'
            animate='enter'
            exit='exit'
          >
            {AllProjects.projects.edges
              .filter((project: ProjectNode) => {
                return activeFilter
                  ? activeFilter.includes(project.node.projectFields.type)
                  : true;
              })
              .map((project: ProjectNode) => (
                // Project Card
                <Link
                  href={project.node.uri}
                  key={project.node.id}
                  className='text-customGray group relative flex flex-col items-start justify-start text-center'
                >
                  {/* Project Image */}
                  <div className=' relative aspect-square w-full bg-stone-300'>
                    {project.node.featuredImage.node.sourceUrl && (
                      <Image
                        src={project.node.featuredImage.node.sourceUrl}
                        fill
                        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
                        quality={98}
                        alt={project.node.title}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center center',
                        }}
                      />
                    )}
                  </div>

                  {/* Overlay */}
                  <div className='absolute hidden aspect-square w-full bg-black opacity-0 transition duration-300 group-hover:opacity-10 md:flex' />

                  {/* Project Info */}
                  <div className='absolute hidden aspect-square w-full flex-col justify-between p-10 opacity-0 transition duration-300 group-hover:opacity-100 md:flex'>
                    <h2 className='text-left text-5xl font-bold text-white'>
                      {project.node.title}
                    </h2>
                    <div
                      className='text-left text-xl font-extralight text-white'
                      dangerouslySetInnerHTML={{
                        __html: project.node.projectFields.coverInfo,
                      }}
                    />
                  </div>

                  {/* Mobile Mode Title */}
                  <h2 className='text-customGray mb-12 mt-8 text-left text-7xl md:hidden'>
                    {project.node.title}
                  </h2>
                </Link>
              ))}
          </motion.div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: AllProjects } = await client.query({
    query: GET_PROJECTS,
  });

  const { data: pageData } = await client.query({
    query: GET_PAGE_DATA,
  });

  return {
    props: {
      AllProjects,
      pageData,
    },
  };
}
