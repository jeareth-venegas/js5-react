const buyTicketSlowProcess = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = true;
  
        if (error) reject("Something went wrong");
        else resolve("Ticket Buyed");
      }, 3000);
    });
  };
  
  console.log("I'm waiting...");
  
  buyTicketSlowProcess()
    .then((message) => {
      console.log(message);
      return message;
    })
    .then((message) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`${message} in uppercase`.toUpperCase());
        }, 3000);
      });
    })
    .catch((error) => console.log(error));
  
  console.log("I can't wait");
  