const tbody = document.querySelector("tbody");
const input = document.querySelector("input");
const btn = document.querySelector("button");

let count = 1;

btn.addEventListener("click", function () {
    tbody.innerHTML = "";

    axios.get("https://northwind.vercel.app/api/suppliers")
        .then(res => {
            res.data.filter(element => 
                element.companyName.toLowerCase().includes(input.value.toLowerCase()))
                .forEach(element => {
                let tr = document.createElement("tr");
                tr.innerHTML = `
            <tr>
                <td>${count}</td>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>${element.address.city}</td>
            </tr>
            `
                tbody.append(tr)
            })
        })
})




axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res => {
        res.data.forEach(element => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <tr>
                <td>${count}</td>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>${element.address.city}</td>
            </tr>
            `
            tbody.append(tr)
            count++
        });
    })