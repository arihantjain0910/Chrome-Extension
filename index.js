let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//console.log(localStorage.getItem("myLeads"))

//localStorage.setItem("myName","Arihant")

// let name = localStorage.getItem("myName")
// console.log(name)
let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromStorage)
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    
    inputEl.value = ""

    localStorage.setItem("myleads",JSON.stringify(myLeads))
    renderLead()
    console.log(localStorage.getItem("myleads"))
    
})

function renderLead(){
    let listItems = ""
    for(let i=0 ; i< myLeads.length ; i++ ){
    //listItems += "<li><a target = '_blank' href = '" +  myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
    <a target = '_blank' href= '${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>
    `
    //const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}

ulEl.innerHTML = listItems
}