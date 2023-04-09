const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v4 } = require("uuid");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "de0tzzevl",
  api_key: "228379871814757",
  api_secret: "iA5HliZH4eJlkxQR9xjoHYBM99c",
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  filename: function (req, file, cb) {
    cb(null, v4() + "." + file.originalname.split(".").slice(-1));
  },
  params: {
    folder: "travle_tien",
  },
});

const upload = multer({ storage: storage });

module.exports = {
  upload,
  cloudinary,
};
