window.onload = function () {
  class UnicornGame {
    constructor() {
      this.squidward = document.getElementById("squidward");
      this.patrick = document.getElementById("patrick");
      this.spongebob = document.getElementById("spongebob");
      this.scoreEl = document.getElementById("score");
      this.score = 0;
      this.unicornX = window.innerWidth / 2 - 25;
      this.unicornY = window.innerHeight / 2 - 25;
      this.updateUnicornPosition();
      this.placeRainbow();
      this.placeSpongeBob();
      document.addEventListener("keydown", (e) => this.moveUnicorn(e));
      this.checkCollisionLoop();
      this.gameDuration = 30 * 1000; // 30 секунд
      setTimeout(() => {
        this.endGame();
      }, this.gameDuration);
    }
    updateUnicornPosition() {
      this.squidward.style.left = `${this.unicornX}px`;
      this.squidward.style.top = `${this.unicornY}px`;
    }
    placeRainbow() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 40);
      this.patrick.style.left = `${x}px`;
      this.patrick.style.top = `${y}px`;
    }
    placeSpongeBob() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 40);
      this.spongebob.style.left = `${x}px`;
      this.spongebob.style.top = `${y}px`;
    }
    moveUnicorn(e) {
      if (e.key === "a") this.unicornX -= 20;
      if (e.key === "d") this.unicornX += 20;
      if (e.key === "w") this.unicornY -= 20;
      if (e.key === "s") this.unicornY += 20;
      this.unicornX = Math.max(0, Math.min(window.innerWidth - 50, this.unicornX));
      this.unicornY = Math.max(0, Math.min(window.innerHeight - 50, this.unicornY));

      this.updateUnicornPosition();
    }
    checkCollisionLoop() {
      this.collisionInterval = setInterval(() => {
        const unicornRect = this.squidward.getBoundingClientRect();
        const rainbowRect = this.patrick.getBoundingClientRect();
        const spongebobRect = this.spongebob.getBoundingClientRect();
        if (
          unicornRect.left < rainbowRect.right &&
          unicornRect.right > rainbowRect.left &&
          unicornRect.top < rainbowRect.bottom &&
          unicornRect.bottom > rainbowRect.top
          // замініть смайли на перевірки по верху top і низу bottom
        ) {
          this.score++;
          this.scoreEl.textContent = this.score;
          this.placeRainbow();
        } else if (unicornRect.left < spongebobRect.right && unicornRect.right > spongebobRect.left && unicornRect.top < spongebobRect.bottom && unicornRect.bottom > spongebobRect.top) {
          this.score += 3;
          this.scoreEl.textContent = this.score;
          this.placeSpongeBob();
        }
      }, 100);
    }
    endGame() {
      clearInterval(this.collisionInterval); // Зупиняємо перевірку зіткнень
      alert(`Time out! Your result is ${this.score}`);
    }
  }
  new UnicornGame();
};
