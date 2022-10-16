const { Router } = require("express");
const Controller = require("../controllers");

const router = Router();
router.post("/login", Controller.loginController.login);
router.post("/register", Controller.registerController.register);
router.get("/userinfo", Controller.userinfoController.get);
router.get("/item", Controller.itemController.get);
router.post("/item", Controller.itemController.post);
router.put("/item", Controller.itemController.put);
router.patch("/item", Controller.itemController.put);
router.delete("/item", Controller.itemController.delete);
router.get("/employee", Controller.employeeController.get);
router.post("/employee", Controller.employeeController.post);
router.put("/employee", Controller.employeeController.put);
router.patch("/employee", Controller.employeeController.put);
router.delete("/employee", Controller.employeeController.delete);
router.get("/shop", Controller.shopController.get);
router.post("/shop", Controller.shopController.post);
router.put("/shop", Controller.shopController.put);
router.patch("/shop", Controller.shopController.put);
router.delete("/shop", Controller.shopController.delete);
router.get("/log", Controller.logController.get);
router.post("/log", Controller.logController.post);
router.put("/log", Controller.logController.put);
router.patch("/log", Controller.logController.put);
router.delete("/log", Controller.logController.delete);

module.exports = router;
