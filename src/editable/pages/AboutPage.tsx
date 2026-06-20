import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className="bg-[var(--slot4-aqua)]">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-warm-accent)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Independent media, built for clear stories.
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-14">
          <article className="rounded-[8px] bg-white p-7 shadow-[0_18px_50px_rgba(6,31,68,.1)] sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--slot4-warm-accent)]">About {SITE_CONFIG.name}</p>
            <p className="mt-6 text-3xl font-black leading-tight sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-4 lg:self-start">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="rounded-[8px] bg-[#f1f3f5] p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-warm-accent)]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="bg-[var(--slot4-warm)]">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Read the stories shaping the conversation.</h2>
            <Link href="/search" className="inline-flex w-fit rounded-full bg-[var(--slot4-accent)] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[var(--slot4-warm-accent)]">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
