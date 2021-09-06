export const productsList = [
  {
    id: 1,
    categoryId: 'cakes',
    name: 'Red Velvet',
    amount: '32',
    img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879501/SFL/assets/Red-Velvet-Cake-8_h3p6mr.jpg',
  },
  {
    id: 2,
    categoryId: 'cakes',
    name: 'Black Forest',
    amount: '30',
    img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879496/SFL/assets/blackforest_jsbzbs.jpg',
  },
  {
    id: 3,
    categoryId: 'cakes',
    name: 'Chocolate fudge cake',
    amount: '36',
    img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879498/SFL/assets/Choc-Fudge-Cake-b2d1909_m6aoom.jpg',
  },
  {
    id: 4,
    categoryId: 'muffins',
    name: 'Blue berry muffin',
    amount: '10',
    img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879504/SFL/assets/Bakery-Style-Lemon-Blueberry-Muffins-WS-Thumbnail_qzelbw.webp',
  },
  {
    id: 5,
    categoryId: 'muffins',
    name: 'Chocolate fudge cake',
    amount: '45',
    img: 'https://res.cloudinary.com/alexoc/image/upload/v1630879497/SFL/assets/Strawberry-Jam-Brambles_zmwcvk.webp',
  },
]

export const categoriesList = [
  { id: 'cakes', name: 'Specialty Pastries & Baked Goods' },
  { id: 'muffins', name: 'Muffins & Bread' },
]

export const apiHelperFunctions = {
  getCategoryById: (id) => {
    return categoriesList.filter((category) => {
      return category.id == id
    })
  },
  categoryProductsFilterd: (id) => {
    return productsList.filter((product) => {
      return product.categoryId == id
    })
  },
}

// https://res.cloudinary.com/alexoc/image/upload/v1630879504/SFL/assets/Bakery-Style-Lemon-Blueberry-Muffins-WS-Thumbnail_qzelbw.webp
// https://res.cloudinary.com/alexoc/image/upload/v1630879497/SFL/assets/Strawberry-Jam-Brambles_zmwcvk.webp
// https://res.cloudinary.com/alexoc/image/upload/v1630879501/SFL/assets/Red-Velvet-Cake-8_h3p6mr.jpg
// https://res.cloudinary.com/alexoc/image/upload/v1630879498/SFL/assets/Choc-Fudge-Cake-b2d1909_m6aoom.jpg
// https://res.cloudinary.com/alexoc/image/upload/v1630879498/SFL/assets/Red-Velvet-Cake-with-Fruit-960x960-c-default_s8oagi.jpg
// https://res.cloudinary.com/alexoc/image/upload/v1630879496/SFL/assets/blackforest_jsbzbs.jpg
// https://res.cloudinary.com/alexoc/image/upload/v1630879496/SFL/assets/blackforest_jsbzbs.jpg
// https://res.cloudinary.com/alexoc/image/upload/v1630879496/SFL/assets/blackforest_jsbzbs.jpg
// https://res.cloudinary.com/alexoc/image/upload/v1630879496/SFL/assets/Black-forest-cake-Recipe-n-500x500_avl5lj.jpg
