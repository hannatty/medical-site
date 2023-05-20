import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import surg_icon from '../../../public/surg_icon.png';

export default function Content() {
  const [repositories, setRepositories] = useState<Array<{ title: string; description: string;}>>([]);

  const repositoryData = [
    {
      title: 'Cordectomia',
      description: 'Cirurgia através da boca para remoção de tumores nas cordas vocais ou outras estruturas da garganta, utilizando microscópio ou aparelhos de video com auxílio de laser. Em casos avançados, pode ser necessário a remoção de parte ou até de toda a laringe.',
    },
    {
      title: 'Laringectomias',
      description: 'Procedimento cirúrgico que envolve a remoção parcial ou total da laringe, que é a caixa da voz. Essa cirurgia é geralmente realizada para tratar tumores malignos na região da laringe ou em casos graves de outras condições que afetam essa estrutura.',
    },
    {
      title: 'Tireoidectomias',
      description: 'Remoção total ou parcial da glândula tireóide em caso de tumores benignos grandes, hipertireoidismo de difícil controle ou tumores malignos. É realizada por técnica convencional ou através de uma incisão pela boca sem gerar cicatriz visível.',
    },
    {
      title: 'Parotidectomia',
      description: 'Remoção da glândula parótida. Essa cirurgia é geralmente realizada para tratar tumores ou lesões nesta glândula, que podem ser benignos (não cancerosos) ou malignos (cancerosos). A parotidectomia pode ser realizada para remover a glândula total ou parcialmente, dependendo da extensão e natureza do problema.',
    },
    {
      title: 'Sialoendoscopia',
      description: 'Técnica minimamente invasiva que consiste em remover pequenas pedrinhas (sialolitíase) que impedem a eliminação da saliva pelas Glândulas salivares através de um aparelho de video extremamente fino e delicado. Também pode ser indicada em casos de inflamação recorrente sem resolução com o tratamento clínico.',
    },
    {
      title: 'Remoção de tumores na boca',
      description: 'O tratamento do câncer de boca quase sempre deve ser feito com cirurgia associada ou não a outros tratamentos como Radioterapia ou Quimioterapia. Quando se identificam lesões suspeitas nessa região, a remoção deve ser precoce para evitar a progressão da doença e garantir melhores resultados.',
    }
  ];

  useEffect(() => {
    setRepositories(repositoryData);
  }, []);

  return (
    <>
      <div className={styles.SurgeriesContainer}>
        <div>
          <h3 className={styles.SurgeriesTitle}>Principais Cirurgias</h3>
          </div>
        <div className={styles.cardsRepoContainer}>
          {repositories.map((repo, index) => {
            return (
              <div key={index} className={styles.cardRepo}>
                <div className={styles.cardImgContainer}>
                    <Image className={styles.cardRepoImage} src={surg_icon} alt="icon"/>
                </div>
                <details>
                  <summary className={styles.cardRepoSummary}>{repo.title}</summary>
                  <p className={styles.cardRepoText}>{repo.description}</p>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
