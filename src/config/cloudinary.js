const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v4 } = require("uuid");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
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
