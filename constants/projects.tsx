import { FaGithub, FaShare } from 'react-icons/fa'
import { SiJavascript, SiReact } from 'react-icons/si'
import { AiOutlineDatabase } from 'react-icons/ai'

const projects = [
  {
    name: '24 Game',
    link: '/24.png',
    description:
      'A web application that allows users to solve 24 game. Solutions are calculated by brute force algorithm with the time complexity of O(n! * 4**(n-1) * 2**(n-2)) given that the number of operands is n.',
    keywords: ['React', 'Material UI'],
    icons: [
      {
        name: 'Github',
        component: <FaGithub />,
        link: 'https://github.com/kan-fu/24Game',
      },
      {
        name: 'External Link',
        component: <FaShare />,
        link: 'https://24game.netlify.app/',
      },
    ],
  },
  {
    name: 'Bike Journey',
    link: '/bike.jpg',
    description:
      'A single web page to display my bike paths and stories using Leaflet and Openstreetmap.',
    keywords: ['React', 'Leaflet', 'Contentful', 'Gatsby'],
    icons: [
      {
        name: 'Github',
        component: <FaGithub />,
        link: 'https://github.com/kan-fu/bike-journey',
      },
      {
        name: 'External Link',
        component: <FaShare />,
        link: 'https://bike-journey.netlify.app/',
      },
    ],
  },
  {
    name: 'Stock Portfolio Dashboard',
    link: '/rps.png',
    description:
      'A personal stock dashboard for tracking my quantitative investment strategies.',
    keywords: ['React', 'Recharts', 'Express', 'Graphql', 'MongoDB', 'Gatsby'],
    icons: [
      {
        name: 'Github',
        component: <FaGithub />,
        link: 'https://github.com/kan-fu/rps-portfolio-dashboard',
      },
      {
        name: 'External Link',
        component: <FaShare />,
        link: 'https://rps-portfolio.netlify.app/',
      },
    ],
  },
  {
    name: 'Freecodecamp Projects',
    link: '/freecodecamp.png',
    description: 'Projects that help me get these certificates.',
    keywords: [
      'Repsonsive Design',
      'JS Algorithms',
      'Front End',
      'Back End',
      'Full Stack Open',
    ],
    icons: [
      {
        name: 'Responsive Design',
        component: (
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            role='img'
            height='24px'
            width='24px'
            viewBox='0 0 640 512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M112 48h352v48h48V32a32.09 32.09 0 00-32-32H96a32.09 32.09 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H112zm492 80H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-12 336H432V176h160z'></path>
          </svg>
        ),
        link: 'https://www.freecodecamp.org/certification/kanfu/responsive-web-design',
      },
      {
        name: 'JavaScript Algorithms',
        component: <SiJavascript />,
        link: 'https://www.freecodecamp.org/certification/kanfu/javascript-algorithms-and-data-structures',
      },
      {
        name: 'Front End',
        component: <SiReact />,
        link: 'https://www.freecodecamp.org/certification/kanfu/front-end-development-libraries',
      },
      {
        name: 'Back End',
        component: <AiOutlineDatabase />,
        link: 'https://www.freecodecamp.org/certification/kanfu/back-end-development-and-apis',
      },
      {
        name: 'Full Stack Open',
        component: (
          <div className='dark:bg-white bg-black dark:text-gray-700 text-gray-200 text-base border-black dark:border-white border-t-4 border-r-3 h-6 w-6 font-semibold text-right'>
            FS
          </div>
        ),
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/88bba1a16f6e6c80e776ad1bdf3a1ee6',
      },
    ],
  },
]

export default projects
