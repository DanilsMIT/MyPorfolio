export default class ProjectCard {
  #template;
  constructor(
    { title, description, technologies, repoUrl, demoUrl, image },
    template,
  ) {
    this.title = title;
    this.description = description;
    this.tecnologias = technologies; // Lo guardas en tu variable interna
    this.repositorio = repoUrl;
    this.proyecto = demoUrl;
    this.picture = image;
    this.#template = template;
  }

  #getTemplate(template) {
    //consigue el Template de un elemento <li>
    const objectTemplate = document
      .querySelector(template)
      .content.firstElementChild.cloneNode(true);
    return objectTemplate;
  }

  generateObject() {
    this.element = this.#getTemplate(this.#template);

    const titulo = this.element.querySelector(".card__title");
    const descripcion = this.element.querySelector(".card__desc");
    const repositorio = this.element.querySelector(".card__link--repo");
    const proyecto = this.element.querySelector(".card__link--demo");
    const imagen = this.element.querySelector(".card__img");
    const imagenLink = this.element.querySelector(".card__img-link");

    const tecnologias = this.element.querySelector(".card__tags");

    titulo.textContent = this.title;
    descripcion.textContent = this.description;
    repositorio.href = this.repositorio;
    proyecto.href = this.proyecto;
    imagen.src = this.picture;
    imagenLink.href = this.proyecto;
    this.tecnologias.forEach((tag) => {
      const tecnologia = this.#getTemplate("#tag-template");
      tecnologia.textContent = tag;
      tecnologias.append(tecnologia);
    });

    return this.element;
  }
}
