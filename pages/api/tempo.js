async function tempo(req, response){
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(125612351531351531531531351518);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    })
}

export default tempo;