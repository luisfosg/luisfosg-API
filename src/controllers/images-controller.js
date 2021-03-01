import Image from '../models/image';

export const sendImage = async (req, res) => {
    const newImage = new Image({
        name: req.file.originalname
    });

    const imageSave = await newImage.save();

    res.status(200).json(imageSave);
}
