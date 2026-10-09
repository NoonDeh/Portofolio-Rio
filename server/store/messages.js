/**
 * In-memory store for submitted messages.
 * Replace with a real database later if needed (see README).
 * No credentials are stored here.
 */
const messages = []

export function saveMessage(message) {
  const entry = {
    id: Date.now(),
    receivedAt: new Date().toISOString(),
    ...message,
  }
  messages.push(entry)
  return entry
}

export function getMessages() {
  return messages
}
