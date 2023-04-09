const { Router } = require("express");
const {
  findById,
  getAll,
  create,
  update,
  remove,
} = require("../controllers/roomController");
const authenticateJWT = require("../middlewares/authMiddleware");
const router = Router();

router.get("/:id", findById);
router.get("/", getAll);

router.post("/", authenticateJWT(["admin"]), create);

router.patch("/:id", authenticateJWT(["admin"]), update);
router.delete("/:id", authenticateJWT(["admin"]), remove);

module.exports = router;
