module.exports.homepage = (req, res) => {
  // display Welcome to E-commerce-API on home route
  const welcomeMessage =
    "Welcome to the E-Commerce API, To get project details go on link - http://localhost:5000/products";
  return res.status(200).json({ message: welcomeMessage });
};
