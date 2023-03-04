
document.getElementById("btn-get-all").onclick = getAllCars
document.getElementById("btn-for-id").onclick = fetchCar

const URL = "https://lindinger.azurewebsites.net/api/cars"

function getAllCars(evt){
    fetch(URL)
    .then(res => res.json())
    .then(cars => makeTable(cars))
    
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