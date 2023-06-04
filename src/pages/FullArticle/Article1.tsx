import HeaderName from "@/components/HeaderName";
import styles from './styles.module.scss';
import Image from "next/image";
import calendar_icon from '../../../public/calendar_icon.png';

export default function Article1() {
  return (
    <div className={styles.general_container}>
      <div>
        <HeaderName />
      </div>    
      <div className={styles.section_title}>
        <h1>O que é a Tireoidite de Hashimoto?</h1>
        <div className={styles.section_subtitle}>
          <Image src={calendar_icon} alt="ícone" className={styles.icon_style}></Image>
          <p>Publicado em 26/07/201</p>
        </div>
      </div>
      <div className={styles.topic_title}>
          <p>
            A glândula tireoide desempenha funções muito importantes para manter o bom funcionamento do organismo. 
            Você sabia que existem vários problemas que podem afetar o seu desempenho, como a tireoidite de Hashimoto?
            Continue a leitura deste post para aprender tudo sobre a condição, seus sintomas, causas e tratamento. Confira!
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>Entendendo o que é a Tireoidite de Hashimoto</h2>
          <p>
            Trata-se de uma inflamação crônica e autoimune da glândula tireóide. Esse é o tipo mais recorrente de tireoidite e ocorre em função de uma falha no sistema imunológico do paciente.
            De forma inadequada, o organismo produz anticorpos para combater as células da tireoide. Consequentemente, eles destroem a glândula ou a prejudicam, de modo a afetar o seu funcionamento.
            Em decorrência do ataque à glândula tireóide, o paciente pode apresentar deficiência na produção dos hormônios T3 e T4, adquirindo o hipotireoidismo.
            A tireoide está localizada na região do pescoço e tem o papel de produzir hormônios para controlar parte do funcionamento de todas as células do corpo.
            Em alguns casos, pessoas que adquirem essa doença podem sofrer com outros distúrbios endócrinos, tais como diabetes, hipoatividade da glândula ou paratireoides, anemia perniciosa, artrite reumatoide, síndrome de Sjogren ou, até mesmo, lúpus.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Sintomas Conhecidos
          </h2>
          <p>
            Os sintomas são os mesmos provocados pelo hipotireoidismo. O paciente costuma apresentar aumento rápido de peso, 
            cansaço excessivo, pele fria e pálida, prisão de ventre, sensibilidade ao frio, dor muscular ou nas articulações, 
            inchaço no pescoço e fraqueza nos cabelos e unhas.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Causas
          </h2>
          <p>
            Ainda não se sabe qual a causa dessa falha no sistema imunológico. Existe a hipótese de estar relacionada com alguma alteração genética, pois é comum que a doença ocorra em vários membros de uma mesma família.
            Outra possibilidade é que pode ser iniciada depois que o paciente for contaminado por um vírus ou uma bactéria, o que provocaria a inflamação crônica da glândula. 
            Além disso, a tireoidite de Hashimoto é uma doença mais comum em mulheres do que em homens. Ainda, sua prevalência aumenta na população acima dos 40 anos de idade.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Diagnóstico e Tratamento
          </h2>
          <p>
          O diagnóstico é realizado por meio do exame de sangue, chamado de teste de função da tireoide. Nele, os médicos medem os 
          níveis sanguíneos dos hormônios produzidos pela glândula (T3, T4 e TSH) para verificar como está seu funcionamento.
          O exame físico e a anamnese também são fundamentais para a obtenção de um diagnóstico preciso. Os sintomas do hipotireoidismo 
          são bem peculiares, o que facilita a confirmação da doença.
          O tratamento não é para a tireoidite de Hashimoto, e sim para o hipotireoidismo. Como há uma deficiência na produção hormonal, 
          o paciente precisa usar medicamentos de reposição durante toda a vida. A dose da suplementação de levotiroxina irá variar de 
          acordo com o nível de deficiência dos hormônios no sangue.
          </p>
        </div>
      </div>
  )
}