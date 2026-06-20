import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const trending = posts.slice(1, 6)
  const heroTitle = lead?.title || pagesContent.home.hero.title.join(' ') || 'Media distribution stories for modern teams.'

  return (
    <section className="bg-[var(--slot4-aqua)]">
      <div className={`${dc.shell.section} py-10 sm:py-14 lg:py-16`}>
        {!lead ? (
          <div className="grid min-h-[420px] items-center rounded-[8px] bg-white p-8 shadow-[0_16px_50px_rgba(6,31,68,.08)] sm:p-12 lg:grid-cols-[1fr_.55fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-warm-accent)]">{pagesContent.home.hero.badge}</p>
              <h1 className={`${dc.type.heroTitle} mt-5 max-w-5xl text-[var(--slot4-page-text)]`}>{heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
              <Link href={primaryRoute} className={`${dc.button.primary} mt-8`}>Open Marketing Hub <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group block min-w-0">
              <p className="text-sm font-black uppercase tracking-[.18em] text-[var(--slot4-page-text)]/80">{getEditableCategory(lead)}</p>
              <h1 className="mt-7 max-w-2xl text-4xl font-black leading-[1.08] text-[var(--slot4-page-text)] sm:text-5xl lg:text-6xl">{heroTitle}</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--slot4-muted-text)]">{getEditableExcerpt(lead, 210)}</p>
              <p className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[var(--slot4-accent)]">Read the feature <ArrowRight className="h-4 w-4" /></p>
            </Link>

            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group relative min-h-[340px] overflow-hidden rounded-[8px] bg-[var(--slot4-media-bg)] shadow-[0_24px_70px_rgba(6,31,68,.12)] sm:min-h-[430px]">
              <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/50" />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[var(--slot4-accent)]">Featured</div>
            </Link>
          </div>
        )}
        {trending.length ? (
          <div className="mt-12 grid gap-4 border-t border-[var(--slot4-page-text)]/10 pt-8 md:grid-cols-2 lg:grid-cols-5">
            {trending.map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group rounded-[8px] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(6,31,68,.1)]">
                <div className="text-[10px] font-black uppercase tracking-[.14em] text-[var(--slot4-warm-accent)]">0{index + 1}</div>
                <h2 className="mt-3 line-clamp-3 text-lg font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 90)}</p>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(5, 13).length ? posts.slice(5, 13) : posts
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex items-end justify-between gap-6 border-b border-[var(--slot4-page-text)]/12 pb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-warm-accent)]">The daily edit</p>
            <h2 className="mt-2 text-4xl font-black">Latest stories</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-sm font-black text-[var(--slot4-accent)] sm:inline-flex">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
        <div className={`${dc.layout.rail} mt-6`}>
          {railPosts.map((post, index) => <RailPostCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[8] || posts[0]
  const portraits = posts.slice(9, 14).length ? posts.slice(9, 14) : posts.slice(1, 6)
  if (!feature) return null
  return (
    <section className="bg-[var(--slot4-warm)] text-[var(--slot4-page-text)]">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="flex items-end justify-between border-b border-[var(--slot4-page-text)]/12 pb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-warm-accent)]">Essential reading</p>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">Features</h2>
          </div>
          <span className="hidden text-lg font-black text-[var(--slot4-muted-text)] sm:block">Stories worth your time.</span>
        </div>
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.55fr_.72fr_.72fr_.72fr]">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[520px] overflow-hidden rounded-[8px] bg-black lg:row-span-2">
            <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,.88))]" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-white/70">Cover feature</p>
              <h3 className="mt-3 text-4xl font-black leading-tight">{feature.title}</h3>
            </div>
          </Link>
          {portraits.slice(0, 5).map((post) => (
            <Link key={post.id} href={postHref(primaryTask, post, primaryRoute)} className="group overflow-hidden rounded-[8px] bg-black text-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,.88))]" />
                <h3 className="absolute inset-x-0 bottom-0 p-4 text-lg font-black leading-tight tracking-[-.035em]">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const lead = source[0] || posts[0]
  const briefs = source.slice(1, 7)
  if (!lead) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <div className="border-b border-[var(--slot4-page-text)]/12 pb-4">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-warm-accent)]">From the hub</p>
              <h2 className="mt-2 text-4xl font-black">More to discover</h2>
            </div>
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group mt-6 grid overflow-hidden rounded-[8px] bg-[var(--slot4-aqua)] shadow-[0_16px_50px_rgba(6,31,68,.08)] sm:grid-cols-[1.1fr_.9fr]">
              <div className="relative min-h-[330px] overflow-hidden bg-[var(--slot4-media-bg)]">
                <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7 text-[var(--slot4-page-text)] sm:p-9">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-warm-accent)]">Editor&apos;s pick</p>
                <h3 className="mt-4 text-4xl font-black leading-tight">{lead.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(lead, 180)}</p>
              </div>
            </Link>
          </div>
          <aside>
            <div className="border-b border-[var(--slot4-page-text)]/12 pb-4">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-warm-accent)]">Quick reads</p>
              <h2 className="mt-2 text-4xl font-black">The briefing</h2>
            </div>
            <div className="mt-2">
              {briefs.map((post, index) => <CompactIndexCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </aside>
        </div>
        <form action="/search" className="mt-14 grid rounded-[8px] bg-[#f1f3f5] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
          <div>
            <h3 className="text-3xl font-black">Search the full archive</h3>
            <p className="mt-2 text-sm text-[var(--slot4-muted-text)]">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="mt-5 flex overflow-hidden rounded-full bg-white shadow-sm sm:mt-0 sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4" />
            <input name="q" placeholder="Search stories" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="bg-[var(--slot4-accent)] px-5 text-sm font-black text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-warm)] text-[var(--slot4-page-text)]">
      <div className={`${dc.shell.section} grid gap-5 py-14 lg:grid-cols-2`}>
        <div className="rounded-[8px] bg-[var(--slot4-accent)] px-6 py-14 text-white sm:px-10 lg:py-20">
          <p className="text-[10px] font-black uppercase tracking-[.2em] text-white/75">Stay informed</p>
          <h2 className="mt-4 max-w-xl text-5xl font-black leading-tight">The stories shaping what comes next.</h2>
        </div>
        <div className="flex flex-col justify-center rounded-[8px] bg-white px-6 py-14 shadow-[0_16px_50px_rgba(6,31,68,.08)] sm:px-10 lg:py-20">
          <p className="max-w-xl text-lg leading-8 text-[var(--slot4-muted-text)]">Fresh releases, media updates, public perspectives, and useful distribution ideas in one focused publication.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={dc.button.accent}>Send a note</Link>
            <Link href="/signup" className={dc.button.secondary}>Join the readership</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
