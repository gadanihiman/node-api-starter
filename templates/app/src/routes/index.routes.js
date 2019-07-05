import express from 'express';
import users from './users.routes';
import { version } from '../../package.json';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time Request for index route: ', Date.now());
  next();
});

/**
 * Register all available routes
 */

// define index/root routes
router.get('/', (req, res) => res.json({ status: 'SUCCESS', version }));

// Users v1 route
router.use('/v1/users', users);

export default router;
