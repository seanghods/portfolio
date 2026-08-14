import { useState } from 'react'
import { Check, Mail } from 'lucide-react'

const EMAIL = 'seanxghods@gmail.com'

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <button
      onClick={copyEmail}
      className='flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-2 text-sm font-medium text-zinc-300 transition-colors duration-150 hover:border-zinc-700 hover:text-zinc-100'
    >
      {copied ? (
        <>
          <Check size={16} className='text-emerald-400' />
          Copied!
        </>
      ) : (
        <>
          <Mail size={16} />
          Email
        </>
      )}
    </button>
  )
}
