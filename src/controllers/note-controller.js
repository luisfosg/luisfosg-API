import Note from '../models/notes';
import { encripText } from '../libs/reutilizable';

export const sendNote = async (req, res) => {
    const { title, description, encode } = req.body;
    var descrip = description

    if(encode==="true") {
        descrip = encripText(descrip);
    }

    const newNote = new Note({
        title,
        description: descrip
    })

    const saveNote = await newNote.save();

    res.status(200).json(saveNote);
}

export const getNote = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const note = await Note.findById(id)
        .catch(() => {
            error = true;
        }
    );

    if(!note || error){
        res.status(404).json({ "error": "Note does not Exist"});
    } else {
        res.status(200).json(note);
    }
}

export const getNotes = async (_req, res) => {
    const notes = await Note.find();

    res.status(200).json(notes);
}

export const editNote = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    var error = false;

    const editNote = await Note.findByIdAndUpdate(id, { title, description }, { new: true })
        .catch(() => {
            error = true;
        }
    );

    if(!editNote || error){
        res.status(404).json({ "error": "Note does not Exist"});
    } else {
        res.status(200).json(editNote);
    }
}

export const deleteNote = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const deleteNote = await Note.findByIdAndDelete(id)
        .catch(() => {
            error = true;
        }
    );

    if(!deleteNote || error){
        res.status(404).json({ "error": "Note does not Exist"});
    } else {
        res.status(200).json(deleteNote);
    }
}
