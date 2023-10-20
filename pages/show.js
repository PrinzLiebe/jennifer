let present = document.querySelector("#present");

let showPresent = (ev) => {
  let main = document.querySelector(".presentMode");
  document.querySelector(".open-menssage").remove();
  let btn = ev.currentTarget;
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let div = document.createElement("div");
  let shadowBox = document.querySelector(".shadowBox");

  p1.id = "paragOne";
  p1.className = "parag";
  p1.innerText =
    "Feliz Aniversário Jenni! Deus abençoe esse dia especial, que seja um dia maravilhoso";

  p2.id = "paragTwo";
  p2.className = "parag";
  p2.innerText =
    "Muito obrigado por sempre ser uma ótima amiga, saiba que você é uma pessoa muito especial para mim, sempre que precisar pode contar comigo, espero poder comemorar muitos outros aniversários com você";

  p3.id = "paragThree";
  p3.className = "parag";
  p3.innerHTML =
    "Desejo todo sucesso e felicidades para você e que possamos compartilhar ainda muitos momentos ótimos!&#x1F496";

  div.id = "paragContainer";

  main.classList.remove("presentMode");
  main.classList.add("surpriseMode");

  btn.remove();

  div.append(p1, p2, p3);
  shadowBox.appendChild(div);
};

present.addEventListener("click", showPresent);
