import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (idioma) => {
    i18n.changeLanguage(idioma);
  };

  const esEspanol = i18n.language.startsWith("es");

  return (
    <>
      <div className="lang-switcher">
        <button className="lang-btn">
          <span className="lang-current-flag">{esEspanol ? "🇪🇨" : "🇺🇸"}</span>
          <span>{esEspanol ? "Español" : "English"}</span>
          <svg
            className="lang-arrow"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <ul className="lang-dropdown">
          <li>
            <a
              href="#"
              className={esEspanol ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                cambiarIdioma("es");
              }}
            >
              <span className="lang-flag-option">🇪🇨</span> Español
            </a>
          </li>
          <li>
            <a
              href="#"
              className={!esEspanol ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                cambiarIdioma("en");
              }}
            >
              <span className="lang-flag-option">🇺🇸</span> English
            </a>
          </li>
        </ul>
      </div>

      <header className="presentation">
        <div className="presentation__bg-wrapper">
          <ul className="presentation__contenedor-imagenes">
            <li className="presentation__slide">
              <img
                className="presentation__slide-img"
                src="/imagenes/wallpaper.jpeg"
                alt="Background"
              />
            </li>
          </ul>
        </div>

        <div className="presentation__overlay"></div>

        <div className="presentation__container">
          <div className="presentation__image">
            <img
              className="presentation__img"
              src="/imagenes/DME.png"
              alt="Danilo Isaac"
            />
          </div>
          <div className="presentation__text">
            <h1 className="presentation__title">{t("hero.title")}</h1>
            <h2 className="presentation__subtitle">{t("hero.subtitle")}</h2>
            <p className="presentation__description">{t("hero.description")}</p>

            <div className="presentation__links">
              <a
                href="https://github.com/DanilsMIT"
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                {t("hero.buttons.github")}
              </a>
              <a
                href="https://linkedin.com/in/daniloisaacmelgar"
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                {t("hero.buttons.linkedin")}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
