function organizeInventory(inventory)
{
    return inventory.reduce((ac, juguete) => {
        let {category, name, quantity} = juguete;

        if (!ac[category])
            ac[category] = {};

        if (!ac[category][name])
            ac[category][name] = 0;

        ac[category][name] += quantity;
        return ac;
    }, {});
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  
  organizeInventory(inventory)
  
  // Resultado esperado:
  // {
  //   toys: {
  //     doll: 5,
  //     car: 5
  //   },
  //   sports: {
  //     ball: 2,
  //     racket: 4
  //   }
  //  }
  
  const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]
  
  organizeInventory(inventory2)
  
  // Resultado esperado:
  // {
  //   education: {
  //     book: 15
  //   },
  //   art: {
  //     paint: 3
  //   }
  // }