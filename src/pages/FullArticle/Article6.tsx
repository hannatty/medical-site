import HeaderName from "@/components/HeaderName";
import styles from './styles.module.scss';
import Image from "next/image";
import calendar_icon from '../../../public/calendar_icon.png';

export default function Article6() {
  return (
    <div className={styles.general_container}>
      <div>
        <HeaderName />
      </div>    
      <div className={styles.section_title}>
        <h1>O que é regeneração tecidual??</h1>
        <div className={styles.section_subtitle}>
          <Image src={calendar_icon} alt="ícone" className={styles.icon_style}></Image>
          <p>Publicado em 26/07/201</p>
        </div>
      </div>
      <div className={styles.topic_title}>
          <p>
            O organismo humano possui uma série de mecanismos para defender-se de agentes invasores, 
            doenças ou para se curar quando é lesionado. Dentre esses mecanismos, consta a regeneração 
            tecidual, sobre a qual falaremos neste artigo.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>Como acontece a regeneração tecidual? </h2>
          <p>
            A regeneração tecidual consiste na capacidade de determinados tecidos em reparar danos 
            causados por agentes invasores, ou por processos inflamatórios. O reparo pode ser de dois 
            tipos: a cicatrização e a regeneração.
            Falando sobre a regeneração propriamente dita, é importante citar que ela é uma propriedade 
            dos chamados órgãos parenquimatosos. Ou seja, aqueles que possuem uma estrutura sólida e não 
            possuem cavidades, como o fígado, o pâncreas e o baço, por exemplo. Nesses órgãos, as células 
            são estáveis, isto é, a atividade de se replicar é mínima.
            A regeneração também pode ser observada em tecidos com células lábeis, aquelas que estão 
            sempre se dividindo, continuamente. É o caso das células sanguíneas, chamadas de 
            hematopoiéticas, assim como as epiteliais, que formam a camada mais externa da pele.
            O processo de se regenerar consiste em recuperar regiões do tecido que tenham sido lesadas, 
            para que ele volte ao seu estado normal, saudável e em pleno funcionamento.
            Uma característica essencial da regeneração é o fato de que as células lesadas são 
            substituídas por outras do mesmo tipo, exatamente iguais, enquanto que na cicatrização, 
            por exemplo, o tecido original é substituído por um tecido conjuntivo.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            As fases da regeneração tecidual
          </h2>
          <p>
            O reparo de um tecido, seja por cicatrização ou regeneração, passa por três fases 
            principais: inflamatória, proliferativa e reparadora. 
            Vejamos mais detalhes a respeito de cada uma delas.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Fase inflamatória
          </h2>
          <p>
            Corresponde ao momento em que o tecido é lesado, desencadeando um processo inflamatório 
            local. Os sinais comuns da fase inflamatória são dor, aumento da temperatura no local e 
            edema. É possível que o tecido perca a sua funcionalidade no local afetado. 
            Essa primeira fase começa no exato momento em que o tecido recebe o impacto, 
            e pode ter continuidade por até sete dias.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Fase proliferativa
          </h2>
          <p>
            Também chamada de etapa reconstrutiva, é a fase em que as células entram no processo de 
            reprodução por mitose, para entrarem no lugar das células que foram mortas na lesão. 
            Normalmente, ela pode perdurar por até três semanas. As células que ficam ao redor da 
            lesão vão migrando para dentro dela por serem atraídas por elementos quimiotáticos.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Fase reparadora
          </h2>
          <p>
            A etapa final da regeneração tecidual também é chamada de remodelação e, 
            dependendo do caso, ela pode levar mais de um ano para ser finalizada por completo. 
            É nesse momento que o tecido lesado retoma as suas características originais.
            Esse processo de regeneração tecidual é mais facilmente observado quando você faz um 
            corte na pele, por exemplo. É claramente perceptível a fase inflamatória, quando a região 
            atingida dói e muda de coloração. Depois, a dor vai diminuindo, forma-se a famosa 
            “casquinha” e, quando ela cai naturalmente, o tecido epitelial já está completamente 
            regenerado.
          </p>
        </div>
      </div>
  )
}