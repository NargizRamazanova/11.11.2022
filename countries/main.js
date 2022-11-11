const row = document.querySelector(".row")

const input = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    row.innerHTML = "";

    axios.get(`https://restcountries.com/v3.1/name/${input.value}`)
    .then(response => {
        response.data.forEach(element => {
            let div = document.createElement("div")
            div.className = "col-3 mb-2"
    
            div.innerHTML = `
            <div class="card">
            <img class="card-img-top" src="${element.flags.png}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${element.name.common}</h5>
              <p class="card-text">${element.capital[0]}</p>
              <a href="${element.maps.googleMaps}" class="btn btn-primary">Go maps</a>
            </div>
          </div>`

          row.append(div)
            
        });
    })
})


axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
        response.data.forEach(element => {
            let div = document.createElement("div")
            div.className = "col-3 mb-2"
    
            div.innerHTML = `
            <div class="card">
            <img class="card-img-top" src="${element.flags.png}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${element.name.common}</h5>
              <p class="card-text">${element.capital}</p>
              <a href="${element.maps.googleMaps}" class="btn btn-primary">Go maps</a>
            </div>
          </div>`

          row.append(div)
            
        });
    })