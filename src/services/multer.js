import multer from 'multer';
import path from 'path';

var storageImage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, path.resolve(__dirname, "../public/images"))
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    }
});

export const uploadImage = multer({ storage: storageImage });
