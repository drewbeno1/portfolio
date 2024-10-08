import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

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


export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer and outdoor enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Drew, a software engineer based in south central Florida, USA. I have had the joy of focusing on agricultural technology.
            I’m passionate about the outdoors, and you can often find me hunting, fishing, or spending time with my wife and dog! <br />
            Reach me at: benodrew12@gmail.com
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/dataBaseBSB" aria-label="Follow on X" icon={XIcon} target="_blank"/>
            <SocialLink
              href="https://github.com/drewbeno1"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/drew-beno-474bab1b5/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
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
