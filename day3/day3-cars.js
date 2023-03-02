
document.getElementById("btn-get-all").onclick = getAllCars

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