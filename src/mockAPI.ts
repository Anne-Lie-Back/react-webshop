
export default async function mockAPI(){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            resolve({status:"ok"})
        },3000)
    )
}