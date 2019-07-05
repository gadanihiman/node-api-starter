import express from 'express';
import { version } from '../../package.json';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time Request for index route: ', Date.now());
  next();
});

// define index routes
router.get('/', (req, res) => res.json({ status: 'SUCCESS', version }));

export default router;
