import express from 'express'
import cors from 'cors'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 4000

// CORS: only allow the Vite dev origin (plus same-origin deployments)
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  }),
)

app.use(express.json({ limit: '100kb' }))

// --- Routes ----------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)

app.use((req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' })
})

// Handle malformed JSON (and other body-parser errors) with a clean JSON response
app.use((err, req, res, next) => {
  if (err?.type === 'entity.parse.failed') {
    return res.status(400).json({ ok: false, error: 'Invalid JSON payload' })
  }
  console.error(err)
  if (res.headersSent) return next(err)
  return res.status(500).json({ ok: false, error: 'Internal server error' })
})

// --- Start ------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`)
})
