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
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="Part of my growing interest in software has been fueled by being able to customize my toolbelt and workspace to be as efficient as possible. Here are some of the tools I enjoy using."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="15” MacBook Air, M2, 24GB RAM (2023)">
            I am a sucker for a quality mac!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tech Stack">
          <Tool title="Django">
            My background in tech began with Python business uses. Naturally, Django was my first step into the world of web development. It is a great framework that launched me into software!
          </Tool>
          <Tool title="JavaScript">
            There are too many JS Frameworks to count. My go-to favorite is Vue.js, but i am of course a fan of react as well, which I used to create this portfolio to give myself more practice with. 
          </Tool>
          <Tool title="Tailwind CSS">
            I despised frontend dev when I was first learning, but tailwind completely boosted my css knowlede and effeciency and now I enjoy the frontend design aspect of the web.
          </Tool>
          <Tool title="GOLang">
            Gophers unite!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            Notion has changed the way I not take, organize my work, and collaborate with my team.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
