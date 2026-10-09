import { MessageCircle, Send, Mail } from 'lucide-react'

/**
 * Contact channels data.
 * IMPORTANT: replace every placeholder value below with your real information.
 * Use "" for `url` if a channel is not ready yet (the card becomes non-clickable).
 */
export const contacts = [
  {
    name: 'Discord',
    value: 'NoonD26#1748',
    url: 'https://discord.com/users/931853142960779304',
    icon: MessageCircle,
  },
  {
    name: 'Telegram',
    value: '@NoonDeh',
    url: 'https://t.me/NoonDeh',
    icon: Send,
  },
  {
    name: 'Gmail',
    value: 'rio.ivander44@smk.belajar.id',
    url: 'mailto:rio.ivander44@smk.belajar.id',
    icon: Mail,
  },
]

/** Used by the footer. Empty string = link is not rendered. */
export const githubUrl = ''
