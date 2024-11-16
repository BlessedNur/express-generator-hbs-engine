const { Router } = require("express");
const router = Router();
const productController = require("../controllers/contact.controller");
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home page" });
});

router.get("/about-us", function (req, res, next) {
  res.render("about-us", { title: "About us" });
});

router.get("/contact-us", function (req, res, next) {
  const { message } = req.query;
  res.render("contact-us", { title: "Contact us", message: message });
});

// router.post("/submit-form", function (req, res, next) {
//   const data = req.body;
//   const message = "";
//   Contact.create(data)
//     .then((save) => {
//       message = "Data saved sucessfully";
//     })
//     .catch((error) => {
//       message = "an error occured";
//     })
//     .finally(() => {
//       res.redirect("/contact-us?message=" + messsage);
//     });

//   res.send("Form submitted successfully");
// });

router.post("/submit-form", productController.contactUs);

module.exports = router;
