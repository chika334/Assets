const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const Software = require('../models/software')

router.get('/', async (req, res) => {
  try {
    const software = await Software.find();
    if (!software) throw Error('No items');

    res.status(200).json(software);
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

// saving table details to the database
router.post('/', auth, async (req, res) => {
  const newSoftware = new Software({
    tableSoftware: [{
      departmentName: req.body.departmentName,
      listOfAssets: req.body.listOfAssets,
      uniqueId: req.body.uniqueId
    }]
  });

  try {
    const software = await newSoftware.save();
    if (!software) throw Error('Something went wrong with table');

    res.status(200).json(software);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
})

module.exports = router; 