const form = document.getElementById("form");
const title = document.getElementById("title-form");
const image = document.getElementById("image");
const text = document.getElementById("text");

title.addEventListener("keydown", (event) => {
  checkInputs();
});

image.addEventListener("keydown", (event) => {
  checkInputs();
});

text.addEventListener("keydown", (event) => {
  checkInputs();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkInputs()) {
    saveBook(image.value.trim(), title.value.trim(), text.value.trim());
  }
});

function checkInputs() {
  const titleValue = title.value.trim();
  const imageValue = image.value.trim();
  const textValue = text.value.trim();
  let success = true;

  if (titleValue === "" || titleValue === null) {
    //mostrar erro
    //adicionar classe error
    errorValidation(title, "Preencha esse campo");
    success = false;
  } else if (titleValue.length < 4) {
    //mostrar erro
    //adicionar classe error
    errorValidation(title, "Campo deve conter mais de 4 caracteres");
    success = false;
  } else {
    //adicionar classe sucesso
    successValidation(title);
  }

  if (imageValue === "" || imageValue === null) {
    //mostrar erro
    //adicionar classe error
    errorValidation(image, "Preencha esse campo");
    success = false;
  } else {
    //adicionar classe sucesso
    successValidation(image);
  }
  if (textValue === "" || textValue === null) {
    //mostrar erro
    //adicionar classe error
    errorValidation(text, "Preencha esse campo");
    success = false;
  } else if (textValue.length < 4) {
    errorValidation(text, "Esse campo precisa ter mais de 4 caracteres");
    success = false;
  } else {
    //adicionar classe sucesso
    successValidation(text);
  }

  if (success) {
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = true;
  }

  return success;
}
function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control sucess";
}

function saveBook(imageUrl, title, details) {
  //Criando elementos
  const cardsDiv = document.getElementById("cards");
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const containerCardDiv = document.createElement("div");
  containerCardDiv.classList.add("container-card");
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  const titleElement = document.createElement("h3");
  titleElement.innerText = title;
  const detailsElement = document.createElement("p");
  detailsElement.innerText = details;
  //Adicionando children
  cardsDiv.appendChild(cardDiv);
  cardDiv.appendChild(containerCardDiv);
  cardDiv.appendChild(detailsDiv);
  containerCardDiv.appendChild(imageElement);
  detailsDiv.appendChild(titleElement);
  detailsDiv.appendChild(detailsElement);

  closeModal("modal-container");
}

//abrir modal
window.addEventListener(
  "resize",
  function (event) {
    let menu = document.getElementById("menu");
    if (window.innerWidth <= 768) menu.style.display = "none";
    else menu.style.display = "flex";
  },
  true
);

function openModal(mn) {
  let modal = document.getElementById(mn);
  if (typeof modal == "undefined" || modal == null) return;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeModal(mn) {
  let modal = document.getElementById(mn);
  if (typeof modal == "undefined" || modal == null) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function menuToggle() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
// const details = document.getElementByClass("details");

// const ellipsis = (details) => {
//   const characters = 10;

//   return details.length >= characters
//     ? `${details.substr(0, characters)}...`
//     : details;
// };
