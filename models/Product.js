module.exports = function(connection, Sequelize) {
  const Product = connection.define("Product", {
    name: Sequelize.STRING,
    manufacturer: Sequelize.STRING,
    price: Sequelize.INTEGER
  });
  return Product;
};
