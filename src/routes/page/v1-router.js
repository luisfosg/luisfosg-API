import { Router } from 'express';

import userRouter from '../api/v1/user-router';
import proyectRouter from '../api/v1/proyects-router';
import contactRouter from '../api/v1/contact-router';
import imageRouter from '../api/v1/images-router';
import noteRouter from '../api/v1/notes-router';
import encryptRouter from '../api/v1/encrypt-router';

const router = Router();

router.use( '/proyect', proyectRouter );
router.use( '/contact', contactRouter );
router.use( '/image', imageRouter );
router.use( '/note', noteRouter );
router.use( '/text', encryptRouter );
router.use( '/', userRouter );

module.exports = router;
