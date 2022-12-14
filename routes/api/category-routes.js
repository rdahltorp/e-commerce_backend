const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(catData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
   const catData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }]
  })
  res.status(200).json(catData)
} catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCatData = await Category.create(req.body);
    res.status(200).json(newCatData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updateCat)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const delCatData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(delCatData)

    if (!delCatData) {
      res.status(404).json({message: 'Sorry, it looks like that category doesnt exist. Please try again.'})
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
