let calBtn = document.getElementById("calculate");
calBtn.addEventListener("click", billAmount);
// calBtn.addEventListener("click", function () {
//   console.log(billAmt);

// });

// document.getElementById("billamt").value = " ";
// billAmt = "0";

function billAmount() {
  let billAmt = document.getElementById("billamt").value;
  let pplAmt = document.getElementById("peopleamt").value;
  let selectElement = document.querySelector("#serviceQual");
  let msg = document.getElementById("msg");

  if (billAmt !== "") {
    let value = selectElement.options[selectElement.selectedIndex].value; //getting values from the drop down box

    // console.log(value);

    let calculateValue = (billAmt * value).toFixed(2);
    let ver2 = billAmt * value;
    // alert(ver2);

    console.log(calculateValue); //!check
    if (pplAmt !== "" && pplAmt !== 0) {
      console.log(pplAmt);
      let newCalc = (ver2 / pplAmt).toFixed(2);
      console.log(newCalc);
      msg.removeAttribute("hidden");
      document.getElementById("ans").innerHTML = newCalc;
      document.getElementById("each").innerHTML = "each";
    } else {
      msg.removeAttribute("hidden");
      document.getElementById("ans").innerHTML = calculateValue;
      document.getElementById("each").innerHTML = " ";
    }
  } else {
    alert("Please Enter Bill Amount");
  }
}
