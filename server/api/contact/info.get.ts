export default eventHandler(async () => {
    try{
        const contactInfo = await hubKV().get('contact-info')
        console.log(contactInfo)
        return {
            code: 2000,
            data: contactInfo
        }
    }catch (e:any) {
        return {
            code: 5000,
            data: null,
            message: e.message
        }
    }
})
