import React from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  title: string;
  description: string;
}

const articles = [
  {
    title: 'O que é tireoidite de Hashimoto?',
    description: 'A glândula tireoide desempenha funções muito importantes para manter o bom funcionamento do organismo. Você sabia que existem vários problemas que podem afetar o seu desempenho, como a tireoidite de Hashimoto?',
  },
  {
    title: 'Tudo que você precisa saber sobre a Tireóide',
    description: 'A glândula tireoide é responsável por desempenhar importantes tarefas para o nosso organismo. Por isso, é necessário entender mais sobre o seu funcionamento e conhecer os principais distúrbios que podem afetá-la.',
  },
  {
    title: '9 sintomas de alterações nas pregas vocais',
    description: 'As pregas vocais, popularmente conhecidas como cordas vocais, estão localizadas no interior da laringe e são formadas por tecidos musculosos. Constituídas por fibras elásticas que vibram e se movimentam, elas são essenciais no processo de fonação.',
  },
  {
    title: 'Avaliação pré-operatória: a importância risco cirúrgico',
    description: 'A realização de uma intervenção cirúrgica traz aflição e ansiedade a quem será submetido a ela. Isso porque, por menores que sejam, existem riscos à vida do paciente. O sucesso da cirurgia depende da competência médica e de uma eficiente avaliação pré-operatória.',
  },
  {
    title: 'O que é regeneração tecidual?',
    description: 'O organismo humano possui uma série de mecanismos para defender-se de agentes invasores, doenças ou para se curar quando é lesionado. Dentre esses mecanismos, consta a regeneração tecidual, sobre a qual falaremos neste artigo.',
  },
  {
    title: 'Como prevenir o câncer de laringe',
    description: 'Segundo a Organização Mundial da Saúde (OMS), o Brasil é um dos países com maior incidência de câncer de laringe. O câncer de laringe é um tumor maligno no órgão da voz e da respiração. Esses tumores são formados por células que se multiplicam rapidamente e descontroladamente.',
  },
  // Adicione mais artigos, se necessário
];

const Articles_List = () => {
  return (
    <div style={{ width: '80vw', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <h1>Lista de Artigos</h1>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  );
};

export default Articles_List;
