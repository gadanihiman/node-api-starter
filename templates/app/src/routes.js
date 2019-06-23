import express from 'express';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time Request: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Hello World!!')
})

// route.get('/', productController.getProductPlan);

export default router;