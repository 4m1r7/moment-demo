import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import client from '@/lib/apolloClient';

import ImageModal from '@/components/ImageModal';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { usePosition } from '@/PositionContext';
import { GET_PROJECT_DATA, GET_ROUTES } from '@/queries/projectsQueries';

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
interface relatedProjects {
  id: string;
  title: string;
  uri: string;
  projectFields: {
    coverInfo: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}
[];
interface Project {
  projectBy: {
    id: string;
    title: string;
    slug: string;
    uri: string;
    projectFields: {
      info: string;
      coverInfo: string;
      type: string;
      description: string;
      projectPhotos: {
        mediaItemUrl: string;
      }[];
      relatedProjects: relatedProjects[];
    };
  };
}
interface ProjectsPaths {
  node: {
    slug: string;
  };
}

const initialPositions: stagePositions = {
  logo: {
    x: '6vw',
    y: '-10vh',
    width: '18vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  line: {
    x: '13vw',
    y: '-10vh',
    width: '1vw',
    height: '3.5rem',
    opacity: 0,
    rotate: 0,
  },
  menu: {
    x: '18vw',
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
      x: '6vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '13vw',
      y: '0vh',
      width: '1vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '18vw',
      y: '0vh',
      width: '42vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: 'calc( -50vw + 9rem )',
      y: 'calc( -50vh + 8.5rem )',
      width: '2.5vw',
      height: '2.5vw',
      opacity: 0.4,
      rotate: -50,
    },
    yellow: {
      x: 'calc( -50vw + 7.8rem )',
      y: 'calc( -50vh + 8.3rem )',
      width: '2vw',
      height: '2vw',
      opacity: 0.4,
      rotate: -90,
    },
    green: {
      x: 'calc( -50vw + 9rem )',
      y: 'calc( -50vh + 9.5rem )',
      width: '2.3vw',
      height: '2.3vw',
      opacity: 0.4,
      rotate: 270,
    },
    pink: {
      x: 'calc( -50vw + 8.1rem )',
      y: 'calc( -50vh + 9.2rem )',
      width: '2.3vw',
      height: '2.3vw',
      opacity: 0.4,
      rotate: 280,
    },
  },
  defaultPositions: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '17vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '45vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '26vw',
      y: '-11vh',
      width: '24vw',
      height: '24vw',
      opacity: 0.4,
      rotate: 6,
    },
    yellow: {
      x: '-24vw',
      y: '14vh',
      width: '19vw',
      height: '19vw',
      opacity: 0.4,
      rotate: -40,
    },
    green: {
      x: '5vw',
      y: '23vh',
      width: '18vw',
      height: '18vw',
      opacity: 0.4,
      rotate: 160,
    },
    pink: {
      x: '-11vw',
      y: '-14vh',
      width: '22vw',
      height: '22vw',
      opacity: 0.4,
      rotate: -18,
    },
  },
  blue: {
    logo: {
      x: '0vw',
      y: 'calc(75vh - 15.8rem)',
      width: '18vw',
      height: 'fit-content',
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
      opacity: 0.4,
      rotate: -130,
    },
    yellow: {
      x: '-38vw',
      y: '-30vh',
      width: '12.5vw',
      height: '12.5vw',
      opacity: 0.4,
      rotate: 0,
    },
    green: {
      x: '-24vw',
      y: '-23vh',
      width: '23vw',
      height: '23vw',
      opacity: 0.4,
      rotate: 0,
    },
    pink: {
      x: '-23vw',
      y: '-3vh',
      width: '30.5vw',
      height: '30.5vw',
      opacity: 0.4,
      rotate: -75,
    },
  },
  yellow: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
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
      opacity: 0.4,
      rotate: 150,
    },
    yellow: {
      x: '-23vw',
      y: '5vh',
      width: '43vw',
      height: '43vw',
      opacity: 0.4,
      rotate: -20,
    },
    green: {
      x: '34vw',
      y: '-9vh',
      width: '18vw',
      height: '18vw',
      opacity: 0.4,
      rotate: 180,
    },
    pink: {
      x: '25vw',
      y: '-20vh',
      width: '21vw',
      height: '21vw',
      opacity: 0.4,
      rotate: -60,
    },
  },
  green: {
    logo: {
      x: '0vw',
      y: '-15.8rem',
      width: '18vw',
      height: 'fit-content',
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
      opacity: 0.4,
      rotate: 185,
    },
    yellow: {
      x: '38vw',
      y: '26vh',
      width: '13vw',
      height: '13vw',
      opacity: 0.4,
      rotate: -10,
    },
    green: {
      x: '15vw',
      y: '3vh',
      width: '51vw',
      height: '51vw',
      opacity: 0.4,
      rotate: 55,
    },
    pink: {
      x: '-14vw',
      y: '8vh',
      width: '21vw',
      height: '21vw',
      opacity: 0.4,
      rotate: -20,
    },
  },
  pink: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
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
      opacity: 0.4,
      rotate: 45,
    },
    yellow: {
      x: '-36vw',
      y: '-20vh',
      width: '11.5vw',
      height: '11.5vw',
      opacity: 0.4,
      rotate: 30,
    },
    green: {
      x: '19vw',
      y: '27vh',
      width: '12vw',
      height: '12vw',
      opacity: 0.4,
      rotate: 160,
    },
    pink: {
      x: '10vw',
      y: '-2vh',
      width: '59vw',
      height: '59vw',
      opacity: 0.4,
      rotate: -70,
    },
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

interface projectProps {
  projectData: Project;
}

export default function Project({ projectData }: projectProps) {
  const projectPhotos = projectData.projectBy.projectFields.projectPhotos;
  const relatedProjects = projectData.projectBy.projectFields.relatedProjects;

  const { lastPosition, setLastPosition } = usePosition();
  const { setHomeMode } = usePosition();
  const router = useRouter();

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

  // Image modal set up
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Layout
      positions={positions}
      initialPositions={dynamicInitials}
      handleShapeClick={handleShapeClick}
      handleLogoClick={handleLogoClick}
    >
      <Seo templateTitle='Projects' />

      <main className=' relative flex min-h-[85vh] w-full flex-col items-center justify-start bg-transparent px-32 pt-72 text-center'>
        {/* Projects Info */}
        <motion.div
          className='mt-20 w-full pb-28'
          style={{}}
          key='projects'
          variants={mainComponent}
          initial='hidden'
          animate='enter'
          exit='exit'
        >
          {/* Project Details */}
          <div className='grid grid-cols-4 gap-8 bg-transparent '>
            {/* Project Info Card */}
            <div
              className={`flex aspect-square w-full flex-col justify-between p-4 pl-0
                              ${
                                projectData.projectBy.projectFields.description
                                  ? 'row-span-3'
                                  : ''
                              }`}
            >
              <div className='flex aspect-square w-full flex-col justify-between'>
                <h1 className='text-customGray text-left text-5xl'>
                  {projectData.projectBy.title}
                </h1>

                <div>
                  <h2 className='text-customGray mb-2 text-left text-2xl font-semibold'>
                    Info
                  </h2>
                  <div
                    className='text-customGray text-left text-xl font-light'
                    dangerouslySetInnerHTML={{
                      __html: projectData.projectBy.projectFields.info,
                    }}
                  />
                </div>
              </div>

              {projectData.projectBy.projectFields.description && (
                <div>
                  <h2 className='text-customGray mb-2 mt-8 text-left text-2xl font-semibold'>
                    Description
                  </h2>
                  <div
                    className='text-customGray text-left text-xl font-light'
                    dangerouslySetInnerHTML={{
                      __html: projectData.projectBy.projectFields.description,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Project Photos */}
            {projectPhotos.length > 0 &&
              projectPhotos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className='relative flex aspect-square w-full cursor-pointer bg-gray-200'
                >
                  <Image
                    src={photo.mediaItemUrl}
                    alt='project photo'
                    fill
                    sizes='25vw'
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center',
                    }}
                  />
                </div>
              ))}
          </div>

          {/* Project Images Modal */}
          {modalVisible && (
            <ImageModal
              imageUrl={projectPhotos[currentImageIndex].mediaItemUrl}
              onClose={closeModal}
              onPrev={goToPrevImage}
              onNext={goToNextImage}
            />
          )}

          {/* Related Projects */}
          {relatedProjects && (
            <div className='w-full'>
              <hr className='border-customGray mb-24 mt-32' />

              <h3 className='text-customGray mb-8 text-left text-7xl'>
                Next Up
              </h3>

              <div className='grid w-full grid-cols-4 gap-8 bg-transparent '>
                {relatedProjects.map((project: relatedProjects) => (
                  // Project Card
                  <Link
                    href={project.uri}
                    key={project.id}
                    className='text-customGray group relative flex flex-col items-center justify-start text-center'
                  >
                    {/* Project Image */}
                    <div className=' relative aspect-square w-full bg-stone-300'>
                      {project.featuredImage.node.sourceUrl && (
                        <Image
                          src={project.featuredImage.node.sourceUrl}
                          fill
                          sizes='25vw'
                          quality={100}
                          alt={project.title}
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'center center',
                          }}
                        />
                      )}
                    </div>

                    {/* Overlay */}
                    <div className='absolute aspect-square w-full bg-black opacity-0 transition duration-300 group-hover:opacity-10' />

                    {/* Project Info */}
                    <div className='absolute flex aspect-square w-full flex-col justify-between p-10 opacity-0 transition duration-300 group-hover:opacity-100'>
                      <h2 className='text-left text-5xl font-bold text-white'>
                        {project.title}
                      </h2>
                      <div
                        className='text-left text-xl font-extralight text-white'
                        dangerouslySetInnerHTML={{
                          __html: project.projectFields.coverInfo,
                        }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data: projectData } = await client.query({
    query: GET_ROUTES,
  });

  const paths = projectData.projects.edges.map((edge: ProjectsPaths) => ({
    params: { slug: edge.node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const { data: projectData } = await client.query({
    query: GET_PROJECT_DATA,
    variables: {
      slug: slug,
    },
  });

  return {
    props: {
      projectData,
    },
  };
};
