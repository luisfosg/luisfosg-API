import Note from '../models/notes';

export const sendNote = async (req, res) => {
    res.send("Agregando nota");
}

export const getNote = async (req, res) => {
    res.send("Obteniendo nota");
}

export const getNotes = async (req, res) => {
    res.send("Obteniendo notas");
}

export const editNote = async (req, res) => {
    res.send("Editando nota");
}

export const deleteNote = async (req, res) => {
    res.send("Eliminando nota");
}
