const form = document.getElementById("form");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");

const formDataListener = (e) => {
  e.preventDefault();
  let elements = e.target.elements;
  // console.log(elements);
  let Obj = {};
  for (let i = 0; i < elements.length; i++) {
    elements[i].name && (Obj[elements[i].name] = elements[i].value);
  }
  console.log(Obj);
  createTask(Obj);
};

//              <tr>
//               <td>veer</td>
//               <td>173114</td>
//               <td>ss jain subhod college jaipur</td>
//               <td>pass</td>
//             </tr>

function createTask(obj) {
  //console.log(obj.fname);
  let tr = document.createElement("tr");

  tr.innerHTML = `<td>${obj.rollno}</td>
                   <td>${obj.fname.toUpperCase()} ${obj.lname.toUpperCase()}</td>
                   <td>${obj.cname}</td>
                   <td>${obj.Status}</td>`;

  tbody.append(tr);
}

form.addEventListener("submit", formDataListener);

/*  for(let i in obj){
  // i will be the key and obj[i] will be thje value of i th key
  let td = document.createElement("td");
  td.innerText = obj[i]; */
