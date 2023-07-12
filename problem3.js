function problem3(inventory)
{
    let sort_car_model=[];
    for(let i=0;i<inventory.length-1;i++)
    {
        for(let j=0;j<inventory.length-1-i;j++)
        {
            if(inventory[j+1].car_model.toLowerCase()<inventory[j].car_model.toLowerCase())
            {
                const temp=inventory[j].car_model;
                inventory[j].car_model=inventory[j+1].car_model;
                inventory[j+1].car_model=temp;
            }
        }
        
        
    }
    
    for (let i= 0; i< inventory.length ; i++)
    {
       
      sort_car_model.push(inventory[i].car_model);
      
    }
    return sort_car_model;
}

module.exports = problem3;