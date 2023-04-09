const { Router } = require("express");
const {
  findById,
  getAll,
  create,
  remove,
} = require("../controllers/bookController");
const authenticateJWT = require("../middlewares/authMiddleware");
const router = Router();

router.get("/room/:id", getAll);
router.get("/:id", findById);

router.post("/", authenticateJWT(), create);

router.delete("/:id", authenticateJWT(), remove);

module.exports = router;
