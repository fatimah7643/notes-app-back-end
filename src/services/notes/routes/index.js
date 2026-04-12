import express from 'express';
import { createNote, getNotes, getNotesById, deleteNoteById, editNote } from '../controller/notes-controller.js';
import validate from '../../../middleware/validate.js';
import { notePayloadSchema } from '../validator/schema.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', validate(notePayloadSchema), editNote);
router.delete('/notes/:id', deleteNoteById);

export default router;