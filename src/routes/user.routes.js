const router = require("express").Router();
const { create, getAll, getCount, getByPhone, update } = require("../controllers/user.controller");
const validatePhone = require("../middlewares/validatePhone");

router.post("/", validatePhone, create);
router.get("/", getAll);
router.get("/count", getCount);
router.get("/:phoneNo", getByPhone);
router.put("/:id", update);

module.exports = router;
