function organizeShoes(shoes) 
{
    let counts = {};
    for (let shoe of shoes)
    {
        let {type, size} = shoe;

        if (!counts[size])
            counts[size] = {I: 0, R: 0};
        counts[size][type]++;
    }

    let pairs = [];
    for (let size in counts)
    {
        if (counts[size].I > 0 && counts[size].R > 0)
            pairs.push(Number(size));
    }
    return pairs.sort((a, b) => a - b);
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  console.log(organizeShoes(shoes))
  
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  organizeShoes(shoes3)
  // []