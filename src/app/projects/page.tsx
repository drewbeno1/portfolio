import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import calendar from '@/images/logos/cal.jpg'
import IncLogo from '@/images/logos/IncLogo.png'
import databaselogo from '@/images/logos/dataBase-logo-white.png'
import favicon from '@/app/favicon.ico'
import summit from '@/images/logos/SummitWLogo.png'

const appProjects = [
  {
    name: 'dataBase Sabermetrics',
    description:
      'Co-Founder: Redefined Baseball Development. Pitch tracking tool that includes advanced sabermetrics. Solo Developer on web app & website.',
    link: { href: 'http://dbsabermetrics.com', label: 'dbsabermetrics.com' },
    logo: databaselogo,
  },
  {
    name: 'Wedgworth ERP',
    description:
      'Team project: Complete Web-based Business ERP for wedgworth, the biggest supplier of fertilizer in the state of Florida. Used for Everything from quoting to plant operating.',
    link: { href: 'https://wedgworth.com', label: 'Company Website (ERP is private)' },
    logo: IncLogo,
  },
  {
    name: 'Yeardle.io',
    description:
      '"Guess the year the photo was taken". A wordle-style game for my family to play in their wordle-style games groupchat.',
    link: { href: 'https://yeardle.io', label: 'yeardle.io' },
    logo: calendar,
  },
]

const siteProjects = [
  {
    name: 'dataBase Sabermetrics',
    description:
      'Website for dataBase Sabermetrics',
    link: { href: 'http://dbsabermetrics.com', label: 'dbsabermetrics.com' },
    logo: databaselogo,
  },
  {
    name: 'Summit Nutrients',
    description:
      'Maintaining the website for Summit Nutrients, a partnered company with Wedgworth Inc.',
    link: { href: 'https://summitnutrients.com', label: 'summitnutrients.com' },
    logo: summit,
  },
  {
    name: 'Mia Joi Portfolio',
    description:
      'Portfolio for my florist sister. Vite, vue, tailwind.',
    link: { href: 'https://miajoisflorals.com', label: 'Here' },
    logo: favicon,
  },
  {
    name: 'This Portfolio',
    description:
      'This portfolio, built with Tailwind, next.js, and react.',
    link: { href: '#', label: 'Here' },
    logo: favicon,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'The Stuff I have built',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Stuff I Build"
      intro="These are my recent projects, some personal and some for work. Reach out if you want to know more about them!"
    >
      <h2 className="text-3xl mb-4 font-semibold text-zinc-800 dark:text-zinc-100">
        Applications
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {appProjects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none"/>
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>

      <h2 className="text-3xl mt-12 mb-4 font-semibold text-zinc-800 dark:text-zinc-100">
        Websites
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {siteProjects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none"/>
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
