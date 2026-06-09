function revelarSite() {
        const hero = document.getElementById("hero");
        const header = document.querySelector("header");

        // Fixa o header no lugar antes da animação
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.display = "none";

        hero.style.transition =
          "transform 1s ease-in-out, opacity 0.8s ease-in-out";
        hero.style.transform = "translateY(-100%)";
        hero.style.opacity = "0";

        // Remove o hero depois da animação terminar
        setTimeout(() => {
          hero.style.display = "none";
        }, 1000);
      }