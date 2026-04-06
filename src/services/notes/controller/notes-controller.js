import { nanoid } from "nanoid";
import response from "../../../utils/response.js";
import InvariantError from "../../../exceptions/invariant-error.js";
import NotFoundError from "../../../exceptions/not-found-error.js";
import NoteRepositories from "../repositories/note-repositories.js";

export const createNote = async(req, res, next) => {
    const { title, body, tags } = req.validated;
    const note = await NoteRepositories.createNote({
        title,
        body,
        tags,
    });
    
    if (!note) {
        return next(new InvariantError('catatan gagal ditamhkan'));
    }

    return response(res, 201, 'Catatan berhasil ditambahkan', note);
};

export const getNotes = async (req, res) => {
  const notes = await NoteRepositories.getNotes();
  return response(res, 200, 'Catatan sukses ditampilkan', notes);
};

export const getNotesById = async (req, res, next) => {
    const { id } = req.params;
    const note = await NoteRepositories.getNoteByid(id);

    if (!note) {
        return next(new NotFoundError('Catatan tidak ditemukan'));
    }

    return response (res, 200, 'Catatan sukses ditampilkan', note);
};

export const editNote = async (req, res, next) => {
        const { id } = req.params;
        const { 
            title, 
            tags, 
            body 
        } = req.validated 

        const note = await NoteRepositories.editNote({
            id,
            title,
            body,
            tags
        });
       
        if (!note) {
            return next(new NotFoundError('Catatan tidak ditemukan'));
        }

        return response(res, 200, 'Catatan berhasil diperbarui', note);
};

export const deleteNoteById = async (req, res, next) => {
        const { id } = req.params;
        const deleteNote = await NoteRepositories.deleteNote(id);


        if (!deleteNote) {
            return next(new NotFoundError('Catatan tidak ditemukan'));
        }

        return response(res, 200, 'Catatan berhasil dihapus', deleteNote);
};