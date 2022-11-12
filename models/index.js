// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

//My thinking for the next could statements below, products will have may tags, so it will relate to the tags via the producttag. 
//Then tags can be applied to multiple products so it will relate to the products thorugh the producttag

// Products belongToMany Tags (through ProductTag) //Not sure this is right. Need to come back to it possibly. 
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
})

// Tags belongToMany Products (through ProductTag) //Not sure this is right. Need to come back to it possibly.
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
