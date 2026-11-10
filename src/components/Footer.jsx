import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer__text">{t("footer.dev_by")}</p>
      <p className="footer__text">
        daniloisaacdm@gmail.com
        <a
          href="https://wa.me/593994179193"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          +593 994179193
        </a>
      </p>
      <p className="footer__text">{t("footer.location")}</p>
      <p className="footer__text">
        <a
          className="footer__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DanilsMIT/MyPorfolio.git"
        >
          {t("footer.repo_link")}
        </a>
      </p>
    </footer>
  );
}
