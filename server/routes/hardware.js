const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const Hardware = require('../models/hardware')

router.get('/', async (req, res) => {
  try {
    const hardware = await Hardware.find();
    if (!hardware) throw Error('No items');

    res.status(200).json(hardware);
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

// saving table details to the database
router.post('/', auth, async (req, res) => {
  const newHardware = new Hardware({
    tableHardware: [{
      departmentName: req.body.departmentName,
      listOfAssets: req.body.listOfAssets,
      uniqueId: req.body.uniqueId
    }]
  });

  try {
    const hardware = await newHardware.save();
    if (!hardware) throw Error('Something went wrong with table');

    res.status(200).json(hardware);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
})

module.exports = router; 