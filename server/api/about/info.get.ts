export default eventHandler(async () => {
    try{
        const siteInfo = await hubKV().get('site-info')
        return {
            code: 2000,
            data: siteInfo
        }
    }catch (e:any) {
        return {
            code: 5000,
            data: null,
            message: e.message
        }
    }
})
