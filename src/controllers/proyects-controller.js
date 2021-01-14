import Proyect from '../models/proyects';

export const obtenerProyectos = async (req, res) => {
    const proyects =  await Proyect.find();

    res.status(200).json(proyects);
}

export const obtenerProyecto = (req, res) => {
    res.status(200).json({"status": "OK"})
}

export const agregarProyecto = async (req, res) => {
    const {name, imgUrl, description, github, url} = req.body;

    const newProyect = new Proyect({name, imgUrl, description, github, url});

    const proyectSave = await newProyect.save();

    res.status(201).json(proyectSave);
}

export const editarProyecto = (req, res) => {
    res.status(200).json({"status": "OK"})
}

export const eliminarProyecto = (req, res) => {
    res.status(200).json({"status": "OK"})
}
