import { Router } from 'express'
import picturesController from '../controllers/pictures.controller'
import voteController from '../controllers/vote.controller'
import tokenController from '../controllers/token.controller'


const router = Router()

router.post('/token', tokenController.check)
router.get('/pictures', picturesController.getAll)
router.post('/votes', voteController.vote)

export default router