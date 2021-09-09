const buyTicketSlowProcess = () => {
    return new Promise((resolve, reject) => {
      console.log("I'm waiting");
      setTimeout(() => {
        const error = false;
        if (error) reject("Someting went wrong");
        else resolve("Ticket Buyed");
      }, 3000);
    });
  };
  
  const resultToUppercase = (result) => {
    return new Promise((resolve, reject) => {
      console.log("uppercasing...");
      setTimeout(() => {
        resolve(`${result} in uppercase`.toUpperCase());
      }, 3000);
    });
  };
  
  async function buyTicket() {
    try {
      const result = await buyTicketSlowProcess();
      console.log(result);
  
      const resultInUppercase = await resultToUppercase(result);
      console.log(resultInUppercase);
    } catch (error) {
      console.log(error);
    }
  }
  
  buyTicket();
  