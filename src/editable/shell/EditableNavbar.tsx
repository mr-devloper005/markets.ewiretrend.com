'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe2, Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  const primaryLinks = [
    { label: 'Search', href: '/search' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]
  return (
    <header className="sticky top-0 z-50 border-t border-[var(--slot4-warm-accent)]/30 bg-white text-[var(--slot4-page-text)] shadow-[0_2px_14px_rgba(6,31,68,.08)]">
      <div className="mx-auto flex min-h-[74px] max-w-[1180px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-8">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--slot4-page-text)]/20 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="hub-logo max-w-[48vw] truncate text-3xl font-black text-[var(--slot4-page-text)] sm:text-4xl">
            {SITE_CONFIG.name}
          </Link>
          <nav className="hidden items-center gap-8 text-[14px] font-black lg:flex">
            {primaryLinks.map((item) => (
              <Link key={item.label} href={item.href} className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--slot4-page-text)] transition hover:text-[var(--slot4-accent)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-3">
          {session ? (
            <>
              <Link href="/create" className="hidden rounded-full border border-[var(--slot4-page-text)] px-7 py-3 text-sm font-bold sm:block">Create</Link>
              <button type="button" onClick={logout} className="hidden rounded-full border border-[var(--slot4-page-text)] px-7 py-3 text-sm font-bold sm:block">Logout</button>
            </>
          ) : <Link href="/login" className="hidden rounded-full border border-[var(--slot4-page-text)] px-7 py-3 text-sm font-bold sm:block">Login</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[var(--slot4-accent)] px-5 py-3 text-sm font-black text-white transition hover:bg-[var(--slot4-warm-accent)] sm:px-8">
            {session ? 'Publish' : 'Create Account'}
          </Link>
          <Link href="/search" className="hidden items-center gap-1 text-sm font-bold lg:inline-flex"><Globe2 className="h-4 w-4" /> EN</Link>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--slot4-page-text)]/10 bg-white px-4 py-4 lg:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="mb-4 block text-center text-3xl font-black text-[var(--slot4-accent)]">Marketing Hub</Link>
          <div className="grid gap-2">
            {[...primaryLinks, { label: 'Search', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-full bg-[#f5f7f8] px-4 py-3 text-sm font-black">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
