import Proyect from '../models/proyects';

export const obtenerProyectos = (req, res) => {
    res.status(200).json({"status": "OK"})
}

export const obtenerProyecto = (req, res) => {
    res.status(200).json({"status": "OK"})
}

export const agregarProyecto = (req, res) => {
    console.log(req.body);
    res.status(200).json({"status": "Proyect Created"})
}

export const editarProyecto = (req, res) => {
    res.status(200).json({"status": "OK"})
}

export const eliminarProyecto = (req, res) => {
    res.status(200).json({"status": "OK"})
}
