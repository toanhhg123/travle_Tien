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
const router = Router();

router.get("/:id", findById);
router.get("/", getAll);

router.post("/comment/:id", addComent);
router.post("/", create);

router.patch("/:id", update);

router.delete("/comment/:id/:commentId", deleteComment);
router.delete("/:id", remove);

module.exports = router;
