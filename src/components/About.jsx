import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">{t("about.title")}</h2>

        <div className="about__content">
          {/* Renderiza HTML seguro para las negritas del header */}
          <p
            className="about__paragraph about__paragraph-header"
            dangerouslySetInnerHTML={{ __html: t("about.header_html") }}
          />

          <div className="about__main-text">
            <p className="about__paragraph">{t("about.p1")}</p>
            <p className="about__paragraph">{t("about.p2")}</p>
          </div>

          <div className="about__details">
            <div className="about__card">
              <h3 className="about__card-title">{t("about.card1_title")}</h3>
              <p className="about__card-text">{t("about.card1_text")}</p>
            </div>
            <div className="about__card">
              <h3 className="about__card-title">{t("about.card2_title")}</h3>
              <p
                className="about__card-text"
                dangerouslySetInnerHTML={{ __html: t("about.card2_text_html") }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
