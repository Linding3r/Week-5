const URL = "https://jsonplaceholder.typicode.com/users"
const getBtn = document.getElementById("btn-get-user")
getBtn.onclick = fetchUser

document.getElementById("btn-get-all").onclick = fetchAll

function fetchAll(evt){
    fetch(URL)
    .then(res => res.json())
    .then(data => createTableRows(data))  
}


function createTableRows(data) {
  const tableRows = data.map(data => `<tr>
                    <td>${data.name}</td>
                    <td>${data.email}</td>
                    <td>${data.address.city}</td>
                  </tr>`).join("\n")
  document.getElementById('tbody').innerHTML = tableRows;
}



function fetchUser(evt){
   const id = document.getElementById("input-id").value
   if(!id){
    alert("Enter an User id")
    return 
   }
   document.getElementById("p-error").innerText = ""
   fetch(URL+"/"+id)
   .then(res => {
    if(!res.ok){
        return Promise.reject("User Not Found")
    }
    return res.json()})
   .then(data => {
     document.getElementById("p-name").innerText = data.name;
     document.getElementById("p-email").innerText = data.email;
     document.getElementById("p-city").innerText = data.address.city;
   })
   .catch((error) => {
    document.getElementById("p-error").innerText = error
   })
}


