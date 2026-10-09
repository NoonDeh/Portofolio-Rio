import { Router } from 'express'
import { createContact, listContacts } from '../controllers/contactController.js'

const router = Router()

router.post('/', createContact)
router.get('/', listContacts)

export default router
