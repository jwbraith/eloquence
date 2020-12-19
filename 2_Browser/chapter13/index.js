let mountains = [
  {
    name: "Kilimanjaro",
    height: "5896",
    place: "Tanzania"
  },
  {
    name: "Stogg",
    height: "4496",
    place: "Alberquerque"
  },
  {
    name: "Absdottir",
    height: "2609",
    place: "Gdansk"
  },
  {
    name: "St. Therese",
    height: "3657",
    place: "Paris"
  },
]
// window.onload = function () {
//   for (let mountain of mountains) {
//     let tbody = document.getElementsByTagName("tbody")[0];
//     let row = document.createElement("tr");
//     let nameCell = document.createElement("td");
//     let name = document.createTextNode(mountain.name);
//     let heightCell = document.createElement("td");
//     let height = document.createTextNode(mountain.height);
//     let placeCell = document.createElement("td");
//     let place = document.createTextNode(mountain.place);

//     nameCell.appendChild(name);
//     heightCell.appendChild(height);
//     placeCell.appendChild(place);
//     row.appendChild(nameCell);
//     row.appendChild(heightCell);
//     row.appendChild(placeCell);
//     tbody.appendChild(row);

//   }
// }

function buildTable(data) {
  let table = document.createElement('table');

  let fields = Object.keys(data[0]);
  let headRow = document.createElement('tr');
  fields.forEach((field) => {
    let headCell = document.createElement('th');
    headCell.appendChild(document.createTextNode(field));
    headRow.appendChild(headCell);
  });
  table.appendChild(headRow);

  data.forEach((object) => {
    let row = document.createElement("tr");
    fields.forEach((field) => {
      let cell = document.createElement("td");
      cell.appendChild(document.createTextNode(object[field]));
      if (typeof object[field] == "number") {
        cell.style.textAlign = "right";
      }
      row.appendChild(cell);
    })
    table.appendChild(row);
  })
  return table;
}
document.querySelector("#mountains").appendChild(buildTable(mountains));

function byTagName(node, tagName) {
  let found = [];
  tagName = tagName.toUpperCase();

  function explore(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName == tagName) {
          found.push(child);
        } else {
          explore(child);
        }
      }
    }
  }
  explore(node);
  return found;
}
console.log(byTagName(document.body, "h1").length);