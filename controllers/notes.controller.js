try {
    let notesController = {};

    notesController.getNotes = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM notes ORDER BY id DESC;',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    notesController.addNote = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO notes (title, message) VALUES " + 
                "('"+req.body.title+"', '"+req.body.message+"');",
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    

    notesController.deleteNote = async (req, res) => {
        if(connection){
            await connection.query(
                "DELETE FROM notes WHERE id="+req.params.id+";",
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = notesController;
} catch (error) {
    
}