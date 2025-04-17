import {
  mobile,
  backend,
  creator,
  web,
  
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  meta,
  starbucks,
  tesla,
  shopify,
  punch,
  hng,

  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  vuejs,

  aisummarizer,
  memories,
  threadsApp,
  fintech
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Vue Js',
    icon: vuejs
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'Flutter',
    icon: flutter
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'MERN Stack Developer',
    company_name: 'Punch Group, Lagos',
    icon: punch,
    iconBg: '#FFF',
    date: 'Feb 2025 - Present',
    points: [
      'Refactored Autobaiter repository into a modular MVC architecture, improving scalability and developer onboarding.',
      'Worked both independently and in agile teams to identify and resolve technical challenges quickly and effectively.',
      'Reduced code complexity by 40% and bug resolution time by 30%.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Senior Facilitator',
    company_name: 'ATC X Tech4DEV',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Present',
    points: [
      'Delivered structured computer and tech literacy training programs',
      'Mentored aspiring developers through hands-on projects and best practice sessions',
      'Collaborated on resolving technical challenges within the training framework.',
      'Trained hundreds of beneficiaries, significantly elevating technical proficiency',
      'Enhanced the overall quality and effectiveness of training modules.'
    ]
  },
  {
    title: 'Frontend Developer',
    company_name: 'HNG (Intern)',
    icon: hng,
    iconBg: '#383E56',
    date: 'Oct 2023 - Dec 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Frontend Developer',
    company_name: 'HiDigitals',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Dec 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Spark Card (FinTech)',
    description:
      'Take control of your finances with a sleek, secure card. Spend smarter, earn cashback, and manage your money across accounts—all from one powerful platform.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: fintech,
    source_code_link: 'https://fintecc.netlify.app/'
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/Harkanni/Memories'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  },
  // PERSONAL PROJECTS ONLY
  {
    name: 'AI Summarizer',
    description:
      "Simplify your reading with 🌟 Summize 📚, an innovative open-source project powered by OpenAI's GPT-4 🤖 article summarizer that transforms lengthy articles into ✨ clear and concise summaries ✂️📝.",
    tags: [
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'vite',
        color: 'pink-text-gradient'
      },
      {
        name: 'css',
        color: 'green-text-gradient'
      }
    ],
    image: aisummarizer,
    source_code_link: 'https://github.com/Harkanni/Summize'
  },
  {
    name: 'Memories Social',
    description:
      "A user-friendly social media application that allows users to post interesting events that happened in their lives. Crafted using React ⚛️, Node.js 🌐, Express 🚀, and MongoDB 🍃, it's all about reliving memories! 🌟📆",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: memories,
    source_code_link: 'https://github.com/Harkanni/Memories'
  },
  {
    name: 'Threads Social',
    description:
      "🧵 'Threads Social' 🌟: A user-friendly social media application that lets you share the most exciting life events. Built with Next.js 13, MongoDB, and Tailwind CSS. Join, post, and explore unforgettable experiences! 🚀📸 #ThreadsSocial",
    tags: [
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'next.js',
        color: 'pink-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      }
    ],
    image: threadsApp,
    source_code_link: 'https://github.com/Harkanni/threads-app'
  }
];

export { services, technologies, experiences, testimonials, projects };
