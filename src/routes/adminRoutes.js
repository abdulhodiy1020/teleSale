const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");


router.post("/", adminController.createAdmin);
router.get("/", adminController.getAllAdmins);
router.get("/:id", adminController.getAdminById);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);



// Admin login
router.post("/admin/login", adminController.loginAdmin);
module.exports = router;

