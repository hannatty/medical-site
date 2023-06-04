import HeaderName from "@/components/HeaderName";
import styles from './styles.module.scss';
import Image from "next/image";
import calendar_icon from '../../../public/calendar_icon.png';

export default function Article2() {
  return (
    <div className={styles.general_container}>
      <div>
        <HeaderName />
      </div>    
      <div className={styles.section_title}>
        <h1>9 sintomas de alterações nas pregas vocais</h1>
        <div className={styles.section_subtitle}>
          <Image src={calendar_icon} alt="ícone" className={styles.icon_style}></Image>
          <p>Publicado em 26/07/201</p>
        </div>
      </div>
      <div className={styles.topic_title}>
          <p>
          As pregas vocais, popularmente conhecidas como cordas vocais, estão localizadas no interior 
          da laringe e são formadas por tecidos musculosos. Constituídas por fibras elásticas que 
          vibram e se movimentam, elas são essenciais no processo de fonação. As pregas vibram devido 
          ao ar vindo do pulmão. Essa movimentação é o que provoca a produção do som. 
          A articulação da boca em conjunto com a caixa de ressonância completa esse processo de 
          emissão da voz.
          Quando existe alguma alteração nas cordas vocais, o som emitido pela voz pode sofrer 
          alteração.
          </p>
        </div>
        <div className={styles.topic_title}>
          <h2>Sintomas mais comuns</h2>
          <p>
            Sintomas de alterações nas pregas vocais podem surgir por diversos fatores. 
            Os sinais mais comuns de que há algo de errado com as cordas vocais são:
          </p>
            <ol>
              <li>Rouquidão</li>
              <li>Voz com baixa intensidade</li>
              <li>Voz áspera</li>
              <li>Dor ao falar</li>
              <li>Voz que se cansa facilmente</li>
              <li>Perda da voz</li>
              <li>Dificuldade de respirar e engolir</li>
              <li>Alterações no tom da voz</li>
              <li>Voz que não consegue se projetar</li>
            </ol>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Causas
          </h2>
          <p>
            Diversos fatores podem causar alterações na voz. Entre eles, estão:  
          </p>     
            <ul>
              <li>
                <h3>Nódulos</h3>
                <p>
                  São comuns em pessoas que utilizam a voz como instrumento de trabalho, 
                  como em cantores, professores e radialistas. Os nódulos são protuberâncias duras 
                  e são ocasionadas pelo abuso da voz.
                  </p>
              </li>
              <li>
                <h3>Pólipos</h3>
                <p>
                  São provocados por exposição prolongada a agentes considerados irritantes, 
                  como o cigarro ou pelo abuso da voz.
                </p>
              </li>
              <li>
                <h3>Úlceras de Contato</h3>
                <p>
                Não tão comuns, as úlceras são feridas nas cordas vocais. Elas aparecem quando existe 
                esforço vocal ao falar. O refluxo gastroesofágico também pode causar e agravar essas 
                feridas. 
                  </p>
              </li>
              <li>
                <h3>Inflamações</h3>
                <p>
                  Inflamações como laringite também causam alterações nas cordas vocais. 
                  Elas podem ser ocasionadas por abuso vocal, alergias, infecções, refluxo 
                  gastroesofágico, uso de álcool e cigarro.
                </p>
              </li>
              <li>
                <h3>Paralisia</h3>
                <p>
                  Acontece quando há uma lesão nos nervos que comandam as pregas. A paralisia pode 
                  ser causada por problemas cardíacos, tumores localizados próximos às pregas e 
                  cirurgias. Ela acontece quando as cordas vocais não conseguem se movimentar 
                  normalmente, o que acaba afetando a projeção da voz. Essa condição pode acontecer 
                  em uma ou em ambas cordas vocais e ser total ou parcial. Quando a paralisia é total, 
                  a respiração é, também, prejudicada.
                </p>
              </li>
              <li>
                <h3>Tumores</h3>
                <p>
                  Para causar alterações na voz, o tumor pode ou não estar localizado nas cordas vocais,
                  ou seja, ele pode se originar na laringe ou na hipofaringe. O problema é que, quando 
                  surge em outro local e afeta a voz, o tumor encontra-se em estágio avançado e pode 
                  até ter sofrido o processo de metástase, chegando às cordas vocais. Os tumores nessa 
                  região geralmente são causados pelo uso excessivo de cigarro e álcool. 
                </p>
              </li>
            </ul>     
          <p>
            Algumas pessoas estão mais suscetíveis a ter complicações e alterações nas cordas vocais. 
            Profissionais que utilizam a voz como instrumento de trabalho, como cantores, professores, 
            radialistas, locutores, e operadores de telemarketing, estão na lista.
            Além disso, o consumo exagerado de álcool, cigarro e cafeína também podem causar 
            modificações e patologias nas cordas vocais. Por isso, se o sintoma parecer simples, 
            mas for recorrente ou persistente, é imprescindível que se procure um médico 
            otorrinolaringologista para uma avaliação. Alterações nas pregas vocais podem ter causas 
            simples e de fácil tratamento, mas também podem indicar algo mais sério e com necessidade 
            urgente de tratamento. 
          </p>
        </div>
      </div>
  )
}