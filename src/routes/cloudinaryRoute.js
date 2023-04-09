const { Router } = require("express");
const { upload, cloudinary } = require("../config/cloudinary");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = Router();

router.post(
  "/upload",
  authenticateJWT(["admin"]),
  upload.single("img"),
  (req, res) => {
    res.json(req.file);
  }
);
router.post("/delete", authenticateJWT(["admin"]), async (req, res) => {
  const img = cloudinary.uploader.destroy(
    req.body.path.match(/travle_tien\/[\w]+/)[0]
  );
  return res.json({
    stutus: "success",
    data: img,
    message: "delete success",
  });
});

module.exports = router;
