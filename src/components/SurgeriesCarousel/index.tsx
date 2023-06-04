import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Content() {
  const [repositories, setRepositories] = useState<Array<{ title: string; description: string; image: string }>>([]);

  const repositoryData = [
    {
      title: 'Tireoidectomias',
      description: 'Remoção total ou parcial da glândula tireóide em caso de tumores benignos grandes, hipertireoidismo de difícil controle ou tumores malignos. É realizada por técnica convencional ou através de uma incisão pela boca sem gerar cicatriz visível.',
      image: '/../../public/images/Diaseses/tireoidectomia.png'
    },
    {
      title: 'Cordectomia ou Laringectomias',
      description: 'Cirurgia através da boca para remoção de tumores nas cordas vocais ou outras estruturas da garganta, utilizando microscópio ou aparelhos de video com auxílio de laser. Em casos avançados, pode ser necessário a remoção de parte ou até de toda a laringe.',
      image: '/../../public/images/Diaseses/cordectomia.png'
    },
    {
      title: 'Sialoendoscopia',
      description: 'Técnica minimamente invasiva que consiste em remover pequenas pedrinhas (sialolitíase) que impedem a eliminação da saliva pelas Glândulas salivares através de um aparelho de video extremamente fino e delicado. Também pode ser indicada em casos de inflamação recorrente sem resolução com o tratamento clínico.',
      image: '/../../public/images/Diaseses/sialoendoscopia.png'
    },
    {
      title: 'Remoção de tumores na boca',
      description: 'O tratamento do câncer de boca quase sempre deve ser feito com cirurgia associada ou não a outros tratamentos como Radioterapia ou Quimioterapia. Quando se identificam lesões suspeitas nessa região, a remoção deve ser precoce para evitar a progressão da doença e garantir melhores resultados.',
      image: '/../../public/images/Diaseses/tumorBoca.png'
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
                    <Image className={styles.cardRepoImage} src={repo.image} alt="icon" width={170} height={109} />
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
