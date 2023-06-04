import HeaderName from "@/components/HeaderName";
import styles from './styles.module.scss';
import Image from "next/image";
import calendar_icon from '../../../public/calendar_icon.png';

export default function Article3() {
  return (
    <div className={styles.general_container}>
      <div>
        <HeaderName />
      </div>    
      <div className={styles.section_title}>
        <h1>Como prevenir o Câncer de Laringe?</h1>
        <div className={styles.section_subtitle}>
          <Image src={calendar_icon} alt="ícone" className={styles.icon_style}></Image>
          <p>Publicado em 26/07/201</p>
        </div>
      </div>
      <div className={styles.topic_title}>
        <p>
          Segundo a Organização Mundial da Saúde (OMS), o Brasil é um dos países com maior incidência 
          de câncer de laringe. O câncer de laringe é um tumor maligno no órgão da voz e da respiração. 
          Esses tumores são formados por células que se multiplicam rapidamente e descontroladamente, 
          destruindo os órgãos e se espalhando para os linfonodos do pescoço (ínguas) e para os pulmões.
          A laringe pode ser dividida em três diferentes compartimentos: subglote, glote e supraglote. 
          É na glote que estão as cordas vocais e é esse o principal local de formação do câncer de 
          laringe. De acordo com estudos, 60% dos casos de câncer de laringe acometem a glote. O tipo 
          mais comum é o carcinoma das células escamosas, com predominância entre os 50 e 70 anos.
        </p>
      </div>
      <div className={styles.topic_title}>
        <h2>Principais Causas</h2>
        <p>
          Os principais fatores de risco para o câncer de laringe são a ingestão excessiva de 
          álcool e o cigarro. A associação entre tabagismo e uso habitual de bebidas alcoólicas 
          aumenta consideravelmente o risco de desenvolver a doença. Além disso, pacientes com 
          câncer de laringe que continuam a fumar e a beber têm probabilidade de cura diminuída 
          e aumento do risco de aparecimento de um segundo tumor primário na área de cabeça e pescoço.
          Outros fatores de risco mais raros são: exposições ocupacionais (a determinados produtos 
          químicos ou ao pó de madeira, por exemplo), dieta pobre em frutas e verduras, infecção por 
          HPV e refluxo gastroesofágico.
          A rouquidão é o principal sintoma e sinal de alerta para o câncer de laringe. Mas existem 
          outros sintomas, como: tumores no pescoço, dor e dificuldade para engolir, desconforto ou 
          sensação de “espinho” na garganta, dor de ouvido, sangramento ao tossir e falta de ar.
        </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Tratamento
          </h2>
          <p>
            O tratamento do câncer de laringe considera o estágio da doença e conta com os seguintes 
            recursos: quimioterapia, radioterapia e cirurgia. Quanto antes for feito o diagnóstico, 
            maiores serão as chances de cura que podem atingir índices superiores a 90% nos quadros 
            iniciais.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Como evitar o câncer de laringe
          </h2>
          <p>
            O primeiro passo para evitar a doença é excluir o uso do cigarro. Ele é o principal vilão 
            da doença e causador de vários problemas de saúde. Além disso, alguns cuidados no dia a dia 
            podem ajudar a evitar o câncer de laringe:
          </p>
          <ul>
            <li className={styles.list_style}>
              Articule bem as palavras: falar com calma e desenvolver uma impostação e ritmo de fala natural 
              são medidas que evitam a formação de nódulos e pólipos;
              </li>
            <li className={styles.list_style}>
              Invista na maçã: a fruta atua como adstringente e tonificante. Inclua também salsão na dieta, 
              ele ajuda a diminuir a viscosidade do muco nas pregas vocais e na região bucal, diminuindo a 
              formação de pigarro;
            </li>
            <li className={styles.list_style}>
              Tome bastante líquido: a hidratação é importante para as pregas vocais e para todos os órgãos 
              que compõem o aparelho fonador;
            </li>
          </ul>
        </div>
      </div>
  )
}