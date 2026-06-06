import ProjectCard from "../scripts/ProjectCardClass.js";
import projectsDB from "../dataBase/ProjectCardsDB.js";

const listaObjetos = document.querySelector("#projects-container");

//renderizar seccion
function renderSection(items) {
  items.reverse().forEach((item) => {
    renderObject(item, listaObjetos);
  });
}

//renderizar Producto
function renderObject(object, container) {
  const objectClass = new ProjectCard(object, "#project-card-template");
  const objectElement = objectClass.generateObject();
  container.prepend(objectElement);
}

renderSection(projectsDB);
