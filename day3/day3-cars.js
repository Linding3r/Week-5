
document.getElementById("btn-get-all").onclick = getAllCars
document.getElementById("btn-for-id").onclick = fetchCar
document.getElementById("btn-add-car").onclick = addCar

const URL = "https://lindinger.azurewebsites.net/api/cars"

function getAllCars(evt){
    fetch(URL)
    .then(res => res.json())
    .then(cars => makeTable(cars))
    
}

function clearInput(){
    document.getElementById("input-brand").value = ""
    document.getElementById("input-model").value = ""
    document.getElementById("input-price").value = ""
    document.getElementById("input-discount").value = ""
}

function makeTable(cars){
    const tablerow = cars.map(car => `
    <tr>
    <td>${car.id}</td>
    <td>${car.brand}</td>
    <td>${car.pricePrDay}</td>
    </tr>
    `)
    const tableRowsAsString = tablerow.join("")

    document.getElementById("table-body-cars").innerHTML = tableRowsAsString
}

function fetchCar(evt){
    const id = document.getElementById("text-for-id").value
    if(!id){
     alert("Enter a Car id")
     return 
    }
    document.getElementById("c-error").innerText = ""
    fetch(URL+"/"+id)
    .then(res => {
     if(!res.ok){
         return Promise.reject("Car Not Found")
     }
     return res.json()})
    .then(data => {
     document.getElementById("c-id").innerText = data.id;
     document.getElementById("c-brand").innerText = data.brand;
     document.getElementById("c-model").innerText = data.model;

    })
    .catch((error) => {
     document.getElementById("c-error").innerText = error
    })
 }

function addCar(evt){
 const car = {
    brand: document.getElementById("input-brand").value,
    model: document.getElementById("input-model").value,
    pricePrDay: document.getElementById("input-price").value,
    bestDiscount: document.getElementById("input-discount").value
  };

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  })
    .then((res) => res.json())
    .then((car) => {
      document.getElementById("added-car").innerHTML = 
      `Car details: Brand: ${car.brand} - Model: ${car.model} - 
      Price Per day: ${car.pricePrDay} - Best Discount: ${car.bestDiscount}`;
      clearInput();
    })
    .catch((error) => {
      console.log(error);
      addCarError.innerHTML = "Something went wrong. Try again later.";
      addCarError.style.display = "block";
    });
}

