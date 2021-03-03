import Image from '../models/image';
import path from 'path';
import { unlink } from 'fs-extra';

export const sendImage = async (req, res) => {
    const name = req.file.originalname;

    const oldImage = await Image.findOneAndUpdate({ name }, { name });

    if(oldImage) return res.status(200).json(oldImage);

    const newImage = new Image({
        name
    });

    const imageSave = await newImage.save();

    res.status(200).json(imageSave);
}

export const deleteImage = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const deleteImage = await Image.findByIdAndDelete(id)
        .catch(() => {
            error = true;
        }
    );

    unlink(path.resolve("./src/public/images/"+deleteImage.name));

    if(!deleteImage || error){
        res.status(404).json({ "error": "Image does not Exist"});
    } else {
        res.status(200).json(deleteImage);
    }
}
