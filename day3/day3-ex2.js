document.getElementById("svg2").onclick = getDetails

const URL = "https://countries.plaul.dk/api/countries/"

function getDetails(evt){
    document.querySelectorAll("svg").style.fill = "#dcdcdc"
    const target = evt.target
    const id = target.id
    fetch(URL+id)
    .then(res => res.json())
    .then(data => {
        document.getElementById("flag").src = data.flag
        document.getElementById("name").innerText = data.name.common
        document.getElementById("un-member").innerText = data.unMember
        document.getElementById("currencies").innerText = Object.values(data.currencies)[0].name
        document.getElementById("capital").innerText = data.capital.join("")
        document.getElementById("borders").innerText = data.borders.join(", ")
        document.getElementById(id).style.fill = "blue"
    })
}
