const { Router } = require("express");
const {
  findById,
  getAll,
  create,
  update,
  remove,
} = require("../controllers/addressController");
const router = Router();
const authenticateJWT = require("../middlewares/authMiddleware");

router.get("/:id", findById);
router.get("/", getAll);
router.post("/", authenticateJWT(["admin"]), create);
router.patch("/:id", authenticateJWT(["admin"]), update);
router.delete("/:id", authenticateJWT(["admin"]), remove);

module.exports = router;
