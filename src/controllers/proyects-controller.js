import Proyect from "../models/proyects";

export const obtenerProyectos = async (_req, res) => {
    const proyects = await Proyect.find();

    res.status(200).json(proyects);
};

export const contandoProyectos = async (req, res) => {
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
        res.status(505).json({"error": "No es un numero permitido"});
    }
};

export const obtenerProyecto = async (req, res) => {
    const proyect = await Proyect.findById(req.params.id);

    res.status(200).json(proyect);
};

export const agregarProyecto = async (req, res) => {
    const { name, imgUrl, description, github, url } = req.body;

    const newProyect = new Proyect({ name, imgUrl, description, github, url });

    const proyectSave = await newProyect.save();

    res.status(201).json(proyectSave);
};

export const editarProyecto = async (req, res) => {
    const { name, imgUrl, description, github, url } = req.body;
    const updateProyect = await Proyect.findOneAndUpdate(req.params.id, { name, imgUrl, description, github, url }, { new: true });
    res.status(200).json(updateProyect);
};

export const eliminarProyecto = async (req, res) => {
    const deleteProyect = await Proyect.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteProyect);
};
