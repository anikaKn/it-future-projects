function getRate(currency) {
  if (currency === "USD") return 1;
  if (currency === "EUR") return 0.95;
  if (currency === "UAH") return 41.5;
  if (currency === "FIM") return 5.64;
  return null;
}
function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const fromRate = getRate(from);
  const to = document.getElementById("to").value;
  const toRate = getRate(to);
  console.log(amount);
  console.log(from);
  console.log(fromRate);
  console.log(to);
  console.log(toRate);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").textContent = "Insert correct number";
    return;
  }
  if (fromRate === null || toRate === null) {
    document.getElementById("result").textContent = "Convertation error";
    return;
  }

  const result = (amount / fromRate) * toRate;
  document.getElementById("result").textContent = `Результат  ${result} ${to}`;
}

function deposit() {
  const deposit = parseFloat(document.getElementById("deposit").value);
  const percent = 1;
  console.log(deposit);
  console.log(percent);

  const oneperc = deposit / 100;
  const resultdepo = deposit + oneperc;
  document.getElementById("resultdep").textContent = `Result: ${resultdepo}`;
}

function areafun() {
  areatype = document.querySelector('input[name="areatype"]:checked').value;
  console.log(areatype);
  const side_a = parseFloat(document.getElementById("side_a").value);
  const side_b = parseFloat(document.getElementById("side_b").value);
  console.log(side_a);
  console.log(side_b);

  const area_square = side_a * side_a;
  console.log();
  const area_rectangle = side_a * side_b;

  if (areatype == 0) {
    document.getElementById(
      "resultarea"
    ).textContent = `Result: ${area_square}`;
  } else if (areatype == 1) {
    document.getElementById(
      "resultarea"
    ).textContent = `Result: ${area_rectangle}`;
  }
}
