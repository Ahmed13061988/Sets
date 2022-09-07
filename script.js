// Sets are a collection of unique values, that's mean there is no duplicates in it.

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

console.log(new Set("Ahmed"));

console.log(ordersSet.size);

console.log(ordersSet.has("pizza"));

console.log(ordersSet.add("Gralic Bread", "Garlic Bread"));

ordersSet.delete("Pizza");
console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//Example
//Regular array
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

//Creating an array out of Set
const setStaff = [...new Set(staff)];

console.log(setStaff);

// String are itterable as well
console.log(new Set("AhmedAliHusseinAlubaidi").size);
