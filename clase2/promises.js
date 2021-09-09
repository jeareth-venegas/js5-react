const buyTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false
            if (error) reject ("Someting went wrong")
            else resolve ("Ticket Buyed")
        }, 3000)
    })
}

console.log('Wait...')

buyTicket().then(success => console.log(success))
            .catch(error => console.log(error))