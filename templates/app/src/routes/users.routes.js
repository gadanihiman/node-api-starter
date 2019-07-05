import express from 'express';
import * as userController from '../controllers/userControllers';
import logger from '../../utils/logger';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  logger.info(`Time Request for users v1 routes: ${Date.now()}`);
  next();
});

/**
 * define all users routes
 */

// routes /v1/users for get list all users
router.get('', userController.getAllUsers);

export default router;
