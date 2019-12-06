// SORT
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("services__sort").onclick = function() {
    sort();
  };
});

let sort = () => {
  var select = document.getElementById("services__sort");
  var val = select.value;
  var list = document.querySelector("tbody");
  var items = list.childNodes;
  var itemsArr = [];
  if (val === "cost") {
    for (var i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
    itemsArr.sort(function(a, b) {
      return parseFloat(a.getAttribute("price")) ==
        parseFloat(b.getAttribute("price"))
        ? 0
        : parseFloat(a.getAttribute("price")) >
          parseFloat(b.getAttribute("price"))
        ? 1
        : -1;
    });

    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  } else if (val === "order") {
    for (var i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
    itemsArr.sort(function(a, b) {
      return parseFloat(a.getAttribute("order")) ==
        parseFloat(b.getAttribute("order"))
        ? 0
        : parseFloat(a.getAttribute("order")) >
          parseFloat(b.getAttribute("order"))
        ? 1
        : -1;
    });

    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }
};

// Hide_Show
let btnSH = document.querySelector(".td-hide-btn");
btnSH.addEventListener("click", function() {
  document.querySelector(".services__td-desk").classList.toggle("td-desk_hide");
  if (btnSH.value === "Свернуть") {
    btnSH.value === "Развернуть";
  }
});
