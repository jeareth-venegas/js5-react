async function buyTicket () {
    try {
    
        const result = await buyTicketSlowProcess()
        console.log(result)
        
    } catch(error){
    
        console.log(error)
        
    }
}

buyTicket()

//encadenar promesas con asyn await

const resultToUppercase = (result) => {
    return new Promise((resolve, reject) => {
        console.log('uppercasing slowly...')
        setTimeout(() => {
            resolve(`${result} in uppercase`.toUpperCase())
        }, 3000)
    })
}

async function buyTicket () {
    try {
        const result = await buyTicketSlowProcess()
        console.log(result)
        
        const resultInUppercase = await resultToUppercase(result)
        console.log(resultInUppercase)
        
    } catch(error){
        console.log(error)
    }
}