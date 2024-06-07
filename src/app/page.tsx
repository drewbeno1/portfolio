import Link from 'next/link'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


// interface Role {
//   company: string
//   title: string
//   logo: ImageProps['src']
//   start: string | { label: string; dateTime: string }
//   end: string | { label: string; dateTime: string }
// }

// function Role({ role }: { role: Role }) {
//   let startLabel =
//     typeof role.start === 'string' ? role.start : role.start.label
//   let startDate =
//     typeof role.start === 'string' ? role.start : role.start.dateTime

//   let endLabel = typeof role.end === 'string' ? role.end : role.end.label
//   let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

//   return (
//     <li className="flex gap-4">
//       <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//         <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
//       </div>
//       <dl className="flex flex-auto flex-wrap gap-x-2">
//         <dt className="sr-only">Company</dt>
//         <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
//           {role.company}
//         </dd>
//         <dt className="sr-only">Role</dt>
//         <dd className="text-xs text-zinc-500 dark:text-zinc-400">
//           {role.title}
//         </dd>
//         <dt className="sr-only">Date</dt>
//         <dd
//           className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
//           aria-label={`${startLabel} until ${endLabel}`}
//         >
//           <time dateTime={startDate}>{startLabel}</time>{' '}
//           <span aria-hidden="true">—</span>{' '}
//           <time dateTime={endDate}>{endLabel}</time>
//         </dd>
//       </dl>
//     </li>
//   )
// }

// function Resume() {
//   let resume: Array<Role> = [
//     {
//       company: 'Wedgworth Inc.',
//       title: 'Software & Data Engineer',
//       logo: ,
//       start: '2023',
//       end: {
//         label: 'Present',
//         dateTime: new Date().getFullYear().toString(),
//       },
//     },
//     {
//       company: 'Tyson Foods',
//       title: 'Data Analyst',
//       logo: ,
//       start: '2023',
//       end: '2023',
//     },

//   ]

//   return (
//     <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <BriefcaseIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Work</span>
//       </h2>
//       <ol className="mt-6 space-y-4">
//         {resume.map((role, roleIndex) => (
//           <Role key={roleIndex} role={role} />
//         ))}
//       </ol>
//       <Button href="#" variant="secondary" className="group mt-6 w-full">
//         Download CV
//         <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
//       </Button>
//     </div>
//   )
// }

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Developer, founder, and outdoor enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Drew, a software engineer based in south central Florida, USA. I enjoy building things, whether it’s websites, applications, or companies. 
            I’m passionate about the outdoors, and you can often find me hunting, fishing, or spending time with my wife and dog! <br />
            Reach me at: benodrew12@gmail.com
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/dataBaseBSB" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://github.com/drewbeno1"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/drew-beno-474bab1b5/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12 md:mt-14 flex justify-center">
        <button className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded shadow-xl">
          <Link href="/projects">Checkout my work</Link>
        </button>
      </Container>
    </>
  )
}
