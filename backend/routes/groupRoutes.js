const express = require('express');
const router = express.Router();
const { createGroupBuy, joinGroupBuy, getGroupBuy } = require('../controllers/groupController');

router.post('/', createGroupBuy);
router.post('/join/:referralCode', joinGroupBuy);
router.get('/:referralCode', getGroupBuy);

module.exports = router;
