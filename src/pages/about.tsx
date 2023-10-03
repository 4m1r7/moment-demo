import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import client from '@/lib/apolloClient';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { usePosition } from '@/PositionContext';
import { GET_ABOUT, GET_MEMBERS } from '@/queries/aboutQueries';

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
interface MemberNode {
  node: {
    id: string;
    memberFields: {
      exMember: true | null;
      position: string;
    };
    title: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  };
}
interface MembersData {
  members: {
    edges: MemberNode[];
  };
}
interface PageData {
  pageBy: {
    __typename: string;
    content: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
  };
}

const initialPositions: stagePositions = {
  logo: {
    x: '0vw',
    y: '-53.15vw',
    width: '18vw',
    height: '15rem',
    opacity: 1,
    rotate: 0,
  },
  line: {
    x: '21.5vw',
    y: '-50vw',
    width: '1vw',
    height: '89vw',
    opacity: 1,
    rotate: 90,
  },
  menu: {
    x: '35.75vw',
    y: '-52.5vw',
    width: '25vw',
    height: 'fit-content',
    opacity: 1,
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
      x: '0vw',
      y: '-43.15vw',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '21.5vw',
      y: '-40vw',
      width: '1vw',
      height: '89vw',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '35.75vw',
      y: '-42.5vw',
      width: '25vw',
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
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

interface AboutProps {
  aboutData: PageData;
  membersData: MembersData;
}

export default function About({ aboutData, membersData }: AboutProps) {
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

  const prevMembers = membersData.members.edges.filter(
    (member: MemberNode) => member.node.memberFields.exMember
  );

  return (
    <Layout
      positions={positions}
      initialPositions={dynamicInitials}
      handleShapeClick={handleShapeClick}
      handleLogoClick={handleLogoClick}
    >
      <Seo templateTitle='Home' />

      <main>
        <section className=' pointer-events-none relative flex min-h-screen w-full flex-col items-center justify-start bg-transparent pt-64 text-center '>
          <motion.div
            className='pointer-events-auto flex w-full flex-col gap-28 bg-transparent px-32 pb-28 '
            style={{}}
            key='about'
            variants={mainComponent}
            initial='hidden'
            animate='enter'
            exit='exit'
          >
            {/* Team Photo */}
            <div className='relative h-[25vh] w-full overflow-hidden rounded-full bg-stone-200 md:h-[55vh]'>
              {aboutData.pageBy.featuredImage.node.mediaItemUrl && (
                <Image
                  src={aboutData.pageBy.featuredImage.node.mediaItemUrl}
                  fill
                  sizes='90vw'
                  quality={98}
                  alt='Moment Team'
                  style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
                />
              )}
            </div>

            {/* About Paragraph */}
            <div
              className='cms-content text-customGray mb-20 mt-14 w-full px-[5%] text-left md:px-[15%]'
              dangerouslySetInnerHTML={{ __html: aboutData.pageBy.content }}
            />

            {/* Current Members */}
            <h2 className='text-customGray mb-28 w-full text-8xl md:text-6xl'>
              Current Members of Moment
            </h2>

            <div className='grid w-full grid-cols-2 gap-28 px-16 md:grid-cols-4'>
              {membersData.members.edges
                .filter((member: MemberNode) => {
                  return !member.node.memberFields.exMember;
                })
                .reverse()
                .map((member: MemberNode) => (
                  <div
                    key={member.node.id}
                    className='text-customGray relative flex flex-col items-center justify-start text-center'
                  >
                    <div className='relative mb-16 aspect-square w-full overflow-hidden rounded-full bg-stone-200 md:mb-9'>
                      {member.node.featuredImage.node.sourceUrl && (
                        <Image
                          src={member.node.featuredImage.node.sourceUrl}
                          fill
                          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
                          alt='Moment Team'
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>

                    <h3 className='mb-6 text-7xl md:mb-1 md:text-2xl'>
                      {member.node.title}
                    </h3>

                    <p className='text-7xl font-extralight md:text-2xl'>
                      {member.node.memberFields.position}
                    </p>
                  </div>
                ))}
            </div>

            {/* Previous Members (conditionally rendered if there are any previous members) */}
            {prevMembers.length > 0 && (
              <div className='mt-8 flex w-full flex-col gap-28'>
                <h2 className='text-customGray mb-28 w-full text-8xl md:text-6xl'>
                  Previous Members of Moment
                </h2>

                <div className='grid w-full grid-cols-2 gap-28 px-16 md:grid-cols-4'>
                  {prevMembers.reverse().map((member: MemberNode) => (
                    <div
                      key={member.node.id}
                      className='text-customGray relative flex flex-col items-center justify-start text-center'
                    >
                      <div className='relative mb-16 aspect-square w-full overflow-hidden rounded-full bg-stone-200 md:mb-9'>
                        {member.node.featuredImage.node.sourceUrl && (
                          <Image
                            src={member.node.featuredImage.node.sourceUrl}
                            fill
                            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
                            alt='Moment Team'
                            style={{ objectFit: 'cover' }}
                          />
                        )}
                      </div>

                      <h3 className='mb-6 text-7xl md:mb-1 md:text-2xl'>
                        {member.node.title}
                      </h3>

                      <p className='text-7xl font-extralight md:text-2xl'>
                        {member.node.memberFields.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: membersData } = await client.query({
    query: GET_MEMBERS,
  });

  const { data: aboutData } = await client.query({
    query: GET_ABOUT,
  });

  return {
    props: {
      membersData,
      aboutData,
    },
  };
}
