let changehed = () => {
  let bill = document.getElementById("inpbill").value;
  let pers = document.getElementById("inpnbrp").value;
  let tothed = document.getElementById("hedtot");
  if (pers != 0) {
    tothed.innerText = "$" + parseFloat(bill / pers).toFixed(2);
  } else {
    tothed.innerText = "$" + "0.00";
  }
};

let res = () => {
  let bill = document.getElementById("inpbill");
  let pers = document.getElementById("inpnbrp");
  let tothed = document.getElementById("hedtot");
  let tiphed = document.getElementById("hedtip");
  let cstminpv = document.getElementById("cstminp");

  tothed.innerText = "$0.00";
  tiphed.innerText = "$0.00";
  bill.value = "";
  pers.value = "";
  cstminpv.value = "";

  let hedcstm = document.getElementById("cstmhed");
  hedcstm.style.display = "block";
  let cstminp = document.getElementById("cstminp");
  cstminp.style.display = "none";
};

let tips = () => {
  let bill = document.getElementById("inpbill").value;
  let tiphed = document.getElementById("hedtip");

  var currentEventTarget = event.currentTarget;

  switch (currentEventTarget.innerText) {
    case "5%":
      tiphed.innerText = "$" + parseFloat(bill * 0.05).toFixed(2);
      break;
    case "10%":
      tiphed.innerText = "$" + parseFloat(bill * 0.1).toFixed(2);
      break;
    case "15%":
      tiphed.innerText = "$" + parseFloat(bill * 0.15).toFixed(2);
      break;
    case "25%":
      tiphed.innerText = "$" + parseFloat(bill * 0.25).toFixed(2);
      break;
    case "50%":
      tiphed.innerText = "$" + parseFloat(bill * 0.5).toFixed(2);
      break;
  }
};

let disAndHide = () => {
  let hedcstm = document.getElementById("cstmhed");
  hedcstm.style.display = "none";
  let cstminp = document.getElementById("cstminp");
  cstminp.style.display = "block";
};

let cstmtip = () => {
  let cstminpv = document.getElementById("cstminp").value;
  let tiphed = document.getElementById("hedtip");
  let bill = document.getElementById("inpbill").value;

  tiphed.innerText = "$" + parseFloat(bill * (cstminpv / 100)).toFixed(2);
};
