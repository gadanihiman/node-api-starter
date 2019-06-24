import express from 'express';
import * as userController from '../controllers/userControllers';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time Request for users v1 routes: ', Date.now());
  next();
});

// define users routes
router.get('/v1/users', userController.getAllUsers);

export default router;
