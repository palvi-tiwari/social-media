const multer = require("multer");
const path = require("path");
const { ImageUrl } = require("./comman/UploadImageUrl");

const upload_folder = path.join(__dirname, "../uploadFiles");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, upload_folder);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

const addFileName = async (req, res) => {
  const { file } = req.body;
  const image_data = ImageUrl(file);
  return res.json({
    success: true,
    filename: image_data.file_path,
    is_file_exist: image_data.is_file_exist,
  });
};

const uploadFile = () => {
  addFileName.single("file"),
    (req, res, next) => {
      if (req.file) {
        return res.json({
          success: true,
          message: "file uploaded successfully",
          filename: req.file.filename,
        });
      }
    };
};
