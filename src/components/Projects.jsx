import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const proyectos = t("projects.list", { returnObjects: true });

  return (
    <main className="projects">
      <h2 className="projects__title">{t("projects.section_title")}</h2>

      <ul className="projects__grid">
        {proyectos.map((proyecto, index) => (
          <li className="card" key={index}>
            <div className="card__image">
              <a
                href={proyecto.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="card__img-link"
              >
                <img
                  className="card__img"
                  src={proyecto.image}
                  alt={proyecto.title}
                />
              </a>
            </div>

            <div className="card__content">
              <h3 className="card__title">{proyecto.title}</h3>

              <p className="card__desc">
                <strong>{t("projects.challenge_label")}</strong>{" "}
                {proyecto.description}
              </p>

              <p className="card__achievement">
                <strong>{t("projects.achievement_label")}</strong>{" "}
                {proyecto.achievement}
              </p>

              <ul className="card__tags">
                {proyecto.technologies.map((tech, i) => (
                  <li className="card__tag" key={i}>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="card__actions">
                <a
                  href={proyecto.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="card__link card__link--repo"
                >
                  {proyecto.buttons.repo}
                </a>
                <a
                  href={proyecto.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="card__link card__link--demo"
                >
                  {proyecto.buttons.demo}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
