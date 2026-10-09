import { saveMessage, getMessages } from '../store/messages.js'

/**
 * Simple validation for the contact payload.
 * Keep this in sync with the frontend validation in ContactForm.jsx.
 */
function validateContact({ name, email, message }) {
  const errors = {}
  if (!name || !name.trim()) errors.name = 'Name is required.'
  if (!email || !email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Invalid email address.'
  }
  if (!message || !message.trim()) errors.message = 'Message is required.'
  return errors
}

/**
 * POST /api/contact
 * Validates and stores the submitted message (in-memory for now).
 */
export function createContact(req, res) {
  const body = req.body || {}
  const errors = validateContact(body)

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors })
  }

  // In-memory storage. To persist to a database or send email,
  // replace this block — see the README "Configure Contact Form" section.
  const entry = saveMessage({
    name: body.name.trim(),
    email: body.email.trim(),
    message: body.message.trim(),
  })

  console.log('[contact] received message id=%s', entry.id)
  return res.status(201).json({ ok: true, id: entry.id })
}

/**
 * GET /api/contact
 * Development helper: list messages received since the server started.
 */
export function listContacts(req, res) {
  const messages = getMessages()
  res.json({ ok: true, count: messages.length, messages })
}
