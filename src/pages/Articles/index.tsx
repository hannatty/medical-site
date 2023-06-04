import SmallDivider from './SmallDivider';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Articles() {
    return (
      <div className={styles.general_container}>
        <h1 className={styles.section_title}>Artigos</h1>
        <ul className={styles.article_section}>
          <li className={styles.li_style}>
            <a className={styles.link_article} href="/FullArticle/Article1">
              <h3 className={styles.article_title}>O que é a tireoidite de Hashimoto?</h3>
              <span className={styles.article_resume}>A glândula tireoide desempenha funções muito importantes para manter o bom funcionamento do organismo....</span>
              <SmallDivider />
            </a>
          </li>
          <li className={styles.li_style}>
            <a className={styles.link_article}>
              <h3 className={styles.article_title}>9 sintomas de alterações nas pregas vocais</h3>
              <span className={styles.article_resume}>As pregas vocais, popularmente conhecidas como cordas vocais, estão localizadas no interior da laringe e são formadas por tecidos musculosos... </span>
              <SmallDivider />
            </a>
          </li>
          <li className={styles.li_style}>
            <a className={styles.link_article}>
              <h3 className={styles.article_title}>Como prevenir o câncer de laringe</h3>
              <span className={styles.article_resume}>Segundo a Organização Mundial da Saúde (OMS), o Brasil é um dos países com maior incidência de câncer de laringe...</span>
              <SmallDivider />
            </a>
          </li>
        </ul>
        <button>
          <Link href="/ArticlesList" className={styles.link_style}>Leia Mais</Link>
        </button>
      </div>
    )
  }