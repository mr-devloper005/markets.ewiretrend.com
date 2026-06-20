'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className="bg-[var(--slot4-aqua)]">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-warm-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[var(--slot4-warm-accent)] pl-5 text-base font-medium leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-14">
          <aside className="grid gap-4 lg:self-start">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-[8px] bg-white p-6 shadow-[0_12px_30px_rgba(6,31,68,.08)] sm:p-7">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-[var(--slot4-warm-accent)]">0{index + 1}</span></div>
                <h2 className="mt-6 text-2xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-[8px] bg-white p-6 shadow-[0_18px_50px_rgba(6,31,68,.1)] sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-warm-accent)]">Send a message</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
