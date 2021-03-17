import Proyect from "../models/proyects";

import { sendEdit } from '../libs/reutilizable';

export const sendProyect = async (req, res) => {
    const {
        imgUrl,
        name_es,
        name_en,
        description_es,
        description_en,
        github,
        url
    } = req.body;

    const es = { name: name_es, description: description_es };
    const en = { name: name_en, description: description_en };

    const newProyect = new Proyect({ es, en, imgUrl, github, url});

    const proyectSave = await newProyect.save();

    res.status(200).json(proyectSave);
}

export const editProyect = async (req, res) => {
    const id = req.params.id;

    const {
        imgUrl,
        name_es,
        name_en,
        description_es,
        description_en,
        github,
        url
    } = req.body;

    const es = { name: name_es, description: description_es };
    const en = { name: name_en, description: description_en };

    var error = false;

    const findProyect = await Proyect.findById(id)
        .catch(() => {
            error = true;
        }
    );

    if(!findProyect || error){
        res.status(404).json({ "error": "Proyect does not Exist"});
    } else {
        const info = await sendEdit(Proyect, id, { es, en, imgUrl, github, url });
        res.status(200).json(info);
    }
};

export const getProyects = async (_req, res) => {
    const proyects = await Proyect.find();

    res.status(200).json(proyects);
};

export const countProyect = async (req, res) => {
    let count = req.params.num;

    try {
        count = parseInt(count);

        if(count === 0) {
            res.status(200).json([]);
        } else {
            const proyects = await Proyect.find().limit(count);
            res.status(200).json(proyects);
        }

    } catch (error) {
        res.status(505).json({"error": "It is not a permitted number "});
    }
};

export const getProyect = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const proyect = await Proyect.findById(id)
        .catch(() => {
            error = true;
        }
    );

    if(!proyect || error){
        res.status(404).json({ "error": "Proyect does not Exist"});
    } else {
        res.status(200).json(proyect);
    }
};

export const deleteProyect = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const deleteProyect = await Proyect.findByIdAndDelete(id)
        .catch(() => {
            error = true;
        }
    );

    if(!deleteProyect || error){
        res.status(404).json({ "error": "Proyect does not Exist"});
    } else {
        res.status(200).json(deleteProyect);
    }
};
