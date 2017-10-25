const express = require('express');

const router = express.Router();

router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/items', require('./items'));
router.use('/abilities', require('./abilities'));
router.use('/defenses', require('./defenses'));
router.use('/sales', require('./sales'));
router.use('/skills', require('./skills'));
router.use('/buffs', require('./buffs'));
router.use('/feats', require('./feats'));
router.use('/classFeatures', require('./classFeatures'));
router.use('/history', require('./history'));

module.exports = router;
