import HeaderName from '../../components/HeaderName';
import styles from './styles.module.scss';
import SmallDivider from '../Articles/SmallDivider';
import Link from 'next/link';


export default function ArticlesList() {
    return (
      <div className={styles.general_container}>
        <div>
          <HeaderName />
        </div>    
        <div className={styles.section_title}>
          <h1>Artigos</h1>
        </div>
        <div className={styles.articles_container}>
          <ul className={styles.article_section}>
          <li className={styles.li_style}>
            <Link className={styles.link_article} href="/FullArticle/Article1">
              <h3 className={styles.article_title}>O que é a tireoidite de Hashimoto?</h3>
              <span className={styles.article_resume}>A glândula tireoide desempenha funções muito importantes para manter o bom funcionamento do organismo....</span>
              <SmallDivider />
            </Link>
          </li>
          <li className={styles.li_style}>
            <Link className={styles.link_article}  href="/FullArticle/Article2">
              <h3 className={styles.article_title}>9 sintomas de alterações nas pregas vocais</h3>
              <span className={styles.article_resume}>As pregas vocais, popularmente conhecidas como cordas vocais, estão localizadas no interior da laringe e são formadas por tecidos musculosos... </span>
              <SmallDivider />
            </Link>
          </li>
          <li className={styles.li_style}>
            <Link className={styles.link_article} href="/FullArticle/Article3">
              <h3 className={styles.article_title}>Como prevenir o câncer de laringe</h3>
              <span className={styles.article_resume}>Segundo a Organização Mundial da Saúde (OMS), o Brasil é um dos países com maior incidência de câncer de laringe...</span>
              <SmallDivider />
            </Link>
          </li>
          <li className={styles.li_style}>
            <Link className={styles.link_article} href="/FullArticle/Article4">
              <h3 className={styles.article_title}>Tudo que você precisa saber sobre a Tireóide</h3>
              <span className={styles.article_resume}>A glândula tireoide é responsável por desempenhar importantes tarefas para o nosso organismo...</span>
              <SmallDivider />
            </Link>
          </li>
          <li className={styles.li_style}>
            <Link className={styles.link_article} href="/FullArticle/Article5">
              <h3 className={styles.article_title}>Avaliação pré-operatória: a importância do risco cirúrgico</h3>
              <span className={styles.article_resume}>A realização de uma intervenção cirúrgica traz aflição e ansiedade a quem será submetido a ela... </span>
              <SmallDivider />
            </Link>
          </li>
          <li className={styles.li_style}>
            <Link className={styles.link_article} href="/FullArticle/Article6">
              <h3 className={styles.article_title}>O que é regeneração tecidual?</h3>
              <span className={styles.article_resume}>O organismo humano possui uma série de mecanismos para defender-se de agentes invasores, doenças ou para se curar quando é lesionado...</span>
              <SmallDivider />
            </Link>
          </li>
        </ul>
        </div>
      </div>
    )
  }