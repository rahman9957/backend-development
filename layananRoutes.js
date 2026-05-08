const express = require('express');
const router = express.Router();
const { 
    getAllLayanan, 
    getLayananById, 
    createLayanan, 
    updateLayanan, 
    deleteLayanan 
} = require('../controllers/layananController');

router.get('/', getAllLayanan);
router.get('/:id', getLayananById);
router.post('/', createLayanan);
router.put('/:id', updateLayanan);
router.delete('/:id', deleteLayanan);

module.exports = router;
