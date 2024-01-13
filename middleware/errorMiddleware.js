const sendErrorDevMode = (err,res)=>{
    return res.status(err.statusCode).json({
        status:err.status,
        error:err,
        message:err.message,
        // stack:err.stack
    })  
}

const sendErrorProMode = (err,res)=>{
    return res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
    })

    
}



const globalError = (err,req,res,next) =>{
    err.statusCode = err.statusCode  || 500
    err.status = err.status  || 'error'
    if(process.env.NODE_ENV==='development'){
       return sendErrorDevMode(err,res)
    }else{
       return   sendErrorProMode(err,res)
    }

  
}






module.exports = globalError


