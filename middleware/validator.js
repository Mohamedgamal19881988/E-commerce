const { param, validationResult } = require('express-validator');


const validatorMiddleWare = (req, res) => {
        const error= validationResult(req)
        if (!error.isMongoId){
            res.status(500).json({ error:error.array() })
        }
        res.send(`Invalid id , ${req.params.id}`);
      }
      module.exports = validatorMiddleWare