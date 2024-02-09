const tableBody= document.getElementById('table-body');
const inputEl= document.getElementById('filterInput')
function fetchJson(url){
    return fetch(url)
    .then((res)=>{
        return res.json()
    })
}
   function generateTable(data){
    data.forEach(element => {
        const row= document.createElement('tr')
        row.innerHTML=`
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.amount}</td>
        <td>${element.date}</td>
        <td>${element.city}</td>`
        tableBody.appendChild(row)
    });
   }
   
fetchJson('Table.json')
.then((data)=>{
    generateTable(data)
})
function filterTable(){
    const filterValue= inputEl.value.toLocaleLowerCase();
    
    console.log(filterValue)
}
filterTable()