function problem4(inventory)
{
    let year_arr=[];
    for (let i= 0; i< inventory.length ; i++)
    {
       
      year_arr.push(inventory[i].car_year);
      
    }
    return year_arr;
}

module.exports = problem4;