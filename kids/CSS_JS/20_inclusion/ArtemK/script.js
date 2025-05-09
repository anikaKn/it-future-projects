function getRate(currency) {
  if (currency === "USD") return 1;
  if (currency === "EUR") return 0.95;
  if (currency === "UAH") return 41.5;
  if (currency === "VND") return 616.79;
  return null;
}

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const fromRate = getRate(from);
  const to = document.getElementById("to").value;
  const toRate = getRate(to);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").textContent = "Введіть суму";
    return;
  }
  if (fromRate === null || toRate === null) {
    document.getElementById("result").textContent = "Помилка!";
    return;
  }

  const result = (amount / fromRate) * toRate;
  document.getElementById("result").textContent = `Результат ${result.toFixed(
    2
  )} ${to}`;
}

function calculateDeposit() {
  const deposit = parseFloat(document.getElementById("depositAmount").value);
  const term = parseInt(document.getElementById("depositTerm").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100;

  if (
    isNaN(deposit) ||
    deposit <= 0 ||
    isNaN(term) ||
    term <= 0 ||
    isNaN(rate) ||
    rate <= 0
  ) {
    document.getElementById("depositResult").textContent =
      "Введіть коректні дані";
    return;
  }

  const profit = (deposit * rate * term) / 12;
  const total = deposit + profit;

  document.getElementById(
    "depositResult"
  ).textContent = `Отримаєте: ${profit.toFixed(2)} UAH; Всього: ${total.toFixed(
    2
  )} UAH`;
}

function getConversionRate(unit) {
  if (unit === "km") return 1;
  if (unit === "mile") return 0.621371;
  if (unit === "m") return 1000;
  if (unit === "cm") return 100000;
  return null;
}

function convertUnits() {
  const amount = parseFloat(document.getElementById("unitAmount").value);
  const from = document.getElementById("unitFrom").value;
  const fromRate = getConversionRate(from);
  const to = document.getElementById("unitTo").value;
  const toRate = getConversionRate(to);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("unitResult").textContent = "Введіть коректну суму";
    return;
  }
  if (fromRate === null || toRate === null) {
    document.getElementById("unitResult").textContent = "Помилка!";
    return;
  }

  const result = (amount * fromRate) / toRate;
  document.getElementById(
    "unitResult"
  ).textContent = `Результат: ${result.toFixed(2)} ${to}`;
}

function convertTime() {
  const seconds = parseFloat(document.getElementById("seconds").value);

  if (isNaN(seconds) || seconds < 0) {
    document.getElementById("timeResult").textContent =
      "Введіть коректну кількість секунд";
    return;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  document.getElementById(
    "timeResult"
  ).textContent = `Результат: ${hours} г ${minutes} хв ${remainingSeconds} с`;
}

function calculateDiscount() {
  const initialPrice = parseFloat(
    document.getElementById("initialPrice").value
  );
  const discountPercent = parseFloat(
    document.getElementById("discountPercent").value
  );

  if (
    isNaN(initialPrice) ||
    initialPrice <= 0 ||
    isNaN(discountPercent) ||
    discountPercent < 0
  ) {
    document.getElementById("discountResult").textContent =
      "Введіть коректні дані";
    return;
  }

  const discountAmount = (initialPrice * discountPercent) / 100;
  const finalPrice = initialPrice - discountAmount;

  document.getElementById(
    "discountResult"
  ).textContent = `Знижка: ${discountAmount.toFixed(
    2
  )}; Фінальна ціна: ${finalPrice.toFixed(2)}`;
}

function updateShapeInputs() {
  const shape = document.getElementById("shape").value;
  const shapeInputs = document.getElementById("shapeInputs");
  shapeInputs.innerHTML = "";

  if (shape === "circle") {
    shapeInputs.innerHTML = `
      <label for="radius">Радіус:</label>
      <input type="number" id="radius" aria-labelledby="title" aria-describedby="radius-help" autofocus />
      <br />
      <small id="radius-help">Введіть радіус кола</small>
    `;
  } else if (shape === "square") {
    shapeInputs.innerHTML = `
      <label for="side">Сторона:</label>
      <input type="number" id="side" aria-labelledby="title" aria-describedby="side-help" autofocus />
      <br />
      <small id="side-help">Введіть довжину сторони квадрата</small>
    `;
  } else if (shape === "rectangle") {
    shapeInputs.innerHTML = `
      <label for="length">Довжина:</label>
      <input type="number" id="length" aria-labelledby="title" aria-describedby="length-help" autofocus />
      <br />
      <small id="length-help">Введіть довжину прямокутника</small>
      <br />
      <label for="width">Ширина:</label>
      <input type="number" id="width" aria-labelledby="title" aria-describedby="width-help" />
      <br />
      <small id="width-help">Введіть ширину прямокутника</small>
    `;
  }
}

function calculateArea() {
  const shape = document.getElementById("shape").value;
  let area;

  if (shape === "circle") {
    const radius = parseFloat(document.getElementById("radius").value);
    if (isNaN(radius) || radius <= 0) {
      document.getElementById("areaResult").textContent =
        "Введіть коректний радіус";
      return;
    }
    area = Math.PI * radius * radius;
  } else if (shape === "square") {
    const side = parseFloat(document.getElementById("side").value);
    if (isNaN(side) || side <= 0) {
      document.getElementById("areaResult").textContent =
        "Введіть коректну довжину сторони";
      return;
    }
    area = side * side;
  } else if (shape === "rectangle") {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
      document.getElementById("areaResult").textContent =
        "Введіть коректні значення для довжини та ширини";
      return;
    }
    area = length * width;
  }

  document.getElementById("areaResult").textContent = `Площа: ${area.toFixed(
    2
  )}`;
}

function calculateHypotenuse() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);

  if (isNaN(sideA) || sideA <= 0 || isNaN(sideB) || sideB <= 0) {
    document.getElementById("hypotenuseResult").textContent =
      "Введіть коректні значення для сторін A та B";
    return;
  }

  const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
  document.getElementById(
    "hypotenuseResult"
  ).textContent = `Гіпотенуза: ${hypotenuse.toFixed(2)}`;
}

function calculateDiscriminant() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("discriminantResult").textContent =
      "Введіть коректні значення для a, b і c";
    document.getElementById("rootsResult").textContent = "";
    return;
  }

  const discriminant = b * b - 4 * a * c;
  document.getElementById(
    "discriminantResult"
  ).textContent = `Дискримінант: ${discriminant.toFixed(2)}`;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById(
      "rootsResult"
    ).textContent = `Корені: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    document.getElementById(
      "rootsResult"
    ).textContent = `Корінь: x = ${x.toFixed(2)}`;
  } else {
    document.getElementById(
      "rootsResult"
    ).textContent = `Коренів немає (дискримінант менший за 0)`;
  }
}
