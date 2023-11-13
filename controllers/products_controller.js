const Product = require("../models/product");

// function to show all the products
module.exports.products = async function (req, res) {
  try {
    const foundProducts = await Product.find();
    if (foundProducts) {
      res.send(foundProducts);
    } else {
      throw new Error("No product found");
    }
  } catch (error) {
    res.send(error);
  }
};

// function to create a new product
module.exports.create = async function (req, res) {
  try {
    const newProduct = new Product({
      name: req.body.name,
      quantity: req.body.quantity,
    });

    await newProduct.save();
    res.send("New product added successfully.");
  } catch (err) {
    res
      .status(500)
      .send(err.message || "An error occurred while adding a new product.");
  }
};

// function to delete a product using it's ID
module.exports.delete = async function (req, res) {
  try {
    const product = await Product.deleteOne({ _id: req.params.productID });
    if (product) {
      res.send({
        message: "Product deleted",
      });
    } else {
      throw new Error("Error deleting product");
    }
  } catch (error) {
    res.send(error);
  }
};

// function to update a product's quantity
module.exports.updateQunatity = async function (req, res) {
  try {
    // find the product using id
    const product = await Product.findById(req.params.productID);
    if (product) {
      // update the quantity and tell how it works
      await Product.findByIdAndUpdate(
        { _id: req.params.productID },
        { $set: { quantity: req.body.quantity } }
      );
      await product.save();
      res.send({
        message: `The quantity of ${product.name} has been updated`,
      });
    } else {
      throw new Error(`No product found with id :${req.params.productID}`);
    }
  } catch (err) {
    res.send(err);
  }
};
