function getRate(currency) {
  if (currency == "USD") return 1;
  if (currency == "EUR") return 0.95;
  if (currency == "UAH") return 41.5;
  if (currency == "GBP") return 0.8;
  if (currency == "JPY") return 150.62;
  return null;
}

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const fromRate = getRate(from);
  const to = document.getElementById("to").value;
  const toRate = getRate(to);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").textContent = "Write the correct amount";
    return;
  }
  if (fromRate === null || toRate === null) {
    document.getElementById("result").textContent = "Convertation error";
    return;
  }

  const result = (amount / fromRate) * toRate;
  document.getElementById("result").textContent = `Result: ${result.toFixed(
    2
  )} ${to}`;
}

function deposit_convert() {
  const deposite_percent = 7;
  const deposit = parseFloat(document.getElementById("deposit").value);
  const termin = parseFloat(document.getElementById("termin").value);
  const result = (termin * (deposit + (deposit * deposite_percent) / 100)) / 12;

  if (isNaN(deposit) || deposit <= 0) {
    document.getElementById("deposit_result").textContent =
      "Write the correct amount";
    return;
  }

  if (isNaN(termin) || termin <= 0) {
    document.getElementById("deposit_result").textContent =
      "Write the correct term";
    return;
  }

  document.getElementById(
    "deposit_result"
  ).textContent = `Result in ${termin} months: ${result.toFixed(2)}`;
}

function calculate_discount() {
  const price = parseFloat(document.getElementById("price").value);
  const percent = parseFloat(document.getElementById("percent").value);
  const result = price - (price * percent) / 100;

  if (isNaN(price) || price <= 0) {
    document.getElementById("discount_result").textContent =
      "Write the correct amount";
    return;
  }

  if (isNaN(percent) || percent <= 0 || percent > 100) {
    document.getElementById("discount_result").textContent =
      "Write the correct percent";
    return;
  }

  document.getElementById(
    "discount_result"
  ).textContent = `Result: ${result.toFixed(2)}`;
}
