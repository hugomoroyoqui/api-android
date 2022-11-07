try {
    const express = require('express');
    const router = express.Router();
    const notesController = require('../controllers/notes.controller');
    
    router.get('/', notesController.getNotes);
    router.post('/', notesController.addNote);
    router.delete('/:id/', notesController.deleteNote); 
    
    module.exports = router;   
} catch (error) {
    
}