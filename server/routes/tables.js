const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const Item = require('../models/Tables')

router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    if (!items) throw Error('No items');

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
})

// saving table details to the database
router.post('/', auth, async (req, res) => {
  const newItem = new Item({
    tableContent: [{
      departmentName: req.body.departmentName,
      listOfAssets: req.body.listOfAssets,
      uniqueId: req.body.uniqueId
    }]
  });

  // try {
  const item = await newItem.save();
  if (!item) throw Error('Something went wrong with table');

  res.status(200).json(item);
  // } catch (e) {
  res.status(400).json({ msg: e.message });
  // }
})

module.exports = router; 