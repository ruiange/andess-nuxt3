export default eventHandler(async () => {
    const contactInfo = await hubKV().get('contact-info')
    console.log(contactInfo)
    return {
        code: 200,
        data: {
            phone: '18513687900',
            address: '北京市丰台区丰科路万达广场写字楼C座517-518',
            email: 'andess@andess.com',
        }
    }
})
