const express = require('express');

const router = express.Router();

const { authCheck, adminCheck } = require('../middlewares/auth');
const { orders, orderStatus } = require('../controllers/admin');

router.get('/admin/orders', authCheck, adminCheck, orders);
router.get('/admin/orderStatus', authCheck, adminCheck, orderStatus);

module.exports = router;
