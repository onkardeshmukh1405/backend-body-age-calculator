const router = require("express").Router();
const { create, getAll, update } = require("../controllers/user.controller");

router.post("/", create);
router.get("/", getAll);
router.put("/:id", update);

module.exports = router;
