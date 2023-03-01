const names = ["Lars", "Jan", "Peter", "Frederik"]

//names.map(name => console.log(name))

const namesLesThan3 = names.filter(name => name.length <= 3)//.forEach(name => console.log(name))

const namesUpper = names.map(name => name.toUpperCase())//.forEach(name => console.log(name))

const namesUl = names.map(name => "<li>"+name+"</li>")//.forEach(name => console.log(name))



const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

const carsNewerThan1999 = cars.filter(car => car.year > 1999).forEach(car => console.log(car))
const carsVolvo = cars.filter(car => car.make === "Volvo").forEach(car => console.log(car))
const carsPriceBelow5000 = cars.filter(car => car.price < 5000).forEach(car => console.log(car))

const tableBody = document.getElementById('tbody');

function createTableRows(carsToTable) {
  const tableRows = carsToTable.map(car => `<tr>
                    <td>${car.id}</td>
                    <td>${car.year}</td>
                    <td>${car.make}</td>
                    <td>${car.model}</td>
                    <td>${car.price}</td>
                  </tr>`).join("\n")
  document.getElementById('tbody').innerHTML = tableRows;
}

createTableRows(cars)

document.getElementById('search').onclick = () => {
  const price = document.getElementById("price").value
  const carsByPrice = cars.filter(car => car.price < price)
  createTableRows(carsByPrice)
}

document.getElementById('clear').onclick = () =>{
  createTableRows(cars)
}

let isClicked3 = false;
document.getElementById('car-id').onclick = () =>{
  const carsById = cars.slice();
  if (isClicked3) {
    carsById.sort((a, b) => b.id - a.id);
    isClicked3 = false;
  } else {
    carsById.sort((a, b) => a.id - b.id);
    isClicked3 = true;
  }
  createTableRows(carsById)
}

let isClicked = false;
document.getElementById('car-year').onclick = () =>{
  const carsByYear = cars.slice();
  if (isClicked) {
    carsByYear.sort((a, b) => b.year - a.year);
    isClicked = false;
  } else {
    carsByYear.sort((a, b) => a.year - b.year);
    isClicked = true;
  }
  createTableRows(carsByYear)
}

let isClicked2 = false;
document.getElementById('car-price').onclick = () =>{
  const carsByPrice = cars.slice();
  if (isClicked2) {
    carsByPrice.sort((a, b) => b.price - a.price);
    isClicked2 = false;
  } else {
    carsByPrice.sort((a, b) => a.price - b.price);
    isClicked2 = true;
  }
  createTableRows(carsByPrice)
}

document.getElementById('search-model').onclick = () =>{
  const carModel = document.getElementById('model').value
  const carsByModel = cars.filter(car => car.model == carModel)
  createTableRows(carsByModel)
}



