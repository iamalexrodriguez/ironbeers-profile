const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage = require('multer-storage-cloudinary')


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: process.env.CLOUDINARY_FOLDER,
  allowedFormats: ['jpg', 'png', 'gif', 'jpeg' ],
  filename : (req,rile, cb) =>{
    cb(null, file.originalname)
  }
})



module.exports = multer({storage})