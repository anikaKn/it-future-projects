window.onload = function () {
  class ArthurGame {
    constructor() {
      this.arthur = document.getElementById("arthur");
      this.dexter = document.getElementById("dexter");
      this.rita = document.getElementById("rita");
      this.enemy = document.getElementById("enemy");
      this.scoreEl = document.getElementById("score");
      this.score = 0;
      this.arthurX = window.innerWidth / 2 - 25;
      this.arthurY = window.innerHeight / 2 - 25;
      this.updateArthurPosition();
      this.placeDexter();
      this.placeRita();
      this.checkCollisionLoop();
      this.moveEnemy();

      this.gameDuration = 30 * 1000;
      setTimeout(() => {
        this.endGame();
      }, this.gameDuration);

      document.addEventListener("keydown", (e) => this.moveArthur(e));
    }

    updateArthurPosition() {
      this.arthur.style.left = `${this.arthurX}px`;
      this.arthur.style.top = `${this.arthurY}px`;
    }

    placeDexter() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 40);
      this.dexter.style.left = `${x}px`;
      this.dexter.style.top = `${y}px`;
    }

    placeRita() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 40);
      this.rita.style.left = `${x}px`;
      this.rita.style.top = `${y}px`;
    }

    moveArthur(e) {
      if (e.key === "ArrowLeft") this.arthurX -= 20;
      if (e.key === "ArrowRight") this.arthurX += 20;
      if (e.key === "ArrowUp") this.arthurY -= 20;
      if (e.key === "ArrowDown") this.arthurY += 20;

      this.arthurX = Math.max(
        0,
        Math.min(window.innerWidth - 50, this.arthurX)
      );
      this.arthurY = Math.max(
        0,
        Math.min(window.innerHeight - 50, this.arthurY)
      );
      this.updateArthurPosition();
    }

    checkCollisionLoop() {
      this.collisionInterval = setInterval(() => {
        const arthurRect = this.arthur.getBoundingClientRect();
        const dexterRect = this.dexter.getBoundingClientRect();
        const ritaRect = this.rita.getBoundingClientRect();
        const enemyRect = this.enemy.getBoundingClientRect();

        if (
          arthurRect.left < dexterRect.right &&
          arthurRect.right > dexterRect.left &&
          arthurRect.top < dexterRect.bottom &&
          arthurRect.bottom > dexterRect.top
        ) {
          this.score++;
          this.scoreEl.textContent = this.score;
          this.placeDexter();
        }

        if (
          arthurRect.left < ritaRect.right &&
          arthurRect.right > ritaRect.left &&
          arthurRect.top < ritaRect.bottom &&
          arthurRect.bottom > ritaRect.top
        ) {
          this.score += 3;
          this.scoreEl.textContent = this.score;
          this.placeRita();
        }

        if (
          arthurRect.left < enemyRect.right &&
          arthurRect.right > enemyRect.left &&
          arthurRect.top < enemyRect.bottom &&
          arthurRect.bottom > enemyRect.top
        ) {
          this.score = 0;
          this.scoreEl.textContent = this.score;
          clearInterval(this.collisionInterval);
          clearInterval(this.enemyInterval);
          alert("Ой! Ти зіткнувся з спец агентом Ленді. Рахунок обнулено!");
          new ArthurGame();
          // я це зробив щоб гра не зависала на починалась заново
        }
      }, 100);
    }

    moveEnemy() {
      let enemyY = 0;
      this.enemy.style.left = `${Math.random() * (window.innerWidth - 40)}px`;

      this.enemyInterval = setInterval(() => {
        enemyY += 5;
        if (enemyY > window.innerHeight) {
          enemyY = 0;
          this.enemy.style.left = `${
            Math.random() * (window.innerWidth - 40)
          }px`;
        }
        this.enemy.style.top = `${enemyY}px`;
      }, 50);
    }

    endGame() {
      clearInterval(this.collisionInterval);
      clearInterval(this.enemyInterval);
      alert("🎉 Гру завершено! Твій фінальний рахунок: " + this.score);
    }
  }

  new ArthurGame();
};
