const { Router } = require("express");
const { upload, cloudinary } = require("../config/cloudinary");

const router = Router();

router.post("/upload", upload.single("img"), (req, res) => {
  res.json(req.file);
});
router.post("/delete", async (req, res) => {
  const img = cloudinary.uploader.destroy(req.body.path);
  return res.json({
    stutus: "success",
    data: img,
    message: "delete success",
  });
});

module.exports = router;
