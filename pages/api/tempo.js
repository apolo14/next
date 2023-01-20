function tempo(req, response){
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;