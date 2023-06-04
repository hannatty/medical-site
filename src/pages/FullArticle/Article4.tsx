import HeaderName from "@/components/HeaderName";
import styles from './styles.module.scss';
import Image from "next/image";
import calendar_icon from '../../../public/calendar_icon.png';

export default function Article4() {
  return (
    <div className={styles.general_container}>
      <div>
        <HeaderName />
      </div>    
      <div className={styles.section_title}>
        <h1>Tudo que você precisa saber sobre a Tireoide</h1>
        <div className={styles.section_subtitle}>
          <Image src={calendar_icon} alt="ícone" className={styles.icon_style}></Image>
          <p>Publicado em 26/07/201</p>
        </div>
      </div>
      <div className={styles.topic_title}>
        <p>
          A glândula tireoide é responsável por desempenhar importantes tarefas para o nosso organismo. 
          Por isso, é necessário entender mais sobre o seu funcionamento e conhecer os principais 
          distúrbios que podem afetá-la.
          Você sabe o que essa glândula faz? Então, não deixe de ler este post. 
          Nas próximas linhas, você aprenderá tudo o que precisa sobre o assunto!
        </p>
      </div>
      <div className={styles.topic_title}>
        <h2>O que é a glândula tireoide?</h2>
        <p>
          Trata-se de uma das maiores glândulas endócrinas do corpo humano e tem uma estrutura de dois 
          lobos na região próxima à traqueia. Ainda, está localizada na área anterior do pescoço e pesa 
          cerca de 15 a 30 gramas.
        </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Quais funções ela desempenha?
          </h2>
          <p>
            A tireoide é responsável por regular a função de importantes órgãos, como o coração, 
            o cérebro, o fígado e os rins. Além disso, tem função de produzir dois dos principais 
            hormônios do corpo, a triiodotironina (T3) e a tiroxina (T4).
            Esses hormônios atuam em diversas regiões do corpo. Veja, a seguir, algumas das funções 
            que eles desempenham:
          </p>
          <ul>
            <li className={styles.list_style}>
              Melhoram o funcionamento do intestino e reforçam a ação das catecolaminas;
            </li>
            <li className={styles.list_style}>
              São essenciais para o desenvolvimento e manutenção do sistema nervoso central;
            </li>
            <li className={styles.list_style}>
              Asseguram o fornecimento adequado de oxigênio aos tecidos por meio de interferências nos batimentos cardíacos;
            </li>
            <li className={styles.list_style}>
              Regulam a síntese das proteínas celulares, que são fundamentais para o crescimento e desenvolvimento dos músculos e dos ossos;
            </li>
            <li className={styles.list_style}>
              Controlam a geração de calor por meio de interferências no metabolismo e no consumo de oxigênio;
            </li>
            <li className={styles.list_style}>
              Atuam na transformação dos nutrientes em energia, mantendo o funcionamento normal do corpo e gerando combustível para a atividade física;
            </li>
            <li className={styles.list_style}>  
              Interagem com os hormônios da glândula hipófise e do aparelho reprodutor, regulando as funções reprodutivas.
            </li>
          </ul>
        </div>
        <div className={styles.topic_title}>
          <h2>
          Quais as doenças da Tireoide?
          </h2>
          <p>
            Além do que já foi citado, a glândula atua no controle do metabolismo e do crescimento do 
            corpo, influencia na frequência cardíaca, na temperatura e na transformação dos alimentos 
            em energia. Logo, qualquer disfunção no seu funcionamento, provoca grandes prejuízos à 
            saúde do paciente.
            As doenças que afetam essa glândula com maior frequência são:
          </p>
          <ul>
            <li>
              <h3>Hipotireoidismo</h3>
              <p>
                Caracterizada pelo funcionamento incorreto da glândula, é uma doença que pode ter 
                origem congênita, autoimune, inflamatória ou secundária. Com a baixa produção dos 
                hormônios, o metabolismo é desacelerado e provoca vários sintomas no paciente;
              </p>
            </li>
              <li>
                <h3>Hipertireoidismo</h3>
                <p>
                  É a situação inversa ao hipotireoidismo. Nesse caso, há um excesso dos hormônios T3 e 
                  T4, acelerando o metabolismo. A principal causa é a doença de Graves;
                </p>
              </li>
              <li>
                <h3>Tireoidite de Hashimoto</h3>
                <p>
                  Inflamação auto imune da glândula que lesiona as células e a impede de secretar os 
                  hormônios necessários para a circulação sanguínea. Ainda, pode causar o 
                  hipotireoidismo; 
                </p>
              </li>
              <li>
                <h3>Bócio</h3>
                <p>
                  Essa doença se caracteriza pelo aumento do volume na região do pescoço, onde a glândula está localizada, 
                  podendo ser causada pela deficiência de iodo, por uma inflamação ou pela formação de nódulos;
                </p>
              </li>
              <li>
                <h3>Doença de Graves</h3>
                <p>
                  Trata-se de um tipo de hipertireoidismo de causa autoimune que pode provocar o aumento da glândula, retração palpebral 
                  e a formação de placas avermelhadas sob a pele
                </p>
              </li>
              <li>
                <h3>Câncer</h3>
                <p>
                  Se caracteriza pela formação de um tumor maligno na glândula. Tem tratamento enquanto não se alastra para outras 
                  partes do corpo. 
                </p>
              </li>
            </ul>
            <p>
              Como você deve ter percebido, a glândula tireoide exerce funções fundamentais para nosso corpo e, ao mesmo tempo, pode ser acometida por diferentes tipos de doenças.
            </p>     
        </div>
      </div>
  )
}