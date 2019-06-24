const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  let getAge= pet => new Date().getFullYear() - pet.bornOn;
  const petsWithAge = pets.map((pet)=> {pet.age = getAge(pet); return pet ;})
  console.log(petsWithAge);
  
  
  const dogs = pets.filter((pet) => {if (pet.type === "dog") return pet ; });
  console.log(dogs);
  

  let jasper = pets.find((pet)=> {if (pet.name === "Jasper") return pet; });
  console.log(`Jasper is ${jasper.age} years old`);
  

  