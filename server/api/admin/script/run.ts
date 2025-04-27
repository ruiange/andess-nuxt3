import setKv from "~/server/scripts/set-kv";

export default eventHandler(async () => {
   const status = await setKv()
    if(status===true){
        return {
            code: 200,
            data: null,
            message: 'success'
        }
    }else{
        return {
            code: 500,
            data: null,
            message: status
        }
    }
})
