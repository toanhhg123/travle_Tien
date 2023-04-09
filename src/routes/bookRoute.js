const { Router } = require("express");
const {
  findById,
  getAll,
  create,
  remove,
} = require("../controllers/bookController");
const router = Router();

router.get("/room/:id", getAll);
router.get("/:id", findById);

router.post("/", create);

router.delete("/:id", remove);

module.exports = router;
