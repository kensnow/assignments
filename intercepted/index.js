

const logger = (req,res,next) => {
    console.log(`
        METHOD: ${req.method}
        URL: ${req.path}
        HOST: ${req.hostname}
    
    `)
    res.status(200).send()
    next;
}

const errHandler = (err,req,res,next) => {
    
    res.status(401).send({errMsg: err.message})
}

module.exports = (
    logger,
    errHandler
)
