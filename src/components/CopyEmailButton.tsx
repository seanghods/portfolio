import { useState } from 'react'
import { Check, Mail } from 'lucide-react'
import { pillButton } from '@/styles.ts'

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
    <button onClick={copyEmail} className={pillButton}>
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
