let a = document.querySelector("#firstVariable");
let b = document.querySelector("#secondVariable");
let action = document.querySelector("#action");
let results = document.querySelector("#results");
let equalSign = document.querySelector("#equalSign");
let minusSing = "-";

function writeNumber(elem) {
  if (typeof a != "number") {
    a.innerHTML = `${a.innerHTML}${elem}`;
  } else {
    b.innerHTML = `${b.innerHTML}${elem}`;
  }
}

function numberType() {
  if (typeof a != "number" && results.innerHTML === "") {
    if (a.innerHTML === "") {
      alert("Enter the number!");
    } else {
      a = a.innerHTML;
      a = Number(a);
    }
  } else if (results.innerHTML != "") {
    a = document.querySelector("#firstVariable");
    a.innerHTML = results.innerHTML;
    a = a.innerHTML;
    a = Number(a);
    b = document.querySelector("#secondVariable");
    b.innerHTML = "";
    results.innerHTML = "";
    equalSign.innerHTML = "";
  } else if (typeof a === "number" && typeof b != "number") {
    if (b.innerHTML === "") {
    } else {
      b = b.innerHTML;
      b = Number(b);
      equals();
    }
  }
}

function percent() {
  numberType();
  if (a.innerHTML != "") {
    action.innerHTML = `% *`;
    if (results.innerHTML != "") {
      numberType();
    }
  }
}

function divide() {
  numberType();
  if (a.innerHTML != "") {
    action.innerHTML = `/`;
    if (results.innerHTML != "") {
      numberType();
    }
  }
}

function multiply() {
  numberType();
  if (a.innerHTML != "") {
    action.innerHTML = `*`;
    if (results.innerHTML != "") {
      numberType();
    }
  }
}

function minus() {
  numberType();
  if (a.innerHTML != "") {
    action.innerHTML = `-`;
    if (results.innerHTML != "") {
      numberType();
    }
  }
}

function plus() {
  numberType();
  if (a.innerHTML != "") {
    action.innerHTML = `+`;
    if (results.innerHTML != "") {
      numberType();
    }
  }
}

function equals() {
  numberType();

  if (typeof a === "number" && typeof b === "number") {
    equalSign.innerHTML = "=";
    if (action.innerHTML === "+") {
      results.innerHTML = a + b;
    }
    if (action.innerHTML === "% *") {
      results.innerHTML = (b / 100) * a;
    }
    if (action.innerHTML === "/") {
      results.innerHTML = a / b;
    }
    if (action.innerHTML === "*") {
      results.innerHTML = a * b;
    }
    if (action.innerHTML === "-") {
      results.innerHTML = a - b;
    }
  }
}

function deleteAll() {
  a = document.querySelector("#firstVariable");
  b = document.querySelector("#secondVariable");
  a.innerHTML = "";
  b.innerHTML = "";
  action.innerHTML = "";
  results.innerHTML = "";
  equalSign.innerHTML = "";
}

function plusMinus() {
  if (action.innerHTML === "") {
    if (minusSing === "-") {
      a.innerHTML = `${minusSing}${a.innerHTML}`;
      minusSing = "";
    } else {
      a.innerHTML = a.innerHTML.slice(1);
      minusSing = "-";
    }
  } else {
    alert(`You can add "minus" only for first number!`);
  }
}

function deleteLeft() {
  if (results.innerHTML === "") {
    let variables = document.querySelector(".variables").childNodes;
    for (let i = 1; i < 4; i++) {
      if (variables[1].innerHTML === "") {
        deleteAll();
        break;
      }
      if (variables[i].innerHTML === "") {
        if (i === 3) {
          a = document.querySelector("#firstVariable");
        }
        variables[i - 1].innerHTML = variables[i - 1].innerHTML.slice(0, -1);
        break;
      }
      if (variables[3].innerHTML != "") {
        variables[3].innerHTML = variables[3].innerHTML.slice(0, -1);
        break;
      }
    }
  } else {
    alert("You can't change the result!");
  }
}
