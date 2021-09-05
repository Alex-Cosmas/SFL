export const productsList = [
  { id: 1, categoryId: "cakes", name: "Red Velvet", amount: "30" },
  { id: 2, categoryId: "cakes", name: "Black Forest", amount: "30" },
  { id: 3, categoryId: "cakes", name: "Chocolate fudge cake", amount: "30" },
  { id: 5, categoryId: "cakes", name: "Chocolate fudge cake", amount: "30" },
  { id: 4, categoryId: "cakes", name: "Chocolate fudge cake", amount: "30" },
];

export const categoriesList = [
  { id: "cakes", name: "Specialty Pastries & Baked Goods" },
  { id: "muffins", name: "Muffins & Bread" },
];

export const apiHelperFunctions = {
  getCategoryById: (id) => {
    return categoriesList.filter((category) => {
      return category.id == id;
    });
  },
  categoryProductsFilterd: (id) => {
    return productsList.filter((product) => {
      return product.categoryId == id;
    });
  },
};
