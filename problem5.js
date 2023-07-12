function problem5(inventory)
{
    let year_arr=[];
    for (let i= 0; i< inventory.length ; i++)
    {
      if(inventory[i].car_year<2000)
       
      year_arr.push(inventory[i].car_year);
      
    }
    return year_arr;
}

module.exports = problem5;