import express from 'express';
import * as userController from '../controllers/userControllers';
import logger from '../../utils/logger';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  logger.info(`Time Request for users v1 routes: ${Date.now()}`);
  next();
});

// define users routes
// v1 is the version of this users api
router.get('/v1/users', userController.getAllUsers);

export default router;
