let animal = {
  age: 10,
  taille: 1.5,
  poids: 150,
  genre: "Male"
};

console.log(animal);
document.getElementById("age").innerHTML = animal.age;
document.getElementById("taille").innerHTML = animal.taille;
document.getElementById("genre").innerHTML = animal["genre"];
