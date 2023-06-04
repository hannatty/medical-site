import HeaderName from "@/components/HeaderName";
import styles from './styles.module.scss';
import Image from "next/image";
import calendar_icon from '../../../public/calendar_icon.png';

export default function Article5() {
  return (
    <div className={styles.general_container}>
      <div>
        <HeaderName />
      </div>    
      <div className={styles.section_title}>
        <h1>Avaliação pré-operatória: A importância risco cirúrgico</h1>
        <div className={styles.section_subtitle}>
          <Image src={calendar_icon} alt="ícone" className={styles.icon_style}></Image>
          <p>Publicado em 26/07/201</p>
        </div>
      </div>
      <div className={styles.topic_title}>
        <p>
          A realização de uma intervenção cirúrgica traz aflição e ansiedade a quem será submetido a ela. 
          Isso porque, por menores que sejam, existem riscos à vida do paciente. O sucesso da cirurgia depende 
          da competência médica e de uma eficiente avaliação pré-operatória.
          Você já precisou fazer essa avaliação? Caso não, saiba que essa é uma etapa tão importante quanto a própria cirurgia. 
          Nesse post, você vai entender mais sobre a importância do risco cirúrgico.
        </p>
      </div>
      <div className={styles.topic_title}>
        <h2>O que é a avaliação pré-operatória?</h2>
        <p>
          É um procedimento de rotina realizado antes de qualquer intervenção cirúrgica. Essa avaliação é feita para que a equipe 
          médica conheça o estado clínico do paciente. A partir do resultado desse exame, os médicos têm ciência da aptidão ou inaptidão 
          do indivíduo.
          A avaliação pré-operatória é composta por anamnese (entrevista), exames físicos, de diagnóstico e laboratoriais. 
          Esses exames variam de acordo com o tipo de procedimento ao qual o paciente será submetido. 
          A partir da anamnese, o médico irá conhecer o histórico do paciente. Assim, podem ser solicitados exames adicionais e o 
          monitoramento das condições clínicas que possam interferir durante a cirurgia.
          De modo geral, essa avaliação permite estimar o risco cardíaco, as complicações pulmonares, neurológicas e infecciosas, 
          além de orientar a equipe médica na escolha da melhor técnica e circunstância para a realização do procedimento.  
          Os pacientes também são beneficiados pela avaliação do risco cirúrgico, pois, a partir dos resultados, é possível reduzir o 
          período de internação e de permanência hospitalar.
          Contudo, quando há um procedimento de emergência, pode não haver tempo para que a avaliação seja realizada de forma completa. 
          Nessas situações, a realização da anamnese é imprescindível para que o histórico do paciente seja conhecido.
        </p>
        </div>
        <div className={styles.topic_title}>
          <h2>
            Etapas da avaliação pré-operatória
          </h2>
          <ol>
            <li>
              <h3>Anamnese</h3>
              <p>
                A anamnese nada mais é do que uma entrevista com o candidato à cirurgia. Nessa entrevista, a equipe médica procura 
                obter as seguintes informações:
              </p>
              <ul>
                <li className={styles.list_style}>
                  Se existem sintomas que indicam um doença ou infecção pulmonar;
                </li>
                <li className={styles.list_style}>
                  Se o paciente possui algum dos fatores de risco para sangramento excessivo, trombose, infecções e doenças cardíacas;                
                </li>
                <li className={styles.list_style}>
                Se é portador de diabetes, alergias, hipertensão arterial, doenças do coração e hepáticas, asma e DPOC;
                </li>
                <li className={styles.list_style}>
                  Se já sofreu alguma complicação cirúrgica;
                </li>
                <li className={styles.list_style}>
                  Se é fumante ativo, consome bebidas alcoólicas ou utiliza drogas ilícitas;                
                </li>
                <li className={styles.list_style}>
                  Se faz uso contínuo de medicamentos;
                </li>
                <li>
                  Se possui histórico de apneia obstrutiva do sono ou ronca excessivamente.
                </li>
              </ul>
            </li>
              <li>
                <h3>Exame físico</h3>
                <p>
                  O exame físico é feito na região que será operada e no sistema cardiopulmonar. 
                  Quando houver a necessidade de uma anestesia espinal, o médico irá avaliar a 
                  presença de alguma anomalia nas costas.
                </p>
              </li>
              <li>
                <h3>Exames laboratoriais</h3>
                <p>
                  Geralmente, os exames laboratoriais não são realizados em pacientes saudáveis e que 
                  serão submetidos a procedimentos de baixo risco. Quando são necessários, são realizados os exames:
                </p>
                <ul>
                  <li className={styles.list_style}>Hemograma completo e urina;</li>
                  <li className={styles.list_style}>Eletrólitos séricos, creatinina e glicose plasmática;</li>
                  <li className={styles.list_style}>Enzimas hepáticas;</li>
                  <li className={styles.list_style}>Estudos de coagulação e tempo de sangramento se o paciente possuir histórico familiar de doença associada à sangramento;</li>
                  <li className={styles.list_style}>ECG em pessoas com risco de doença coronariana;</li>
                  <li className={styles.list_style}>Radiografia do tórax em pacientes jovens e quando aplicar anestesia geral;</li>
                  <li className={styles.list_style}>Exames de função pulmonar;</li>
                  <li className={styles.list_style}>Testes de esforço e angiografia coronariana se o paciente possuir doença arterial coronariana.</li>
                </ul>
              </li>
            </ol>
            <p>
              Realizar a avaliação pré-operatória permite calcular o risco cirúrgico e, 
              consequentemente, reduzir as chances de morte, sequelas e complicações após a cirurgia. Quando o paciente não está apto, o médico pode cancelar ou reagendar a cirurgia.
              Entendeu a importância dessa avaliação pré-operatória? Caso esteja para fazer 
              algum procedimento cirúrgico, converse com seu médico sobre o risco cirúrgico.
            </p>     
        </div>
      </div>
  )
}