window.onload = function () {
  class UnicornGame {
    constructor() {
      this.unicorn = document.getElementById("unicorn");
      this.irs = document.getElementById("irs");
      this.rainbow = document.getElementById("rainbow");
      this.dollar = document.getElementById("dollar");
      this.scoreEl = document.getElementById("score");
      this.score = 0;
      this.unicornX = window.innerWidth / 2 - 25;
      this.unicornY = window.innerHeight / 2 - 25;
      this.updateUnicornPosition();
      this.placeRainbow();
      this.placeDollar();
      this.checkCollisionLoop();
      this.moveEnemy();
      document.addEventListener("keydown", (e) => this.moveUnicorn(e));
      this.gameDuration = 30 * 1000; // 30 секунд
      setTimeout(() => {
        this.endGame();
      }, this.gameDuration);
    }
    updateUnicornPosition() {
      this.unicorn.style.left = `${this.unicornX}px`;
      this.unicorn.style.top = `${this.unicornY}px`;
    }
    placeRainbow() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 40);
      this.rainbow.style.left = `${x}px`;
      this.rainbow.style.top = `${y}px`;
    }
    placeDollar() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 40);
      this.dollar.style.left = `${x}px`;
      this.dollar.style.top = `${y}px`;
    }
    moveUnicorn(e) {
      if (e.key === "ArrowLeft") this.unicornX -= 20;
      if (e.key === "ArrowRight") this.unicornX += 20;
      if (e.key === "ArrowDown") this.unicornY += 20;
      if (e.key === "ArrowUp") this.unicornY -= 20;
      console.lo;
      // Додайте код для всіх стілок (Напр. ArrowUp, ArrowDown). Відрізнятися буде назва клавіші, unicornY\unicornX  та знак перед дорівнює (плюс чи мінус)

      this.unicornX = Math.max(
        0,
        Math.min(window.innerWidth - 50, this.unicornX)
      );
      this.unicornY = Math.max(
        0,
        Math.min(window.innerHeight - 50, this.unicornY)
      );
      this.updateUnicornPosition();
    }

    moveEnemy() {
      let enemyY = 0;
      let enemyX = 0; // Початкова вертикальна позиція ворога
      const move = setInterval(() => {
        enemyY += 5;
        enemyX += 5; // Рухаємо ворога вниз
        if (enemyY > window.innerHeight) {
          enemyY = 0; // Якщо ворог виходить за межі екрану, повертаємо його на верх
          this.irs.style.left = `${Math.random() * (window.innerWidth - 40)}px`; // Випадкова горизонтальна позиція
        }
        if (enemyX > window.innerHeight) {
          enemyX = 0; // Якщо ворог виходить за межі екрану, повертаємо його на верх
          this.irs.style.right = `${
            Math.random() * (window.innerWidth - 40)
          }px`; // Випадкова горизонтальна позиція
        }
        this.irs.style.left = `${enemyX}px`;
        this.irs.style.top = `${enemyY}px`; // Оновлюємо позицію ворога
        // Перевірка на зіткнення з ворогом вже всередині moveEnemy()
        const unicornRect = this.unicorn.getBoundingClientRect();
        const irsRect = this.irs.getBoundingClientRect();
        if (
          unicornRect.left < irsRect.right &&
          unicornRect.right > irsRect.left &&
          unicornRect.top < irsRect.bottom &&
          unicornRect.bottom > irsRect.top
        ) {
          this.score = 0;
          console.log("UH OH, ENTERPRENUER, IRS GOT YOU");

          this.scoreEl.textContent = this.score; // обнуляємо бали при зіткненні
        }
      }, 100); // Оновлюємо позицію ворога кожні 50 мілісекунд
    }

    checkCollisionLoop() {
      this.collisionInterval = setInterval(() => {
        const unicornRect = this.unicorn.getBoundingClientRect();
        const rainbowRect = this.rainbow.getBoundingClientRect();
        const dollarRect = this.dollar.getBoundingClientRect();

        if (
          unicornRect.left < rainbowRect.right &&
          unicornRect.right > rainbowRect.left &&
          unicornRect.top < rainbowRect.bottom &&
          unicornRect.bottom > rainbowRect.top
        ) {
          this.score++;
          this.scoreEl.textContent = this.score;
          this.placeRainbow();
        }
        if (
          unicornRect.left < dollarRect.right &&
          unicornRect.right > dollarRect.left &&
          unicornRect.top < dollarRect.bottom &&
          unicornRect.bottom > dollarRect.top
        ) {
          this.score++;
          this.score++;
          this.score++;
          this.scoreEl.textContent = this.score;
          this.placeDollar();
        }
      }, 100);
    }
    endGame() {
      clearInterval(this.collisionInterval);
      if (this.score > 0) {
        alert(`YOU EARNED ${this.score} DOLLARS. WELL ARENT YOU A [BIGSHOT]`);
      } else {
        alert(`YOU EARNED ${this.score} DOLLARS. WELL ARENT YOU A [LOSER]`);
      } // Зупиняємо перевірку зіткнень
    }
  }
  new UnicornGame();
};
