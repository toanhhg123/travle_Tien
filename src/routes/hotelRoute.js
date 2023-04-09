const { Router } = require("express");
const {
  findById,
  getAll,
  create,
  update,
  remove,
  deleteComment,
  addComent,
} = require("../controllers/hotelController");
const authenticateJWT = require("../middlewares/authMiddleware");
const router = Router();

router.get("/:id", findById);
router.get("/", getAll);

router.post("/comment/:id", authenticateJWT(), addComent);
router.post("/", authenticateJWT(["admin"]), create);

router.patch("/:id", authenticateJWT(["admin"]), update);

router.delete("/comment/:id/:commentId", deleteComment);
router.delete("/:id", authenticateJWT(["admin"]), remove);

module.exports = router;
