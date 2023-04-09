const { Router } = require("express");
const {
  findById,
  getAll,
  create,
  update,
  remove,
} = require("../controllers/addressController");
const router = Router();

router.get("/:id", findById);
router.get("/", getAll);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
