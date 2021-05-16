const router = require('express').Router();
const verify = require('../utils/verify');
const ttydController = require('../controllers/ttydController');

/* Route Middleware*/
router.route('/login').post(ttydController.validateUser);

router.route('/:token').get(verify, ttydController.createContainer);

module.exports = router;
