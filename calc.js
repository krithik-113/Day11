let input = document.getElementById("input")
let clear = document.getElementById("clear")
let result = document.getElementById("result")
let del = document.getElementById("del")
let inputs = document.querySelectorAll("input")

clear.addEventListener("click", () => {
    input.value = "";
})


result.addEventListener("click", () => {
     if (input.value.length == 0) {
       input.value = "Only numbers are allowed";
     }
      input.value = eval(input.value);
 })

del.addEventListener("click", () => {
   input.value= input.value.slice(0,-1)
})

// Invalid
inputs[3].addEventListener("click", () => {
    if (input.value.length == 1 && input.value=='.' && inputs[3].defaultValue=='.') {
         input.value = "Only numbers are allowed";
    }
})
inputs[4].addEventListener("click", () => {
  if (input.value.length == 1 && input.value=='/' && inputs[4].defaultValue == "/") {
    input.value = "Only numbers are allowed";
  }
});
inputs[8].addEventListener("click", () => {
  if (
    input.value.length == 1 &&
    input.value == "*" &&
    inputs[8].defaultValue == "*"
  ) {
    input.value = "Only numbers are allowed";
  }
});
inputs[12].addEventListener("click", () => {
  if (
    input.value.length == 1 &&
    input.value == "-" &&
    inputs[12].defaultValue == "-"
  ) {
    input.value = "Only numbers are allowed";
  }
});
inputs[16].addEventListener("click", () => {
  if (
    input.value.length == 1 &&
    input.value == "+" &&
    inputs[16].defaultValue == "+"
  ) {
    input.value = "Only numbers are allowed";
  }
});
inputs[20].addEventListener("click", () => {
  if (
    input.value.length == 1 &&
    input.value == "%" &&
    inputs[20].defaultValue == "%"
  ) {
    input.value = "Only numbers are allowed";
  }
});