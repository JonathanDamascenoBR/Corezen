function revelarSite() {
  const hero = document.getElementById("hero");
  const header = document.querySelector("header");

  // Fixa o header no lugar antes da animação
  header.style.position = "fixed";
  header.style.top = "0";
  header.style.display = "none";

  hero.style.transition = "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  hero.style.transform = "translateY(-100%)";
  hero.style.opacity = "0";

  // Remove o hero depois da animação terminar
  setTimeout(() => {
    hero.style.display = "none";
  }, 1000);
}

// endpoint Back-end

const MENU_API = "/Back-End/menu.json";

async function renderMenu() {
  //   console.log("Render Menu acessado!");

  // Realizar fetch no endpoint back-end
  let resposta = await fetch(MENU_API);
  //   console.log(resposta);

  // Converte em um array de objeto que podem ser manipulados pelo JS
  let dadosMenu = await resposta.json();
  //   console.log(dadosMenu);

  let navMenus = document.querySelectorAll("nav");
  console.log(navMenus);

  navMenus.forEach((navMenu) => {
    dadosMenu.forEach((itemMenu) => {
      if (itemMenu.active) {
        const opTarget = itemMenu.external ? 'target="_blank"' : "";
        navMenu.innerHTML += `
        <a href="${itemMenu.link}" class="hover:text-sky-300" >
        ${itemMenu.title}
        </a>
    `;
      }
    });
  });
}
renderMenu();

let menuToggle = document.getElementById("menu-toggle");
let menuMobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  // console.log("Clique no sandwich");
  const showMenu = menuMobile.classList.contains("-translate-y-full");

  if (showMenu) {
    menuMobile.classList.remove("-translate-y-full");
    menuMobile.classList.remove("invisible");
    overlay.classList.remove("opacity-0");
    overlay.classList.remove("invisible");
  } else {
    menuMobile.classList.add("-translate-y-full");
    menuMobile.classList.add("invisible");
    overlay.classList.add("opacity-0");
    overlay.classList.add("invisible");
  }
});
