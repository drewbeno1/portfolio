import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech',
  description: 'The tech stack for work, development, and productivity that I enjoy and recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools for work, development, and productivity that I enjoy."
      intro="Part of my growing interest in software has been fueled by being able to customize my toolbelt and workspace to be as efficient as possible. Here are some of the tools I enjoy using."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="15” MacBook Air, M2, 24GB RAM">
            2023
          </Tool>
          <Tool title="Keychron K3 Ultra-slim Wireless Mechanical Keyboard">
            I would highly recommend keychron for quality mechanical keyboards and cool artisan keycaps.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Dev Stack">
          <Tool title="Neovim">
            I am on the vim learning path as we speak and I am loving it. Here is my current lua config: https://github.com/drewbeno1/nvim-config
          </Tool>
          <Tool title="Django">
            My background in tech began with Python business ETLs. Naturally, Django was my first step into the world of web app development. It is a great framework that launched me into software and it is the backend framework that I most enjoy.
          </Tool>
          <Tool title="Vue.js">
            There are too many JS Frameworks to count. My go-to favorite is Vue.js, but i am of course a fan of react as well. I try not to limit myself to any one framework for frontend work, but for now, Vue.js would be my highest recommendation.
          </Tool>
          <Tool title="TypeScript">
            Type safety has been a huge help to my frontend development experience, and makes Javascript much more enjoyable to write.
          </Tool>
          <Tool title="Tailwind CSS">
            I struggled with frontend dev when I was first learning, but tailwind completely boosted my css knowlede and efficiency and now I enjoy the frontend design aspect of the web.
          </Tool>
          <Tool title="Vite">
            Vite is my go-to build tool.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            Notion has changed the way I note take, organize my work, and collaborate with my teams.
          </Tool>
          <Tool title="Discord">
            Slack is great for work, but i like to join the discords of my favorite tech tools and keep track of any new announcements!
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
