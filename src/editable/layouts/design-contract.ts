import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#ffffff',
  '--slot4-page-text': '#061f44',
  '--slot4-panel-bg': '#dff8f4',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#466077',
  '--slot4-soft-muted-text': '#6f8091',
  '--slot4-accent': '#3445e8',
  '--slot4-accent-fill': '#3445e8',
  '--slot4-accent-soft': '#fff0d4',
  '--slot4-warm-accent': '#ff6a1c',
  '--slot4-yellow': '#ffda62',
  '--slot4-peach': '#ffae56',
  '--slot4-pink': '#f5788b',
  '--slot4-aqua': '#d9fbf6',
  '--slot4-dark-bg': '#082b59',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e9eef3',
  '--slot4-cream': '#fff7e6',
  '--slot4-warm': '#fffaf2',
  '--slot4-lavender': '#f5788b',
  '--slot4-gray': '#eef2f5',
  '--slot4-body-gradient': 'linear-gradient(180deg, #ffffff 0%, #fffaf2 44%, #dff8f4 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/15',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_12px_30px_rgba(6,31,68,0.08)]',
  shadowStrong: 'shadow-[0_24px_70px_rgba(6,31,68,0.16)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[250px] shrink-0 snap-start sm:w-[286px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.18em]',
    heroTitle: 'text-4xl font-black leading-[1.02] sm:text-6xl lg:text-[4.9rem]',
    sectionTitle: 'text-3xl font-black leading-tight sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-warm-accent)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-[var(--slot4-page-text)]/30 bg-white px-7 py-3.5 text-sm font-black text-[var(--slot4-page-text)] transition hover:-translate-y-0.5 hover:bg-[var(--slot4-page-text)] hover:text-white`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-warm-accent)] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-accent-fill)]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(6,31,68,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a clean marketing-hub masthead, centered topic navigation, pale feature bands, and image-led magazine grids.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with broad story columns and a focused long-form article measure.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
