function problem6(inventory)
{
    let bmw_audi=[];
    
    
    for (let i= 0; i< inventory.length ; i++)
    {
       if(inventory[i].car_make==="BMW" || inventory[i].car_make==="Audi")
       {
            bmw_audi.push(inventory[i]);
       }
      
      
    }
    return bmw_audi;
}

module.exports = problem6;