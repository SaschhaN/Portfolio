import { CheckCircle2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { profile } from '../data/content'
import { useLanguage } from '../context/language'
import { LinkedInIcon } from './icons'
import { Section } from './Section'

type Status = 'idle' | 'sending' | 'success' | 'error'

const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-accent-400 dark:focus:ring-accent-400/20'

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) return setError(t.contact.required)
    if (!emailPattern.test(email)) return setError(t.contact.invalidEmail)
    if (!accessKey) return setError(t.contact.notConfigured)

    setError(null)
    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio: message from ${name}`,
          from_name: 'Portfolio website',
          name,
          email,
          message,
          botcheck: data.get('botcheck') ?? '',
        }),
      })
      const result = (await response.json()) as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError(t.contact.error)
    }
  }

  return (
    <Section id="contact" title={t.sections.contact}>
      <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
        <div>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{t.contact.intro}</p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-accent-700 dark:text-zinc-300 dark:hover:text-accent-300"
          >
            <LinkedInIcon size={18} /> linkedin.com/in/sascha-niederhauser
          </a>
        </div>

        {status === 'success' ? (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200"
          >
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} aria-hidden />
            <p>{t.contact.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">{t.contact.name}</span>
                <input name="name" type="text" autoComplete="name" required className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">{t.contact.email}</span>
                <input name="email" type="email" autoComplete="email" required className={inputClass} />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">{t.contact.message}</span>
              <textarea name="message" rows={5} required className={`${inputClass} resize-y`} />
            </label>

            {/* Honeypot: hidden from people, bots fill it in and get filtered out by Web3Forms */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            {error && (
              <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 disabled:cursor-wait disabled:opacity-70 dark:bg-accent-500 dark:hover:bg-accent-400 dark:hover:text-zinc-950"
            >
              <Send size={16} aria-hidden />
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </button>
          </form>
        )}
      </div>
    </Section>
  )
}
