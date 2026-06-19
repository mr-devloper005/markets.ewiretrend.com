'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t-4 border-[var(--slot4-accent)] bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="min-w-0">
            <Link href="/" className="hub-logo text-5xl font-black text-white sm:text-6xl">{SITE_CONFIG.name}</Link>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[var(--slot4-accent)] px-8 py-3 text-lg font-black text-white transition hover:bg-[var(--slot4-warm-accent)]">Contact Us</Link>
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/66">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/88 lg:justify-end">
            <Link href="/about" className="transition hover:text-[var(--slot4-yellow)]">About</Link>
            <Link href="/contact" className="transition hover:text-[var(--slot4-yellow)]">Contact</Link>
            <Link href="/search" className="transition hover:text-[var(--slot4-yellow)]">Search</Link>
            {session ? (
              <>
                <Link href="/create" className="transition hover:text-[var(--slot4-yellow)]">Publish</Link>
                <button onClick={logout} className="transition hover:text-[var(--slot4-yellow)]">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="transition hover:text-[var(--slot4-yellow)]">Login</Link>
                <Link href="/signup" className="transition hover:text-[var(--slot4-yellow)]">Create Account</Link>
              </>
            )}
          </div>
        </div>
        <div className="mt-14 border-t border-white/14 pt-7">
          <form action="/signup" className="flex max-w-xl overflow-hidden rounded-full border border-white/28 bg-white/8">
            <Mail className="ml-5 mt-4 h-4 w-4 text-white/55" />
            <input name="email" type="email" placeholder="Email for media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-white/45" />
            <button className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-5 text-sm font-black">Subscribe <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/14 px-4 py-5 text-center text-[11px] font-bold text-white/55">© {year} {SITE_CONFIG.name}. Media updates and public information.</div>
    </footer>
  )
}
